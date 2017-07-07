const initialState = {
    ids: [
        "Remco", "Bob", "Lasse", "Jeroen"
    ],
    entities: {
        "Remco" : {
            name: "Remco"
        },
        "Bob" : {
            name: "Bob"
        },
        "Lasse" : {
            name: "Lasse"
        },
        "Jeroen" : {
            name: "Jeroen"
        },
    }
}


export const reducer = (state = initialState, action) => {
    return state;
}

export const getIds = state => state.ids;
export const getEntities = state => state.entities;
export const getAll = state => state.ids.map(id => state.entities[id]);