import { combineReducers } from 'redux'
import renderData from './render-data';
import saveData from './save-data';
import editButtonRenderData from './edit-button-render-data';
import createControlData from './create-control-data';


export default combineReducers({
    renderData,
    saveData,
    editButtonRenderData,
    createControlData
})