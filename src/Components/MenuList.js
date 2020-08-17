import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import environment from "../Relay/environment";
import MenuItem from "./MenuItem";

const MenuList = () => {
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
                  <MenuItem menu={menu} />
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
