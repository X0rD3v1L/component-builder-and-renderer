
const saveData = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {...state, 
          [action.id]:{...state[action.id],[Object.keys(action.data)[0]]:Object.values(action.data)[0]}};
    case 'INITIAL_SAVE_DATA':
      return {...state, [action.id]:action.data};
    default:
      return state
  }
}

export default saveData;