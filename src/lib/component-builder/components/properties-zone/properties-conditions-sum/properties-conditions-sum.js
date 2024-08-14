import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import { renderFormData } from "../../../../component-renderer/actions";
import './properties-conditions-sum.css'

const PropertiesConditionsSum = (props) => {
    const [state, setState] = useState({ scoreFields: '' })
    const { jsonData, jsonIndex } = props

    const scoreComponentsList = []
    jsonData.length > 0 && jsonData.map((data) => {
        if (data.title !== "Score Sum" && data.title.includes("Score")) {
            scoreComponentsList.push(data.settings.properties.scoreModel)
        }
    })

    const handleChange = (e) => {
        let value = [];
        Array.from(e.target.selectedOptions, (option) =>
            value.push({
                "scoreModel": option.outerText,
            }))
        setState({ ...state, [e.target.name]: value })
        const storeRenderData = store.getState().renderData
        if (storeRenderData) {
            let storeDataJson = JSON.parse(JSON.stringify(store.getState().renderData))
            if (storeDataJson.length > 0) {
                let modifiedData = storeDataJson[jsonIndex].settings.properties
                modifiedData[e.target.name] = value
                store.dispatch(renderFormData(storeDataJson))
            }
        }
    }

    return (
        <div>
            <div><span>Select Controls To Sum:</span></div>
            <select
                className='conditions-sum-select'
                name="scoreFields"
                onChange={handleChange}
                multiple
            >
                {scoreComponentsList.length && scoreComponentsList.map((option, index) => {
                    return (
                        <option value={option} key={index}>{option}</option>
                    )
                })}
            </select>

        </div>
    )
}
export default PropertiesConditionsSum;