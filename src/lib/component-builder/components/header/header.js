import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ModalPopup from "./modal/modal";
import { apiConstants } from "../../../component-renderer/constants/api-constants";
import { sendRestRequest } from "../../../component-renderer/service-request/service-request";
import store from "../../../component-renderer/store";
import "./header.css";


function Header(props) {
  const [state, setState] = useState({showModal: false, modalHandle:{}, searchedFiles:[], searchInput:'', selectedRowData:[]})
  const [noOfColumns, setNoOfColumns] = useState('col-md-12')
  const [formData, setFormData] = useState({formId:'', formMapId:'', mode:''})

  const getData = (e) => {
      setState({...state, searchInput :e.target.value})     
  };

  const handleClick = (flag) => {
      if(flag === 0) {
        let params = {
          url: apiConstants.SEARCH_SAVED_DOCUMENT.URL,
          methodType: apiConstants.SEARCH_SAVED_DOCUMENT.METHOD,

          requestData: {
              formName: state.searchInput, 
              status: 1,
              formId: null,
          },
      };

      sendRestRequest(params, props.serviceUrl).then((res) => {

          setState({...state, showModal:true, modalHandle:{title: "Search", body: res.dataBean, }})
          setFormData({...formData, formId:res.dataBean[0].formId, formMapId:res.dataBean[0].formMapId})
      });
      } else {
        setState({...state, showModal:true,modalHandle:{title: "Preview", body: 'Preview Saved Forms...'}})
         
      }
  }
  const setData = (data) => {
    console.log(data, 'selectedRowData')
    if (data) {
      setState({ ...state, searchInput: data[0].formName, showModal: false })
      props.getSelectedFormData(data)
    } else {
      setState({ ...state, showModal: false })
    }
  }
  console.log(formData,"...formdata----")
 const saveForm = () =>{
  console.log(store.getState().renderData);
  let params = {
    url: 'formData',
    requestData: {
      buildedFormData:JSON.stringify(store.getState().renderData),
      createdBy:'',

      formName:state.searchInput,
      noOfColumns:noOfColumns,
      status:1
    },
    methodType:(formData.formId && formData.formMapId) ?"PUT":'POST'
    
  }


if(formData.formId){
  params.requestData["formId"]=formData.formId
  params.requestData["formMapId"]=formData.formMapId
}

  sendRestRequest(params,props.serviceUrl).then((saveRes)=>{
    window.alert(saveRes.successMessage);
  })
 }
 const handleColumns=(e) =>{
  setNoOfColumns(e.target.value)
  props.getNoOfColumns(e.target.value)
 }
  return (
    <Row style={{ border: "1px solid #d1d1d1"}}>
   
      
        <Col xs={12} sm={12} md={3} lg={3} className="form-field">
          <select name="noOfColumns" value={noOfColumns} onChange={handleColumns}>
            <option value="col-md-12">
              1 Field Form
            </option>
            <option value="col-md-6">2 Fields Form</option>
            <option value="col-md-4">3 Fields Form</option>
            <option value="col-md-3">4 Fields Form</option>
            <option value="col-md-2">6 Fields Form</option>
          </select>
        </Col>

        
        <Col xs={12} sm={12} md={5} lg={5} className="search-field">
          <input
            type="text"
            name="search-field"
            placeholder="Enter Form Name"
       
            value={state.searchInput}
            onChange={getData}
          />
          <Button
            className="fas fa-search"
            onClick={
             
                () => handleClick(0)}
            data-testid="searchButton"
          ></Button>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} className="btn-area">
          <div className="d-flex justify-content-end">
          <Button variant="success" onClick={saveForm} disabled={state.searchInput?false:true}>Save</Button>
          <Button variant="primary" onClick={() => handleClick(1)} className="button-styles">
            Preview
          </Button>
          </div>
        </Col>

      {state.showModal && <ModalPopup
          show={state.showModal}
          onHide={setData }
          title={state.modalHandle.title}
          body={state.modalHandle.body}   
          jsondata={store.getState().renderData}
        />}
    </Row>
  );
}

export default Header;
