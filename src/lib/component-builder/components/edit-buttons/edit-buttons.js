import React, { useState } from "react";
import { staticJson } from "../left-menu/left-menu-constants";
import "./edit-buttons.css";
import { editButtonRenderData } from "../../../component-renderer/actions";
import store from "../../../component-renderer/store";

function EditButtons(props) {
    const handleClick = (e,operation) =>{
        e.preventDefault();
        let changedData = props.data
        console.log(changedData,"changed Data")
        
        if(operation=="copy") {
            let appendedJson = JSON.parse(JSON.stringify(staticJson[changedData.settings.type][0]))
            let postFix = changedData.settings.properties.id
        
            appendedJson.title = 'number field'
            appendedJson.settings.properties.id = postFix + "_copy"
            appendedJson.settings.properties.name = postFix + "_copy"
            appendedJson.settings.properties.model = postFix + "_copy"
           
            props.callBack(appendedJson, operation, props.index)
        }
        if (operation == "close") {
            if (window.confirm("Do you want to remove?")) {
                props.callBack(changedData, operation, props.index)
            }
        }
        if(operation=="edit"){
            console.log(operation, e, props, "console in edit")
            props.callBack(props.data, operation, props.index)
          
        }
        
    }
    console.log(store.getState(),"Storee")
    return (
        <div className="edit-buttons">
            <div onClick={(e)=>handleClick(e,"copy")} data-testid="copyDiv"><i className="far fa-copy"></i></div>
            <div onClick={(e)=>handleClick(e,"edit")} data-testid="editDiv"><i className="far fa-edit"></i></div>
            <div onClick={(e)=>handleClick(e,"close")} className="close-styles" data-testid="closeDiv">
                <i className="fas fa-window-close"></i></div>
        </div>
    );
}

export default EditButtons;
