import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import store from "../../../../component-renderer/store";
import { renderFormData ,createControlData} from "../../../../component-renderer/actions";

const DisplayOptions = (props) => {
  const { title, optionsData, jsonProperty, name, jsonIndex } = props;
  let optionsHeaders = props.optionsHeaders;
  optionsData &&
    optionsData.map((eachData) => {
      delete eachData["$$hashKey"];
    });
  const [rows, setRows] = useState(optionsData);
  useEffect(()=>{
    setRows(optionsData)
  },[optionsData])
  const style = { fontSize: "20px", marginTop: "7px" };
  const plusStyle = { fontSize: "20px" };

  let optionsKeys;
  if (name === "data") {
    let curLength = props.create ? store.getState().createControlData[0].settings.properties.options.length : store.getState().renderData[0].settings.properties.options.length;
    let array = [];
    let arrayLength = curLength;
    while (arrayLength--) array.push("");
    let headerArr = [];
    const tempArray = array.map((item, index) => {
      headerArr[index] = "Field " + (index + 1);
    });
    optionsKeys = headerArr;
    optionsHeaders = headerArr;
  } else {
    optionsKeys = rows.length > 0 && Object.keys(rows[0]);
  }
  
  optionsKeys =
    title === "Table" && name !== "data"
      ? rows.length > 0 && optionsKeys.slice(0, -1)
      : optionsKeys;

  let items;
  if (title === "Score - Multi Select " || title === "Score  Multi Check") {
    items = { key: "", value: "", score: "" };
  } else if (title === "Multi Check") {
    items = { key: "", value: "" };
  } else {
    items = { key: "", value: "", isMandatory: false };
  }
 
  useEffect(() => {
    const storeRenderData = props.create ? store.getState().createControlData : store.getState().renderData;
    if (storeRenderData) {
      let storeDataJson = props.create ? JSON.parse(JSON.stringify(store.getState().createControlData)) : JSON.parse(JSON.stringify(store.getState().renderData))
      if (storeDataJson.length > 0) {
        let modifiedData = storeDataJson[jsonIndex].settings[jsonProperty];
        modifiedData[name] = rows;
        if(props.create){
          store.dispatch(createControlData(storeDataJson))
      }
      else{
          store.dispatch(renderFormData(storeDataJson))
      }
      }
    }
  }, [rows]);

  const handleChange = (idx) => (e) => {
    const { name, value } = e.target;
   
    const curRows = [...rows];
    if (e.target.type === "checkbox") {
      curRows[idx] = {
        ...curRows[idx],
        [name]: e.target.checked,
      };
    } else if (name === "key") {
      curRows[idx] = {
        ...curRows[idx],
        [name]: parseInt(value),
      };
    } else {
      curRows[idx] = {
        ...curRows[idx],
        [name]: value,
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
            {optionsHeaders &&
              optionsHeaders.map((value, index) => {
                return <th key={index}>{value}</th>;
              })}
            <th className="d-flex justify-content-center">
              <i
                className="fas fa-plus"
                style={plusStyle}
                data-testid="arrow-click-check"
                onClick={handleAddRow}
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            rows.map((item, idx) => (
              <tr key={idx}>
                {optionsKeys.map((val, ind) => {
                  return (
                    <td key={ind}>
                      <input
                        key={ind}
                        type={
                          optionsKeys[ind] === "isMandatory"
                            ? "checkbox"
                            : "text"
                        }
                        name={val}
                        value={item[val]}
                        data-testid={`input-check${idx}${ind}`}
                        onChange={handleChange(idx)}
                        className="w-100"
                      />
                    </td>
                  );
                })}
                <td className="d-flex justify-content-center ">
                  <i
                    className="fas fa-times"
                    style={style}
                    data-testid={`cross-click-check${idx}`}
                    onClick={handleRemoveSpecificRow(idx)}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default DisplayOptions;
