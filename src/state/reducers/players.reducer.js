const initialState = {
    ids: [
        1,2,3,4
    ],
    entities: {
        1 : {
            id: 1,
            name: "Remco",
            rating: 1500
        },
        2 : {
            id: 2,
            name: "Bob",
            rating: 1500
        },
        3 : {
            id: 3,
            name: "Lasse",
            rating: 1500
        },
        4 : {
            id: 4,
            name: "Jeroen",
            rating: 1500
        },
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHALLENGE': {
            return state;
        }
        default:
            return state;
    }
}

export const getIds = state => state.ids;
export const getEntities = state => state.entities;
export const getAll = state => state.ids.map(id => state.entities[id]);