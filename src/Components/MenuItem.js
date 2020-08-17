import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

const MenuItem = ({ menu, onDelete }) => {
  return (
    <Card>
      <Card.Img variant="top" src={menu.photo} />
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>{menu.name}</Col>
            <Col md={{ span: 4, offset: 2 }}>{menu.price}</Col>
          </Row>
        </Card.Title>
        <Card.Text>{menu.type}</Card.Text>
        <Row>
          <Col md={3}>
            <Link to={`/edit/${menu._id}`}>
              <Button>Edit</Button>
            </Link>
          </Col>
          <Col md={3}>
            <Button onClick={() => onDelete(menu._id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
