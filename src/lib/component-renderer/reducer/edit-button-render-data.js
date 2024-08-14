const editButtonRenderData = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_BUTTON_RENDER_DATA':
        return action.data;  

      default:
        return state
    }
  }
  
  export default editButtonRenderData;