/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppMenusQueryVariables = {||};
export type AppMenusQueryResponse = {|
  +menu: $ReadOnlyArray<{|
    +_id: number,
    +name: string,
    +photo: string,
    +price: any,
    +type: string,
  |}>
|};
export type AppMenusQuery = {|
  variables: AppMenusQueryVariables,
  response: AppMenusQueryResponse,
|};
*/

/*
query AppMenusQuery {
  menu {
    _id: id
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
          name: "id",
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
      name: "AppMenusQuery",
      selections: (v0 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "AppMenusQuery",
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: "f23934410bdf4cd3f8a65ac88f5017b0",
      id: null,
      metadata: {},
      name: "AppMenusQuery",
      operationKind: "query",
      text:
        "query AppMenusQuery {\n  menu {\n    _id: id\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '68b2450fece399bff3e6e1d3d95c1ca8';

module.exports = node;
