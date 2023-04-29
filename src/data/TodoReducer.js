export const TodoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {texto: action.payload.text}]
        default:
            alert("Deu ruim meu nobre")
            return state
    }
};