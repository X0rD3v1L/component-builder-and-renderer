export const renderFormData = data => ({
  type: 'RENDER_DATA',
  data
})
export const updateDependentData = (data,index) => ({
  type: 'UPDATE_DATA',
  data,
  index
})
export const saveData = (data,id) => ({
  type: 'SAVE_DATA',
  data,
  id
})
export const evalAction = data => ({
  type: 'EVAL_ACTION',
  data
})
export const editButtonRenderData = data => ({
  type: 'EDIT_BUTTON_RENDER_DATA',
  data
})
export const saveInitialData = (data,id) => ({
  type: 'INITIAL_SAVE_DATA',
  data,
  id
})
export const createControlData = data => ({
  type: 'CREATE_DATA',
  data
})