import v4 from 'uuid';

const initialState = {
  ids: [1],
  entities: {
    1: {
      from: 1,
      to: 2
    }
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHALLENGE':
      return {
        ...state,
        [v4()]: {
          from: action.payload.from,
          to: action.payload.to
        }
      };
  }
  return state;
};

export const getIds = state => state.ids;
export const getEntities = state => state.entities;
export const getAll = state => state.ids.map(id => state.entities[id]);
