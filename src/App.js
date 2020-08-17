import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from 'react-relay';
import environment from './Relay/environment';

const MenuList = () => {
  return (
    <Container>
      <Row>
        <h1>Cafe Menu</h1>
      </Row>
      <Row>
        <Col><h2>Menu</h2></Col>
        <Col md={{ span: 2, offset: 6 }}><Button>Add Menu Item</Button></Col>
      </Row>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppMenusQuery {
            menu {
              _id: id
              name
              photo
              price
              type
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            console.error(error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return props.menu.map((menu) => (
        <Col md={4} key={menu._id}>
          <Card>
            <Card.Img variant="top" src={menu.photo} />
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col>{menu.name}</Col>
                  <Col md={{ span: 4, offset: 3 }}>{menu.price}</Col>
                </Row>
              </Card.Title>
              <Card.Text>{menu.type}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ));
        }}
      />
    </Container>
  );
}

export default MenuList;

