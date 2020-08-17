import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form, Row, Col, Button } from "react-bootstrap";
import ImageUploader from "react-images-upload";

const MenuForm = ({
  title,
  onSubmit,
  type: originalType,
  name: originalName,
  price: originalPrice,
  photo: originalPhoto,
}) => {
  const [type, setType] = useState(originalType);
  const [name, setName] = useState(originalName);
  const [price, setPrice] = useState(originalPrice);
  const [photo, setPhoto] = useState(originalPhoto);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  return (
    <>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <Form
        encType="multipart/form-data"
        onSubmit={(event) =>
          onSubmit({
            event,
            type,
            name,
            price,
            photo,
            message,
            messageType,
            setMessage,
            setMessageType,
          })
        }
      >
        <Form.Group as={Row} controlId="type">
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option></option>
              <option value="Side">Side</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="price">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              step=".01"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="photo">
          <Form.Label column sm={2}>
            Photo
          </Form.Label>
          <Col sm={10}>
            <ImageUploader
              withIcon={true}
              withPreview={true}
              singleImage={true}
              buttonText="Choose photo"
              onChange={setPhoto}
              imgExtension={[".jpeg", ".jpg", ".png"]}
              maxFileSize={5242880}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Save Item</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default MenuForm;
