const defaultState = {
  page:1,
  detailId:1,
  classId:1
}

export default (state=defaultState,action) => {
  if(action.type === 'add_title') {
    // //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'look_exam') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'return_page') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'create_exam') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'check_exam') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'correct_exam') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'look_task') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'show_grade') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'show_exam') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'change_page') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  if(action.type === 'exam_detail') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    newState.detailId = action.id;
    return newState;
  }
  if(action.type === 'change_class') {
    //console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.classId = action.id;
    return newState;
  }
  return state;
}