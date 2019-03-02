export const ADD_MODEL = 'ADD_MODEL';

export function addModel(manufacturer, year, origin) {
  return {
    type: ADD_MODEL,
    payload: {
      manufacturer,
      year,
      origin
    }
  }
}