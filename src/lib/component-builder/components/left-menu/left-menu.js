import React,{useEffect} from 'react';
import { Accordion } from "react-bootstrap";
import { IconContext } from "react-icons";
import { formUIElements, staticJson } from "./left-menu-constants";
import { useState } from "react";
import "./left-menu.css";
import { apiConstants } from "../../../component-renderer/constants/api-constants";
import store from '../../../component-renderer/store';

function Leftmenu(props) {
  const [searchField,setSearchField] = useState("");

  useEffect(() => {
    getAutoCompleteSuggestions(); 
  },[])
  
  const handleChange = (e) => {
      setSearchField(e.target.value);
  }

  const filteredFormUIElements = formUIElements.filter(formUIElement =>
    formUIElement.displayName.toLowerCase().startsWith(searchField.toLowerCase())
  );

  const getAutoCompleteSuggestions = () => {
    let params = {
      url: apiConstants.GET_SAVED_ELEMENTS.URL,
      methodType: apiConstants.GET_SAVED_ELEMENTS.METHOD
    }
  }

  const drag = (e, formUIElement) => {
    if(formUIElement.name){
      e.dataTransfer.setData("text",formUIElement.name);
    }else{
      staticJson[formUIElement.title] = [formUIElement]
      e.dataTransfer.setData("text",formUIElement.title);
    }
  }


  return (
    <>
    <div >
      <Accordion defaultActiveKey="0" className="accordian-styles">
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
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordian-header-styles">
              FORM UI ELEMENTS
            </Accordion.Header>
            <Accordion.Body>
              <input type="search" className="search-input" placeholder="Search.." onChange={handleChange}/>
            </Accordion.Body>
            <Accordion.Body className="accordian-body-styles">
              <div className="grid-container-left-menu">
                {filteredFormUIElements.map((formUIElement) => (
                  <div className="icon-styles" draggable={true} onDragStart={(e) => drag(e, formUIElement)}>
                    {formUIElement.icon}
                    <p className="margin-title">
                      <strong>{formUIElement.displayName}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          </IconContext.Provider>
      </Accordion>
    </div>
    </>
  );
}

export default Leftmenu;
