import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { saveData } from "../../../actions";
import store from "../../../store";
export default function TableEdit(props) {
  const { obj } = props;
  let storeDate = store.getState().saveData[props.id]&&store.getState().saveData[props.id][obj.settings.properties.model];
  let defaultBindData = storeDate ? storeDate : "";

  // console.log(store.getState(), ".....store get state")

  const [rows, setRows] = useState(defaultBindData);
  // const [rowData, setRowData] = useState({});

  let colClass = obj.settings.others.bootstrapGridClass
    ? obj.settings.others.bootstrapGridClass
    : "col-12";

  var stylingObject = {
    span: obj.settings.labelStyles,
    th: obj.settings.headerStyles,
    table: obj.settings.tableStyles,
    input: obj.settings.rowStyles,
  };
  const style = { color: "red", fontSize: "20px", marginTop: "7px"};
  const plusStyle = { fontSize: "20px" };

  const headers = [];
  obj.settings.properties.options.map((data) => {
    headers.push(data.value);
  });
  const items = {};
  headers.map((each) => {
    items[each] = "";
  });
  // console.log(items, ".......item")

  const handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const curRows = [...rows];
    curRows[idx] = {
      ...curRows[idx],
      [name]: value,
    };
    // console.log(curRows, idx, "...curRows in handlechange")
    setRows(curRows);
    store.dispatch(saveData({ [obj.settings.properties.model]: curRows }, props.id));
  };
  // console.log(rowData, "...rowData")
  const handleAddRow = (e) => {
    setRows([...rows, items]);
  };

  const handleRemoveSpecificRow = (idx) => () => {
    if (window.confirm("Do you really want to delete?") === true) {
      const curRows = [...rows];
      curRows.splice(idx, 1);
      setRows(curRows);
      store.dispatch(saveData({ [obj.settings.properties.model]: curRows }, props.id));
    } else {
      return null;
    }
  };

  return (
    <div className={colClass} >
      <label
        style={stylingObject.span}
        className={obj.settings.properties.hideLabel ? "d-none" : ""}
      >
        {obj.settings.properties.label}
      </label>
      <Table style={stylingObject.table} bordered hover>
        <thead>
          <tr>
            {headers.map((value, index) => {
              return (
                <th style={stylingObject.th} key={"th-" + index}>
                  {value}
                </th>
              );
            })}
             {!props.isPrint ?
            <th
              style={stylingObject.th}
              className="d-flex justify-content-center"
            >
              <i
                className="fas fa-plus"
                data-testid="addRow"
                style={plusStyle}
                onClick={handleAddRow}
              ></i>  
            </th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            rows.map((item, idx) => (
              <tr key={idx}>
                {headers.map((val, ind) => {
                  return (
                    <td key={"td-" + ind}>
                      <input
                        key={ind}
                        type="text"
                        name={val}
                        value={item[val]}
                        onChange={handleChange(idx)}
                        style={{...stylingObject.input,border: props.isPrint ? "none" : "",backgroundColor: props.isPrint ? "white" : ""}}
                        className="w-100"
                        data-testid={`row${ind}`}
                      />
                    </td>
                  );
                })}
                {!props.isPrint ? <td className="d-flex justify-content-center ">
                  <i
                    className="fas fa-window-close"
                    style={style}
                    data-testid="removeRow"
                    onClick={handleRemoveSpecificRow(idx)}
                  ></i>
                </td> : null}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
