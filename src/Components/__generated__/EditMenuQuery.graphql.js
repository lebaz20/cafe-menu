/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditMenuQueryVariables = {|
  menuId: number
|};
export type EditMenuQueryResponse = {|
  +menu_by_pk: ?{|
    +_id: number,
    +name: string,
    +photo: string,
    +price: any,
    +type: string,
  |}
|};
export type EditMenuQuery = {|
  variables: EditMenuQueryVariables,
  response: EditMenuQueryResponse,
|};
*/

/*
query EditMenuQuery(
  $menuId: Int!
) {
  menu_by_pk(menuId: $menuId) {
    _id: menuId
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
        name: "menuId",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "menuId",
            variableName: "menuId",
          },
        ],
        concreteType: "menu",
        kind: "LinkedField",
        name: "menu_by_pk",
        plural: false,
        selections: [
          {
            alias: "_id",
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
      name: "EditMenuQuery",
      selections: (v1 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "EditMenuQuery",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "2f741d111bbdcb4355d0f1a7a7e01588",
      id: null,
      metadata: {},
      name: "EditMenuQuery",
      operationKind: "query",
      text:
        "query EditMenuQuery(\n  $menuId: Int!\n) {\n  menu_by_pk(menuId: $menuId) {\n    _id: menuId\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '9f7228beba6c6438738920598eb4677b';

module.exports = node;
