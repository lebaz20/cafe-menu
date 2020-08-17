/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditMenuQueryVariables = {||};
export type EditMenuQueryResponse = {|
  +menu: $ReadOnlyArray<{|
    +_id: number,
    +name: string,
    +photo: string,
    +price: any,
    +type: string,
  |}>
|};
export type EditMenuQuery = {|
  variables: EditMenuQueryVariables,
  response: EditMenuQueryResponse,
|};
*/

/*
query EditMenuQuery {
  menu {
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
      alias: null,
      args: null,
      concreteType: "menu",
      kind: "LinkedField",
      name: "menu",
      plural: true,
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
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EditMenuQuery",
      selections: (v0 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "EditMenuQuery",
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: "c0284eeb2d034784a769b498b575cdc9",
      id: null,
      metadata: {},
      name: "EditMenuQuery",
      operationKind: "query",
      text:
        "query EditMenuQuery {\n  menu {\n    _id: menuId\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '1e385b76fdc5b0a7e4efefda4d34d449';

module.exports = node;
