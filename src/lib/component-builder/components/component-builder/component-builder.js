import React, {useState } from 'react';
import Leftmenu from "../left-menu/left-menu";
import DropZone from "../drop-zone/drop-zone";
import Header from "../header/header";
import { Row, Col } from "react-bootstrap";
import './component-builder.css';
import { Provider } from "react-redux";
import store from "../../../component-renderer/store";
import PropertiesZone from '../properties-zone/properties-zone';
import { renderFormData } from '../../../component-renderer/actions';


function ComponentBuilder({ serviceUrl }) {
    const [showProp, setShowProp] = useState(false)
    const [draggedElement, setDraggedElement] = useState()
    const [editIndex, setEditIndex] = useState()
    const [jsondata, setJsonData] = useState('')
    const [selectedFormData, setSelectedFormData] = useState()
    const [fromSearch, setFromSearch] = useState(false)
    const [noOfColumns,setNoOfColumns]=useState("")
    const showProperties = (draggedElement) => {
        setDraggedElement(draggedElement)
        setShowProp(true)
    }
    const editButtonCallback=(data,index)=>{
        setDraggedElement(data)
        setEditIndex(index.toString())
    }
    const removeButtonCallback=(data,index)=>{
        setDraggedElement(data)
        setEditIndex(index.toString())
    }
         
    const jsonCallback=(jsondata)=>{
        setJsonData(jsondata)
    }
    const getSelectedFormData =(data)=>{
        setSelectedFormData(JSON.parse(data[0].buildedFormData))
        let dragEle=JSON.parse(data[0].buildedFormData)
        setDraggedElement(dragEle[0])
        setFromSearch(true)
        setShowProp(true)
    }

    const getNoOfColumns=(data)=>{
        setNoOfColumns(data)
    }

    return (
        <Provider store={store}>
            <Row >
                <Col xs={12} md={2} lg={2} ><Leftmenu serviceUrl={serviceUrl} data-testid="leftmenu" /> </Col>
                <Col xs={12} md={8} lg={8}>
                    <Row>
                        <Col xs={12} md={12} lg={12} ><Header serviceUrl={serviceUrl} jsondata={store.getState().renderData} data-testid="header"  getSelectedFormData = {getSelectedFormData} getNoOfColumns={getNoOfColumns}/></Col>
                        <Col xs={12} md={12} lg={12}> <DropZone showProperties={showProperties}  editButtonCallback={editButtonCallback} removeButtonCallback={removeButtonCallback} jsonCallback={jsonCallback} storeData = {store.getState().renderData} data-testid="dropzone" selectedFormData={selectedFormData} noOfColumns={noOfColumns}/> </Col>
                    </Row>
                </Col>
                <Col xs={12} md={2} lg={2}>
                    <h1 className="properties-zone-header">Properties</h1>
                    {showProp && <div><PropertiesZone draggedElement={draggedElement} editIndex={editIndex} /></div>}
                </Col>
            </Row>
        </Provider>
    )
}

export default ComponentBuilder;