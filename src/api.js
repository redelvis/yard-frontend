/* eslint-disable import/prefer-default-export */

const baseURL = 'https://api.jqestate.ru/v1';

export function get(resource) {
  return fetch(`${baseURL}${resource}`).then(res => res.json());
  console.log(resource);
}
