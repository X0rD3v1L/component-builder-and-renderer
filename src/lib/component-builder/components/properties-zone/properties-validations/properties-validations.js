import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import './properties-validations.css';
import store from "../../../../component-renderer/store";
import {renderFormData} from "../../../../component-renderer/actions";

const PropertiesValidations = (props) => {
    let storedDataJson = store.getState().renderData
    const {jsonData,jsonIndex}=props
    const [state, setState] = useState({
        mainShow: true,
        required: false,
        requiredCharacter: '*',
        minLength: '',
        maxLength: '',
        minValue:'',
        maxValue:'',
        pattern: '',
        minMaxPatShow: false,
        reqCharShow: false,
        reqCharShowProp:true,
    })
    //pets.includes('cat')
    

    useEffect(() => {
        const reqCharShowList=["Score - Multi Select ","Date","Date & Time","Time","Multi Select","Radio Button","Score Radio","Score Combo","Score Sum","Select Combo","Speech To Text",]
    const minMaxPatShowList=["Text Area","Text Field"]
    const minMaxValueList=["Number Field"]
    const noPropertiesList=["signature"]
    const noreqCharShowList=["Check Box"]
        const compTitle =jsonData.length > 0 && jsonData[jsonIndex].title
        console.log(jsonData[jsonIndex].title,"title---------")
         if (reqCharShowList.includes(compTitle) && state.required === true) {
            console.log(jsonData[jsonIndex].title,"reqCharShowList  -title---------")
            setState({ ...state, reqCharShow: true, reqCharShowProp:true })
        } 
        else if (minMaxPatShowList.includes(compTitle)) {
            console.log(jsonData[jsonIndex].title,"minMaxPatShowList  -title---------")
            setState({ ...state, minMaxPatShow: true, reqCharShowProp:true })
        }
        
        else if(noPropertiesList.includes(compTitle)) {
            console.log(jsonData[jsonIndex].title,"noPropertiesList  -title---------")
            setState({ ...state, mainShow: false,  })
        }
        else if(noreqCharShowList.includes(compTitle)){
        console.log(jsonData[jsonIndex].title,"noreqCharShowList  -title---------")

            setState({ ...state, reqCharShow: false, reqCharShowProp:false })
        }
    }, [state.required,props])

    // useEffect(() => {
    //     console.log(jsonData, jsonIndex, "props jsondata in validations")
    //     const compDataInputType =jsonData.length > 0 && jsonData[0].settings.inputType
    //     console.log(storedDataJson[jsonIndex].title,"title---------")
    //     if (compDataInputType === "number" || compDataInputType === "text" || compDataInputType === "textarea") {
    //         console.log("line 57 if-cond")
    //         setState({ ...state, minMaxPatShow: true })
    //     }
    //     else if ((compDataInputType === "select" || compDataInputType === "text" || compDataInputType === "radio" ) && state.required === true) {
    //         console.log("line 61 else if-cond")
    //         setState({ ...state, reqCharShow: true })
    //     } 
    //     else if(compDataInputType === "signature") {
    //         console.log("line 65 else if-cond")
    //         setState({ ...state, mainShow: false })
    //     }
    //     else{
    //         console.log("line 69 else-cond")
    //         setState({ ...state, reqCharShow: false })
    //     }
    // }, [props])
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        const storeRenderData = store.getState().renderData
        if(storeRenderData) {
        let storeDataJson = JSON.parse(JSON.stringify(store.getState().renderData))
        if(storeDataJson.length>0) {
        let modifiedData = storeDataJson[jsonIndex].settings.validations
        modifiedData[e.target.name] = e.target.value
        store.dispatch(renderFormData(storeDataJson))
        }
        }
    }

    const requiredChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked, reqCharShow:e.target.checked })
        const storeRenderData = store.getState().renderData
        if(storeRenderData) {
        let storeDataJson = JSON.parse(JSON.stringify(store.getState().renderData))
        if(storeDataJson.length>0) {
        let modifiedData = storeDataJson[jsonIndex].settings.validations
        modifiedData[e.target.name.split('-')[0]] = e.target.checked
        store.dispatch(renderFormData(storeDataJson))
        }
        }
    }
   
    return (
        <>
            {state.mainShow && <Form as={Col}>
                
                {state.minMaxPatShow &&<Col xs={12}>
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <div className="d-flex flex-row text-center justify-content-center">
                            <Col sx={4} >
                                <Form.Label className="mb-0 prop-label">
                                    <span>Minimum Length</span>
                                </Form.Label>
                            </Col>
                            <Col xs={8} className=''>
                                <Form.Control type="text" data-testid="min-len-check" className='textbox-width' placeholder="" name="minLength" onChange={handleChange} value={state.minLength} />
                            </Col>
                        </div>
                    </Form.Group>
                </Col>}
               {state.minMaxPatShow && <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <div className="d-flex flex-row text-center justify-content-center">
                            <Col sx={4} >
                                <Form.Label className="mb-0 prop-label">
                                    <span>Maximum Length</span>
                                </Form.Label>
                            </Col>
                            <Col xs={8} className=''>
                                <Form.Control type="text" className='textbox-width' placeholder="" name="maxLength" onChange={handleChange} value={state.maxLength} />
                            </Col>
                        </div>
                    </Form.Group>
                </Col>}
               {state.minMaxPatShow && <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <div className="d-flex flex-row text-center justify-content-center">
                            <Col sx={4} >
                                <Form.Label className="mb-0 prop-label">
                                    <span>Pattern</span>
                                </Form.Label>
                            </Col>
                            <Col xs={8} className=''>
                                <Form.Control type="text" className='textbox-width' placeholder="" name="pattern" onChange={handleChange} value={state.pattern} />
                            </Col>
                        </div>
                    </Form.Group>
                </Col>}
                
                <Col xs={12} >
                    <div className="d-flex flex-row ">
                        <Col xs={4} className="text-center">
                            <label id="require">Is Required</label>
                        </Col>
                        <Col xs={8}>
                            <Form.Check
                                type="checkbox"
                                name={"required-"+jsonIndex}
                                id={storedDataJson.length>0 && storedDataJson[jsonIndex].settings.properties.model}
                                key={storedDataJson.length>0 && storedDataJson[jsonIndex].settings.properties.model}
                                checked={state["required-"+jsonIndex]}
                                data-testid="required-checkbox"
                                onChange={requiredChange}
                            />
                        </Col>
                    </div>
                </Col>
                {state.reqCharShow && state.reqCharShowProp&& <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <div className="d-flex flex-row text-center justify-content-center">
                            <Col sx={4} >
                                <Form.Label className="mb-0 prop-label">
                                    <span>Required Characters</span>
                                </Form.Label>
                            </Col>
                            <Col xs={8} className=''>
                                <Form.Control type="text" className='textbox-width' placeholder="" name="requiredCharacter" onChange={handleChange} value={state.requiredCharacter} />
                            </Col>
                        </div>
                    </Form.Group>
                </Col>}
            </Form>}

        </>
    )
}
export default PropertiesValidations;