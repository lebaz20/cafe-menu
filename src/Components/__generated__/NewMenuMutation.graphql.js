/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type menu_insert_input = {|
  menuId?: ?number,
  name?: ?string,
  photo?: ?string,
  price?: ?any,
  type?: ?string,
|};
export type NewMenuMutationVariables = {|
  object: menu_insert_input
|};
export type NewMenuMutationResponse = {|
  +insert_menu_one: ?{|
    +menuId: number,
    +name: string,
    +type: string,
    +price: any,
    +photo: string,
  |}
|};
export type NewMenuMutation = {|
  variables: NewMenuMutationVariables,
  response: NewMenuMutationResponse,
|};
*/

/*
mutation NewMenuMutation(
  $object: menu_insert_input!
) {
  insert_menu_one(object: $object) {
    menuId
    name
    type
    price
    photo
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "object",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "object",
            variableName: "object",
          },
        ],
        concreteType: "menu",
        kind: "LinkedField",
        name: "insert_menu_one",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "menuId",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "photo",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Fragment",
      metadata: null,
      name: "NewMenuMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "NewMenuMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "b60e6cbae673a9e33e534ee6b35cf0f3",
      id: null,
      metadata: {},
      name: "NewMenuMutation",
      operationKind: "mutation",
      text:
        "mutation NewMenuMutation(\n  $object: menu_insert_input!\n) {\n  insert_menu_one(object: $object) {\n    menuId\n    name\n    type\n    price\n    photo\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '42c0b9472b12b7fdb82cb2ae22fb963d';

module.exports = node;
