import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form, Row, Col, Button } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import axios from "axios";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../Relay/environment";

const NewMenu = () => {
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState();
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!photo || photo.length === 0) {
      setMessage("Photo select a photo.");
      setMessageType("danger");
      return false;
    }
    let uploadResponse;
    try {
      const formData = new FormData();
      formData.append("file", photo[0]);
      uploadResponse = await axios.post(
        "https://api.anonymousfiles.io/?expires=1w",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (e) {
      console.error(e);
      setMessage("Photo upload failed!");
      setMessageType("danger");
      return false;
    }

    const photoUrl = `https://anonymousfiles.io/f/${uploadResponse.data.name}`;

    const mutation = graphql`
      mutation NewMenuMutation($object: menu_insert_input!) {
        insert_menu_one(object: $object) {
          menuId
          name
          type
          price
          photo
        }
      }
    `;

    let insertResponse;
    try {
      insertResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            object: { type, name, price, photo: photoUrl },
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
      setMessage("Failed to insert new entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Menu item #${insertResponse.insert_menu_one.menuId} saved successfully.`
    );
    setMessageType("success");
    return true;
  };

  return (
    <>
      <Row>
        <Col>
          <h2>Add Menu Item</h2>
        </Col>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <Form encType="multipart/form-data" onSubmit={onSubmit}>
        <Form.Group as={Row} controlId="type">
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option></option>
              <option>Side</option>
              <option>Main Course</option>
              <option>Dessert</option>
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

export default NewMenu;
