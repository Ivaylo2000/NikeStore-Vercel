const addHandler = (items, dispatch) => {
  dispatch({
    type: "Add",
    payload: items,
  });
};

export default addHandler;
