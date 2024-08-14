import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import './properties-conditions.css';
import store from "../../../../component-renderer/store";
import { renderFormData} from "../../../../component-renderer/actions";

const PropertiesConditions = (props) => {
    //let storedDataJsonConditional = store.getState().renderFormData.settings.conditional
    //console.log(props.jsonIndex,"jsonIndex props")
    const {jsonData,jsonIndex}=props
    const [state, setState] = useState({
        show: '',
        when: '',
        operator: '',
        compareValue: ''
    })
    const otherComponentsList=[]
    jsonData.length>0&& jsonData.map((data)=>{
        otherComponentsList.push(data.settings.properties.model)
    })
    //console.log(otherComponentsList,".....otherComponentsList")
    const isOptions = ["Equal To", "Greater Than", "Greater Than or Equal To", "Less Than", "Less Than or Equal To", "Not Equal To"]
    const optionSymbols=["==",">",">=","<","<=","!="]

    const handleChange = (e) => {
        setState({...state, [e.target.name]:e.target.value})
        const storeRenderData = store.getState().renderData
        if(storeRenderData) {
        let storeDataJson = JSON.parse(JSON.stringify(store.getState().renderData))
        if(storeDataJson.length>0) {
        let modifiedData = storeDataJson[jsonIndex].settings.conditional
        modifiedData[e.target.name.split('-')[0]] = e.target.value
        store.dispatch(renderFormData(storeDataJson))
        }
        }
    }

// console.log(state,state["show-"+props.jsonIndex], '===state')
    return (
        <>
            <Form as={Col}>
                <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0 prop-label">
                            <span>This component should display</span>
                        </Form.Label>
                        <Form.Select size="sm" className="prop-dropdown show-width" data-testid="cond-handle-change" onChange={handleChange} name={"show-"+jsonIndex} value={state["show-"+jsonIndex]?state["show-"+jsonIndex]:''}>
                            <option value=''>select</option>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0 prop-label">
                            <span>When the form component</span>
                        </Form.Label>
                        <Form.Select size="sm" className="prop-dropdown when-width" onChange={handleChange} value={state["when-"+jsonIndex]?state["when-"+jsonIndex]:''} name={"when-"+jsonIndex}>
                            <option value=''>select</option>
                            {otherComponentsList.length && otherComponentsList.map((option, index) => {
                                        return (
                                            <option value={option} key={index}>{option}</option>
                                        )
                                    })}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0 prop-label">
                            <span>Is</span>
                        </Form.Label>
                        <Form.Select size="sm" className="prop-dropdown is-width" onChange={handleChange} value={state["operator-"+jsonIndex]?state["operator-"+jsonIndex]:''} name={"operator-"+jsonIndex}>
                            <option value=''>select</option>
                            {isOptions && isOptions.map((option, index) => {
                                return (
                                    <option value={optionSymbols[index]} key={index}>{option}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} >
                    <Form.Group as={Col} className='mt-1 ms-1'>
                        <Form.Label className="mb-0 prop-label">
                            <span>Has the value</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="" name={"compareValue-"+jsonIndex} className="is-width"  onChange={handleChange} value={state["compareValue-"+jsonIndex]?state["compareValue-"+jsonIndex]:''} />
                    </Form.Group>
                </Col>
            </Form>

        </>
    )
}
export default PropertiesConditions;