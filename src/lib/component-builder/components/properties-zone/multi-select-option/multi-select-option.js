import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import { renderFormData ,createControlData} from "../../../../component-renderer/actions";
import { connect } from 'react-redux';

const MultiSelectOptions = (props) => {
    const { optionsData, optionsHeaders, jsonProperty, name,jsonIndex } = props
   
    optionsData && optionsData.map((eachData) => {
        delete eachData["$$hashKey"]
    })

    const [rows, setRows] = useState(optionsData);
    useEffect(()=>{
        setRows(optionsData)
    },[optionsData])
    
    const style = { fontSize: "20px", marginTop: "7px" };
    const plusStyle = { fontSize: "20px" };

    const optionsKeys = ["key","value"]

    const items = {};
    
    useEffect(() => {
        const storeRenderData = store.getState().renderData
        if(storeRenderData && name!='isFromAPI') {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
        if(storeDataJson.length>0) {
        let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
        modifiedData[name] = rows
        props.updateRows(rows);
        if(props.create){
            store.dispatch(createControlData(storeDataJson))
        }
        else{
            store.dispatch(renderFormData(storeDataJson))
        }
        }}
    },[rows])

    const handleChange = (idx) => (e) => {
        const { name, value } = e.target;
        const curRows = [...rows];
        // if (name === "key") {
        //     curRows[idx] = {
        //         ...curRows[idx],
        //         [name]: parseInt(value),
        //     };
        // }
        // else {
            curRows[idx] = {
                ...curRows[idx],
                [name]: (value),
            };
        //}
        setRows(curRows);
    };
    const handleAddRow = (e) => {
        setRows([...rows, items]);
    };

    const handleRemoveSpecificRow = (idx) => () => {
        const curRows = [...rows];
        curRows.splice(idx, 1);
        setRows(curRows);
    };  
   
    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        {optionsHeaders && optionsHeaders.map((value, index) => {
                            return (
                                <th key={index}>
                                    {value}
                                </th>
                            );
                        })}
                        <th className="d-flex justify-content-center">
                            <i className="fas fa-plus" style={plusStyle} data-testid="arrow-click-check" onClick={handleAddRow}></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows && rows.length > 0 && rows.map((item, idx) => (
                        <tr key={idx}>
                            {optionsKeys.map((val, ind) => {
                                return (
                                    <td key={ind}>
                                        <input key={ind} type="text" name={val} value={item[val] ? item[val] : ""} data-testid={`input-check${idx}${ind}`} onChange={handleChange(idx)} className="w-100" />
                                    </td>
                                );
                            })}
                            <td className="d-flex justify-content-center ">
                                <i
                                    className="fas fa-times" style={style} data-testid={`cross-click-check${idx}`} onClick={handleRemoveSpecificRow(idx)}
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

const mapStateToProps = state => ({
    state
});
export default connect(mapStateToProps)(MultiSelectOptions)
