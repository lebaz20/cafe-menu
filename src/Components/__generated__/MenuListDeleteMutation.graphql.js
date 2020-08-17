/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MenuListDeleteMutationVariables = {|
  menuId: number
|};
export type MenuListDeleteMutationResponse = {|
  +delete_menu_by_pk: ?{|
    +menuId: number
  |}
|};
export type MenuListDeleteMutation = {|
  variables: MenuListDeleteMutationVariables,
  response: MenuListDeleteMutationResponse,
|};
*/

/*
mutation MenuListDeleteMutation(
  $menuId: Int!
) {
  delete_menu_by_pk(menuId: $menuId) {
    menuId
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
        name: "delete_menu_by_pk",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "menuId",
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
      name: "MenuListDeleteMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "MenuListDeleteMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "2f7770fa60cff4a51102292f59f8c925",
      id: null,
      metadata: {},
      name: "MenuListDeleteMutation",
      operationKind: "mutation",
      text:
        "mutation MenuListDeleteMutation(\n  $menuId: Int!\n) {\n  delete_menu_by_pk(menuId: $menuId) {\n    menuId\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '7310de4f553a2892f299b4f04e5a9e4d';

module.exports = node;
