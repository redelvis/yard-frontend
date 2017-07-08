/* eslint-disable import/prefer-default-export */
// @flow

const baseURL = 'https://api.jqestate.ru/v1';

export function get(resource: string) {
  return fetch(`${baseURL}${resource}`).then(res => res.json());
}
