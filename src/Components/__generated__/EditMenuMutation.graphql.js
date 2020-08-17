/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type menu_set_input = {|
  menuId?: ?number,
  name?: ?string,
  photo?: ?string,
  price?: ?any,
  type?: ?string,
|};
export type menu_pk_columns_input = {|
  menuId: number
|};
export type EditMenuMutationVariables = {|
  _set: menu_set_input,
  pk_columns: menu_pk_columns_input,
|};
export type EditMenuMutationResponse = {|
  +update_menu_by_pk: ?{|
    +menuId: number,
    +name: string,
    +photo: string,
    +price: any,
    +type: string,
  |}
|};
export type EditMenuMutation = {|
  variables: EditMenuMutationVariables,
  response: EditMenuMutationResponse,
|};
*/

/*
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
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "_set",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "pk_columns",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "_set",
            variableName: "_set",
          },
          {
            kind: "Variable",
            name: "pk_columns",
            variableName: "pk_columns",
          },
        ],
        concreteType: "menu",
        kind: "LinkedField",
        name: "update_menu_by_pk",
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
            name: "photo",
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
            name: "type",
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
      name: "EditMenuMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "EditMenuMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "192ab10c21e73557d7bfdfff0c4ef318",
      id: null,
      metadata: {},
      name: "EditMenuMutation",
      operationKind: "mutation",
      text:
        "mutation EditMenuMutation(\n  $_set: menu_set_input!\n  $pk_columns: menu_pk_columns_input!\n) {\n  update_menu_by_pk(_set: $_set, pk_columns: $pk_columns) {\n    menuId\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'c7bb70ebac6ef9118b659cd70c846d1a';

module.exports = node;
