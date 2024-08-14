import './display-zone.css'
import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import DisplayLegends from '../display-legends/display-legends';
import MultiSelectOptions from "../multi-select-option/multi-select-option";
import MultiSelectDataSelection from "../multi-select-data-selection/multi-select-data-selection";
import { renderFormData,createControlData } from "../../../../component-renderer/actions";
import { connect } from 'react-redux';
import OptionsTableModalPopup from '../options-table-popup/options-table-popup';

const DisplayZone = (props) => {
    const { label, title, type, name, value, dropdownOptions, jsonProperty, optionsHeaders, valuesData, jsonIndex, renderDatas,requiredCharacterObj, requiredCharacterValue } = props
    const [defaultReqchar, setDefaultReqchar]= useState(requiredCharacterValue)
    const [requiredChar, setRequiredChar] = useState(false)
    const [defaultValue, setDefaultValue] = useState(value)
    const [showOptions, setShowOptions] = useState(false)
    const [showLegends, setShowLegends] = useState(false)
    const [showMultiSelectOptions, setShowMultiSelectOptions] = useState(false)
    const [showDataSelected, setShowDataSelected] = useState("manualEntry")
    const [optionsData, setOptionsData] = useState(props.optionsData)
    const [accordianCheck,setAccordianCheck]=useState(false)
    let optionsHeadersMultiSelect = ["Value", "Display"]
    let optionsDataMultiSelect = renderDatas[jsonIndex] && renderDatas[jsonIndex].settings.properties.options ? renderDatas[jsonIndex].settings.properties.options : ""

    useEffect(() => {
        if(name==="bootstrapGridClass"){
            setDefaultValue(value.substring(7,))
        }
        else{
            setDefaultValue(value)
        }
    }, [props])
    useEffect(()=>{
        if (props.state.renderData[jsonIndex]) {
            setOptionsData(props.state.renderData[jsonIndex].settings.properties[name])
        }
    },[props.state.renderData[jsonIndex]&&props.state.renderData[jsonIndex].settings.properties[name]])
    
    useEffect(()=>{
        if(valuesData && valuesData.title==="Accordian"){
            setAccordianCheck(valuesData.settings.properties.checkboxNeededinHeader)
        }
    })
   
    const handleChange = (e) => {
        setDefaultValue(e.target.value)
        const storeRenderData =  store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                if (jsonProperty === "") {
                    let modifiedData = storeDataJson[jsonIndex].settings
                    modifiedData[name] = e.target.value
                }
                else {
                    let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                    if (name === "bootstrapGridClass") {
                        modifiedData[name] = "col-md-" + e.target.value
                    }
                    else {
                        modifiedData[name] = e.target.value
                    }
                }
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
            }
        }
    }

    const handleChangeNumber = (e) => {
        setDefaultValue(e.target.value)
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                modifiedData[name] = parseInt(e.target.value)
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
            }
        }
    }

    const handleChangeReqCharText =(e)=>{
        setDefaultReqchar(e.target.value)
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                modifiedData[requiredCharacterObj.name] = e.target.value
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
            }
        }
    }
   
    const handleCheckboxChange = (e) => {
        setDefaultValue(e.target.checked)
        setRequiredChar(e.target.checked)
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                modifiedData[name] = e.target.checked
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
            }
        }
    }

    const handlereqCheckboxChange = (e) => {
        //setDefaultValue(e.target.checked)
        setRequiredChar(e.target.checked)
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                modifiedData[name] = e.target.checked
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
            }
        }
    }

    const setOptionsDisplay = () => {
        setShowOptions(!showOptions)
    }
    const setLegendsDisplay = () => {
        setShowLegends(!showLegends)
    }
    const setMultiSelectOptionsDisplay = () => {
        setShowMultiSelectOptions(!showMultiSelectOptions)
    }
    const dataCallback = (data) => {
        setShowDataSelected(data)
    }
    const updateRows = (rows) => {
        setShowMultiSelectOptions(false)
        setOptionsData(rows)

        setShowMultiSelectOptions(true)

    }
   
    return (
        <div>
            {type === "text" &&
                <div>
                    <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Label className="display-zone-label">
                            <span>{label}</span>
                        </Form.Label>
                        <Form.Control type={type} name={name} value={defaultValue} data-testid="text-input-check" className="display-zone-option" onChange={handleChange} required />
                    </Form.Group>
                </div>
            }
            

            {type === "checkbox" &&
                <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                    <Form.Label className="display-zone-label">
                        <span>{label}</span>
                    </Form.Label>
                    <Form.Check
                        type="checkbox"
                        name={name}
                        className="display-zone-checkbox"
                        checked={defaultValue}
                        data-testid="checkbox-input-check"
                        onChange={handleCheckboxChange}
                    />
                </Form.Group>
            }
              {type==="checkboxReq" && 
            //    <ValidationsCheckbox type={type} label={label} jsonProperty={jsonProperty} jsonIndex={jsonIndex} name={name} requiredCharacterObj={requiredCharacterObj} />
              <div>
                {/* <ValidationsCheckbox /> */}
                  <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                  <Form.Label className="display-zone-label">
                      <span>{label}</span>
                  </Form.Label>
                  <Form.Check
                      type="checkbox"
                      name={name}
                      className="display-zone-checkbox"
                      checked={defaultValue}
                      data-testid="checkbox-input-check"
                      onChange={handlereqCheckboxChange}
                  />
              </Form.Group>
               {requiredChar&& <div>
                     <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Label className="display-zone-label">
                            <span>{requiredCharacterObj.label}</span>
                        </Form.Label>
                        <Form.Control type={requiredCharacterObj.type} name={requiredCharacterObj.name} value={defaultReqchar} data-testid="text-input-checkreq" className="display-zone-option" onChange={handleChangeReqCharText} required />
                    </Form.Group>
                </div> } 
                </div>   
             } 
            {type === "select" &&
                <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                    <Form.Label className="display-zone-label">
                        <span>{label}</span>
                    </Form.Label>
                    <Form.Select size="sm" className="display-zone-select" name={name} value={defaultValue} onChange={handleChange}>
                        <option value=''>select</option>
                        {dropdownOptions && dropdownOptions.map((option, index) => {
                            return (
                                <option value={option} key={index}>{option}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
            }
            {type === "selectMulti" &&
                <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                    <Form.Label className="display-zone-label">
                        <span>{label}</span>
                    </Form.Label>
                    <Form.Select size="sm" className="display-zone-select" name={name} value={value} onChange={handleChange} data-testid="select-multi-check">
                        <option value=''>select</option>
                        {dropdownOptions && dropdownOptions.map((option, index) => {
                            return (
                                <option value={option.value} key={index}>{option.key}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
            }
            {type === "number" &&
                <div className='d-flex mt-2 ps-3 pe-3'>
                    <label className="display-zone-label">{label}</label>
                    <input type={type} name={name} value={defaultValue} data-testid="number-input-check" onChange={handleChangeNumber} className="display-zone-option" />
                </div>
            }
            {type === "color" &&
                <div className="d-flex mt-2 ps-3 pe-3">
                    <label className="display-zone-label">{label}</label>
                    <input type={type} name={name} value={defaultValue} onChange={handleChange} className="display-zone-colorpicker" />
                </div>
            }
            {type === "options" &&
                <>
                    <div className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Group className='d-flex'>
                            <Form.Label className="display-zone-label">
                                <span>{label}</span>
                            </Form.Label>
                        </Form.Group>
                        <button className="options-display-btn" data-testid="optionDisplayButtonTest" onClick={setOptionsDisplay}>...</button>

                    </div>
                    {
                        showOptions &&
                        <OptionsTableModalPopup showOptions={setOptionsDisplay} title={title} optionsData={optionsData} optionsHeaders={optionsHeaders} jsonProperty={jsonProperty} name={name} jsonIndex={jsonIndex} />
                    }
                </>
            }
            {type === "textarea" &&
                <div>
                    <Form.Group className='mt-2 ps-3 pe-3'>
                        <Form.Label className="display-zone-label">
                            <span>{label}</span>
                        </Form.Label>
                        <Form.Control type={type} name={name} value={defaultValue} className="display-zone-textarea" onChange={handleChange} required />
                    </Form.Group>
                </div>
            }
            {type === "legends" &&
                <>
                    <div className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Group className='d-flex'>
                            <Form.Label className="display-zone-label">
                                <span>{label}</span>
                            </Form.Label>
                        </Form.Group>
                        <button className="options-display-btn" data-testid="legends-display-check" onClick={setLegendsDisplay}>...</button>

                    </div>
                    {showLegends &&
                        <DisplayLegends legendsData={optionsData} legendsHeaders={optionsHeaders} jsonProperty={jsonProperty} name={name} jsonIndex={jsonIndex} create={props.create}/>
                    }
                </>
            }
            {/* {type=== "Image Upload" &&
                <>
                <div className='mt-2 ps-3 pe-3'>
                        <Form.Group className='d-flex'>
                            <Form.Label className="display-zone-label">
                                <span>{label}</span>
                            </Form.Label>
                        </Form.Group>
                        <div className='ms-3'>
                            <ImageUpload jsonProperty={jsonProperty} name={name} jsonIndex={jsonIndex} />
                        </div>
                    </div>
                </>
            } */}
            {type === "multiselectOptions" &&
                <>
                    <div className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Group className='d-flex'>
                            <Form.Label className="display-zone-label">
                                <span>{label}</span>
                            </Form.Label>
                        </Form.Group>
                        <button className="options-display-btn" data-testid="options-display-check" onClick={setOptionsDisplay}>...</button>

                    </div>
                    {showOptions &&
                        <MultiSelectOptions optionsData={optionsData} optionsHeaders={optionsHeaders} jsonProperty="properties" name="options" jsonIndex={jsonIndex} updateRows={updateRows} mname="display" create={props.create}/>
                    }
                    {/* {showOptions && getMultiselectOptions} */}
                </>
            }
            {type === "dataSelectionMultiSelect" &&
                <>
                    <div className='mt-2 ps-0 pe-3'>
                        <div className='ms-3'>
                            <MultiSelectDataSelection jsonProperty={jsonProperty} name={name} jsonIndex={jsonIndex} dataSelected={dataCallback} create={props.create}/>
                            {showDataSelected === "manualEntry" &&
                                <div>
                                    <div className='d-flex mt-2 me-4'>
                                        <Form.Group className='d-flex'>
                                            <Form.Label className="display-zone-label">
                                                <span>options</span>
                                            </Form.Label>
                                        </Form.Group>
                                        <button className="options-display-btn" data-testid="multi-options-display-check" onClick={setMultiSelectOptionsDisplay}>...</button>
                                    </div>
                                    {showMultiSelectOptions && <MultiSelectOptions optionsData={props.state.renderData[jsonIndex].settings.properties["options"]} optionsHeaders={optionsHeadersMultiSelect} jsonProperty="properties" name="options" jsonIndex={jsonIndex} updateRows={updateRows} mname="manual" create={props.create}/>}
                                    {/* {showMultiSelectOptions &&getMultiselectOptions} */}
                                </div>}
                            {showDataSelected === "masters" &&
                                <div>
                                    <Form.Group className='mt-2'>
                                        <Form.Label className="display-zone-label">
                                            <span>Select API</span>
                                        </Form.Label>
                                        <Form.Select size="sm" className="display-zone-select" >
                                            <option value=''>select</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className='mt-2 mb-2'>
                                        <Form.Label className="display-zone-label">
                                            <span>Filter</span>
                                        </Form.Label>
                                        <Form.Control type="text" className="display-zone-option" required />
                                    </Form.Group>
                                </div>}
                        </div>
                    </div>
                </>
            }
            {
                type === "data" &&
                <>
                <div className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Group className='d-flex'>
                            <button onClick={setOptionsDisplay}>Add Data</button>
                        </Form.Group>
                        

                    </div>
                    {
                        showOptions &&
                    <OptionsTableModalPopup showOptions = {setOptionsDisplay} title = {title} optionsData={optionsData} optionsHeaders={optionsHeaders} jsonProperty={jsonProperty} name={name} 
                     jsonIndex={jsonIndex} create={props.create}/>
                    }
                </>
            }
            {type==="accordianText" && accordianCheck && 
            <div>
            <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                <Form.Label className="display-zone-label">
                    <span>{label}</span>
                </Form.Label>
                <Form.Control type={type} name={name} value={defaultValue} data-testid="text-input-check" className="display-zone-option" onChange={handleChange} required />
            </Form.Group>
        </div>}
        {type==="accordianTextarea" && accordianCheck &&
            <div>
            <Form.Group className='mt-2 ps-3 pe-3'>
                <Form.Label className="display-zone-label">
                    <span>{label}</span>
                </Form.Label>
                <Form.Control type={type} name={name} value={defaultValue} className="display-zone-textarea" onChange={handleChange} required />
            </Form.Group>
        </div>
        }
        </div>
    )
}
const mapStateToProps = state => ({
    state
});
export default connect(mapStateToProps)(DisplayZone)

// export default DisplayZone;