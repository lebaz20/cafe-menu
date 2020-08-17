import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Row, Col, Button } from "react-bootstrap";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer, commitMutation } from "react-relay";
import environment from "../Relay/environment";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const onDelete = async (menuId) => {
    const mutation = graphql`
      mutation MenuListDeleteMutation($menuId: Int!) {
        delete_menu_by_pk(menuId: $menuId) {
          menuId
        }
      }
    `;

    let deleteResponse;
    try {
      deleteResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            menuId,
          },
          onCompleted: (response, errors) => {
            if (errors) {
              reject(errors);
            }
            resolve(response);
          },
          onError: (err) => reject(err),
        })
      );
    } catch (e) {
      console.error(e);
      setMessage("Failed to delete entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Menu item #${deleteResponse.delete_menu_by_pk.menuId} deleted successfully.`
    );
    setMessageType("success");
    setTimeout(() => {
      window.location.reload();
    }, 5 * 1000);
    return true;
  };

  return (
    <>
      <Row>
        <Col>
          <h2>Menu</h2>
        </Col>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/new">
            <Button>Add Menu Item</Button>
          </Link>
        </Col>
      </Row>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MenuListQuery {
            menu {
              _id: menuId
              name
              photo
              price
              type
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.error(error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          const size = 3;
          const menuChunks = Array.from(
            { length: Math.ceil(props.menu.length / size) },
            (value, index) =>
              props.menu.slice(index * size, index * size + size)
          );
          return menuChunks.map((menus) => (
            <Row key={menus[0]._id}>
              {menus.map((menu) => (
                <Col md={4} key={menu._id}>
                  <MenuItem menu={menu} onDelete={onDelete} />
                </Col>
              ))}
            </Row>
          ));
        }}
      />
    </>
  );
};

export default MenuList;
