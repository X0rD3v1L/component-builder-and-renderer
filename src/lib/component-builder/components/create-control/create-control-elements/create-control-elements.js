import React, {  useEffect,useState } from "react";
import "./create-control-elements.css"
import { formUIElements, staticJson } from "../../left-menu/left-menu-constants";
import { IconContext } from "react-icons";


const CreateControlElements = (props) => {
    
    const handleClick=(name)=>{
        props.getCustomElement(staticJson[name])
    }

    return (
        <div className="control-elements-menu">
                  <IconContext.Provider
          value={{
            style: {
              color: "#4F95F4",
              fontSize: "1em",
              border: "2px solid #4F95F4",
              padding: "5px 5px 5px 5px",
              margin: "10px 5px 5px 10px",
              height: "34px",
              width: "60px",
              borderRadius: "4px 4px 4px 4px",
            },
          }}
        >
            <span className="control-elements-menu-border">
                <strong>Create Control</strong>
                <div className="grid-container-left-menu">
                {formUIElements.map((formUIElement) => (
                  <div className="icon-styles" onClick={() => handleClick(formUIElement.name)}>
                    {formUIElement.icon}
                    <p className="margin-title">
                      <strong>{formUIElement.displayName}</strong>
                    </p>
                  </div>
                ))}
              </div>

            </span>
            </IconContext.Provider>
        </div>
    )
}

export default CreateControlElements;