const initialState = {
  count: 0,
  todo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      state = { ...state };
      state["count"] += 1;
      return state;
    }
    case "DECREMENT": {
      state = { ...state };
      state["count"] -= 1;
      return state;
    }
    case "ADDTODO": {
      state = { ...state };
      state["todo"] = [...state.todo, action.payload];
      return state;
    }
    case "REMOVE": {
      state = { ...state };
      state["todo"] = state.todo.filter((t) => t.id != action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
