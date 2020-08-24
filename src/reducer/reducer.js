const defaultState = {
  page:1,
}

export default (state=defaultState,action) => {
  if(action.type === 'add_title') {
    // console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'look_exam') {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'return_page') {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'create_exam') {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  return state;
}