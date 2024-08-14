import React,{useState} from "react";
import { Modal } from "react-bootstrap";
import DisplayOptions from "../display-options/display-options";


function OptionsTableModalPopup(props) {
    const { showOptions, title, optionsData, optionsHeaders, jsonProperty, name,jsonIndex } = props
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
        // setShow(false);
        props.showOptions()
    }
    
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <DisplayOptions title = {title} optionsData={optionsData} optionsHeaders={optionsHeaders} jsonProperty={jsonProperty} name={name} jsonIndex={jsonIndex} create={props.create}/>
        </Modal.Body>            
        </Modal>
      </>
    );
  }
  
export default OptionsTableModalPopup;
