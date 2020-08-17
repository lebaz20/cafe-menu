/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuListQueryVariables = {||};
export type MenuListQueryResponse = {|
  +menu: $ReadOnlyArray<{|
    +_id: number,
    +name: string,
    +photo: string,
    +price: any,
    +type: string,
  |}>
|};
export type MenuListQuery = {|
  variables: MenuListQueryVariables,
  response: MenuListQueryResponse,
|};
*/

/*
query MenuListQuery {
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
      name: "MenuListQuery",
      selections: (v0 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "MenuListQuery",
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: "be925693c454ccf2ef2cd823b5ed035c",
      id: null,
      metadata: {},
      name: "MenuListQuery",
      operationKind: "query",
      text:
        "query MenuListQuery {\n  menu {\n    _id: menuId\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'be8f122004087a6c39f290546b879cbc';

module.exports = node;
