import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal ,Row,Col} from "react-bootstrap";
import "./create-control.css";
import CreateControlElements from "./create-control-elements/create-control-elements";
import CreateControlPreview from "./create-control-preview/create-control-preview";
import PropertiesZone from "../properties-zone/properties-zone";
import CreateControlSave from "./create-control-save/create-control-save";
import store from "../../../component-renderer/store";
import { connect } from 'react-redux';


const CreateControl=(props)=> {
  const [state, setState] = useState({ show:true});
  const [customEle,setCustomEle]=useState([])
  const [customEleUpdated,setCustomEleUpdated]=useState(false)
  
  useEffect(()=>{
    setCustomEleUpdated(true)
  },[customEle])

  const onClose=()=>{
    setState({...state,show:false})
  }

  const getCustomElement=(data)=>{
      setCustomEle(data) 
  }
 
  useEffect(()=>{
      if(store.getState().createControlData){
        setCustomEle(store.getState().createControlData)
      }
  },[props.state.createControlData])
  
  return (
    <Modal
      show={true}
      onHide={props.onClose}
      backdrop="static"
      size="xl"
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton closeVariant="white" className="create-control-modal-header">
        <Modal.Title>
          <strong>Create Control</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
            <Col lg={3} sm={12}><CreateControlElements getCustomElement={getCustomElement}/></Col>
            <Col lg={6} sm={12} >
                <div className="create-control-save"><CreateControlSave data={customEle[0]}/></div>
                <div className="mt-3"><CreateControlPreview customEleData={customEle}/></div>
            </Col>
            <Col lg={3} sm={12}>
            <h1 className="properties-zone-header">Properties</h1>
            {customEle.length>0 && <div><PropertiesZone draggedElement={customEle[0]} renderData={customEle} create={true} customEleUpdated={customEleUpdated}/></div>}
            </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(CreateControl)
