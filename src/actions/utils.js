/**
 * Utils
 * @flow
 */
export function handleErrors(response: Object) {
  if(!response.ok) {
    console.error(`Error ${response.status}`);
  }
  return response;
}
