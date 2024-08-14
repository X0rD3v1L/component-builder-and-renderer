import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import { renderFormData,createControlData } from "../../../../component-renderer/actions";

const MultiSelectDataSelection = (props) => {
    const { jsonProperty, name, jsonIndex, dataSelected } = props
    const [manualEntry, setManualEntry] = useState("manualEntry")
    const handleChange = (e) => {
        setManualEntry(e.target.value)
        let dataSelection = e.target.value === "manualEntry" ? false : true
       
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
                modifiedData[name] = dataSelection
                if(props.create){
                    store.dispatch(createControlData(storeDataJson))
                }
                else{
                    store.dispatch(renderFormData(storeDataJson))
                }
                dataSelected(e.target.value)
            }
        }

    }

    return (
        <div className="d-flex p-0 m-0">
            <Form.Check 
                inline
                label="Manual Entry"
                name="dataSelection"
                type="radio"
                id="radioMultiSelect"
                value="manualEntry"
                checked={manualEntry == "manualEntry"}
               // data-testid="data-selection-test"
                onChange={handleChange}
                
            />
            <Form.Check
                inline
                label="Masters"
                name="dataSelection"
                type="radio"
                id="radioMultiSelect"
                value="masters"
                checked={manualEntry == "masters"}
                onChange={handleChange}
                data-testid="multiSelect-option-test"
            />

        </div>
    );
}
export default MultiSelectDataSelection;
