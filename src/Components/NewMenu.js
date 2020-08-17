import React from "react";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import MenuForm from "./MenuForm";
import environment from "../Services/Relay/environment";
import upload from "../Services/imageUploader";

const NewMenu = () => {
  const onSubmit = async ({
    event,
    type,
    name,
    price,
    photo,
    message,
    setMessage,
    messageType,
    setMessageType,
  }) => {
    event.preventDefault();

    if (!photo || photo.length === 0) {
      setMessage("Photo select a photo.");
      setMessageType("danger");
      return false;
    }
    let photoUrl;
    try {
      photoUrl = await upload(photo);
    } catch (e) {
      console.error(e);
      setMessage("Photo upload failed!");
      setMessageType("danger");
      return false;
    }

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

  return <MenuForm title="Add Menu Item" onSubmit={onSubmit} />;
};

export default NewMenu;
