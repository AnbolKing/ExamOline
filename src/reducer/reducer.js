const defaultState = {
  page:1,
}

export default (state=defaultState,action) => {
  if(action.type === 'add_title') {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  return state;
}