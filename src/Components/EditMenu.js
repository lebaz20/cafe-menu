import React from "react";
import { useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer, commitMutation } from "react-relay";
import MenuForm from "./MenuForm";
import environment from "../Services/Relay/environment";
import upload from "../Services/imageUploader";

const EditMenu = () => {
  const { id } = useParams();

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

    let photoUrl;
    if (Array.isArray(photo) && photo.length > 0) {
      try {
        photoUrl = await upload(photo);
      } catch (e) {
        console.error(e);
        setMessage("Photo upload failed!");
        setMessageType("danger");
        return false;
      }
    }

    const mutation = graphql`
      mutation EditMenuMutation(
        $_set: menu_set_input!
        $pk_columns: menu_pk_columns_input!
      ) {
        update_menu_by_pk(_set: $_set, pk_columns: $pk_columns) {
          menuId
          name
          photo
          price
          type
        }
      }
    `;

    let updateResponse;
    const updatedMenu = { type, name, price };
    if (photoUrl) {
      updatedMenu.photo = photoUrl;
    }
    try {
      updateResponse = await new Promise((resolve, reject) =>
        commitMutation(environment, {
          mutation,
          variables: {
            pk_columns: { menuId: id },
            _set: updatedMenu,
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
      setMessage("Failed to update entry!");
      setMessageType("danger");
      return false;
    }

    setMessage(
      `Menu item #${updateResponse.update_menu_by_pk.menuId} saved successfully.`
    );
    setMessageType("success");
    return true;
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EditMenuQuery($menuId: Int!) {
          menu_by_pk(menuId: $menuId) {
            _id: menuId
            name
            photo
            price
            type
          }
        }
      `}
      variables={{ menuId: id }}
      render={({ error, props }) => {
        if (error) {
          console.error(error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        const { price, photo, name, type } = props.menu_by_pk;
        return (
          <MenuForm
            title="Edit Menu Item"
            onSubmit={onSubmit}
            type={type}
            name={name}
            price={price.substr(1)}
            photo={photo}
          />
        );
      }}
    />
  );
};

export default EditMenu;
