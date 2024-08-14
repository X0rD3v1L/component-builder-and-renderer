const renderData = (state = [], action) => {
    switch (action.type) {
      case 'RENDER_DATA':
        return action.data;
      case 'UPDATE_DATA':
          let data = state.map((todo, index) => {
            if (index === action.index) {
             
              return Object.assign({}, todo, {
                reportFiltersListVo: action.data
              })
            }
            return todo
          })
        return data;     
      default:
        return state
    }
  }
  
  export default renderData;