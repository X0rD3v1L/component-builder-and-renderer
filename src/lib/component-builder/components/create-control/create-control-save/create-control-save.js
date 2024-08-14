import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import './create-control-save.css';
import { apiConstants } from "../../../../component-renderer/constants/api-constants";
import { sendRestRequest } from "../../../../component-renderer/service-request/service-request";


const CreateControlSave = (props) => {
    console.log(props, "props in save control-----")
    const [state, setState] = useState({ controlName: '', controlDesc: '', autoCompleteModalShow: false })


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    let formData = props.data
    useEffect(() => {
        if (props.data) {
       
            formData["title"] = state.controlName
            console.log(formData, "formData in save control")
        }
    }, [state.controlName])
    
    const AutoComplete=()=>{
        let params = {
            url: apiConstants.SAVE_CONTROL_AUTO_COMPLETE.URL,
            methodType: apiConstants.SAVE_CONTROL_AUTO_COMPLETE.METHOD,
        }
        sendRestRequest(params, serviceUrl).then((res) => {
            console.log(res,"auto complete api res")
        });
    }
    const onSave = () => {
        let params = {
            url: apiConstants.SAVE_CONTROL.URL,
            methodType: apiConstants.SAVE_CONTROL.METHOD,
            requestData: {
                status: 1,
                formControlName: state.controlName,
                fromControlDesc: state.controlDesc,
                buildedControlData: JSON.stringify(formData)
            }
        }
        sendRestRequest(params, serviceUrl).then((res) => {
            setState({...state, autoCompleteModalShow:true})
        });
        alert('Saved successfully')
            if (window.confirm('Saved successfully')) {
          
                AutoComplete()
            }
        
    }

    return (
        <>
        
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0">
                            <span>Control Name:</span>
                        </Form.Label>
                        <Form.Control type="text" name="controlName" className="control-name-text" value={state.controlName} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0">
                            <span>Control Description:</span>
                        </Form.Label>
                        <Form.Control type="text" name="controlDesc" className="control-name-text" value={state.controlDesc} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex justify-content-center mt-5">
                <button className="save-control-btn btn btn-success" onClick={onSave} disabled={state.controlName.length > 0 ? false : true}>Save</button>
            </div>

        </>
    )
}
export default CreateControlSave