import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import { renderFormData,createControlData } from "../../../../component-renderer/actions";

const DisplayLegends = (props) => {
    const { legendsData, legendsHeaders, jsonProperty, name,jsonIndex } = props
    legendsData &&legendsData.map((eachData) => {
        delete eachData["$$hashKey"]
    })

    const [rows, setRows] = useState(legendsData);
    //const [rowData, setRowData] = useState({});

    const style = { fontSize: "20px", marginTop: "7px" };
    const plusStyle = { fontSize: "20px" };

    const legendsKeys = ["value","score"];

    const items = {};
    
    useEffect(() => {
        const storeRenderData = store.getState().renderData
        if(storeRenderData) {
            let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
        if(storeDataJson.length>0) {
        let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty]
        modifiedData[name] = rows
        if(props.create){
            store.dispatch(createControlData(storeDataJson))
        }
        else{
            store.dispatch(renderFormData(storeDataJson))
        }
        }
        }
    },[rows])

    const handleChange = (idx) => (e) => {
        const { name, value } = e.target;
        const curRows = [...rows];
        if (name === "key") {
            curRows[idx] = {
                ...curRows[idx],
                [name]: parseInt(value),
            };
        }
        else {
            curRows[idx] = {
                ...curRows[idx],
                [name]: (value),
            };
        }
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
                        {legendsHeaders && legendsHeaders.map((value, index) => {
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
                            {legendsKeys.map((val, ind) => {
                                    if(val==="value"){
                                        return(
                                            <td key={ind}>
                                            <input key={ind} type="text" name={val} value={item[val] ? item[val] : ""} data-testid={`input-check${idx}${ind}`} onChange={handleChange(idx)} className="w-100" />
                                        </td> 
                                        )
                                    }
                                    else{
                                        return(
                                            <td key={ind}>
                                    <input key={ind} type="color" name={val} value={item[val] ? item[val] : ""} onChange={handleChange(idx)} className="w-100" />
                                </td>
                                        )
                                    }                                
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
export default DisplayLegends;
