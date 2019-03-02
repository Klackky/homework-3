export const ADD_MODEL = 'ADD_MODEL';

export function addModel(name, manufacturer, year, origin) {
  return {
    type: ADD_MODEL,
    payload: {
      name,
      manufacturer,
      year,
      origin
    }
  }
}