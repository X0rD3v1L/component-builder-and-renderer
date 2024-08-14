import React, { useCallback, useEffect, useState } from "react";
import "./component-renderer.css";
import Textfield from "../components/formui-components/text-field/text-field";
import CheckBox from "../components/formui-components/checkbox/checkbox";
import RadioButton from "../components/formui-components/radio-button/radio-button";
import { connect } from "react-redux";
import TextArea from "./formui-components/text-area/textarea";
import EditButtons from "../../component-builder/components/edit-buttons/edit-buttons";
import SelectCombo from "./formui-components/select-combo/select-combo";
import store from "../store";

function ComponentRenderer(props) {
  const [renderData, setRenderData] = useState(
    props.isCreate
      ? props.state.createControlData.length > 0
        ? props.state.createControlData
        : props.renderData
      : props.state.renderData
  );
  const [jsonVal, setJsonVal] = useState(false);
  const [, updateState] = useState();
  let savedData = props.state.saveData;

  const [inputData, setInputData] = useState(
    props.dropZone
      ? props.isCreate
        ? props.state.createControlData.length > 0
          ? props.state.createControlData
          : props.renderData
        : props.state.renderData
      : props.isCreate && props.state.createControlData.length > 0
      ? props.state.createControlData
      : props.renderData
  );

  useEffect(() => {
    setInputData(
      props.dropZone
        ? props.isCreate
          ? props.state.createControlData.length > 0
            ? props.state.createControlData
            : props.renderData
          : props.state.renderData
        : props.isCreate && props.state.createControlData.length > 0
        ? props.state.createControlData
        : props.renderData
    );
  }, [props.state.renderData, props.renderData, renderData]);

  useEffect(() => {
    setJsonVal(!jsonVal);
  }, [props]);

  const checkNotNullAndUndefined = (value) => {
    return value !== "" && value !== null && typeof value !== "undefined";
  };
  const callbackNestedBuilder = useCallback((data) => {
    setRenderData(props.state.renderData);
    setInputData(data);
    updateState({});

  }, []);

  const showItem = (conditions) => {

    let when = savedData[props.id]
      ? checkNotNullAndUndefined(savedData[props.id][conditions.when])
        ? savedData[props.id][conditions.when]
        : ""
      : "";
    if (when == "" && conditions.compareValue == "false") when = false;

    let operation =
      "'" +
      when +
      "'" +
      conditions.operator +
      "'" +
      conditions.compareValue +
      "'";
    if (conditions.when.includes("NumberField")) {
      operation =
        "" +
        when +
        "" +
        conditions.operator +
        "" +
        conditions.compareValue +
        "";
    }
    if (conditions.show == "true") {
      if (checkNotNullAndUndefined(when) && eval(operation)) {
        return false;
      } else {
        return true;
       
      }
    }
    if (conditions.show == "false") {
      if (checkNotNullAndUndefined(when) && eval(operation)) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  const allowDrop = (e) => {
    console.log(e, "====allow drop");
  };
  const showEditButtons = (index) => {
    document.getElementById("edit-" + index).style.display = "inline";
  };
  const hideEditButtons = (index) => {
    document.getElementById("edit-" + index).style.display = "none";
  };
  props.sendFormData(props.state.saveData[props.id]);

  return (
    <form className="was-validated">
      <div
        className={props.isPrint ? "printWidth row-styles" : "row row-styles"}
      >
        {inputData.map((item, index) => {
          const show =
            inputData[index].settings.conditional &&
            inputData[index].settings.conditional.when !== null &&
            showItem(inputData[index].settings.conditional);
          let colClass = item.settings.others.bootstrapGridClass
            ? item.settings.others.bootstrapGridClass
            : "col-12";
          switch (item.settings.type) {
            case "textarea":
              if (props.dropZone) {
                return (
                  <div
                    className={
                      (props.dropZone ? "dragged-element" : "") + ` ${colClass}`
                    }
                    id={index}
                    draggable={true}
                    onDragStart={props.dragStart({
                      id: item.settings.properties.id,
                    })}
                    ondragover={allowDrop}
                    onDrop={props.onDrop({ id: item.settings.properties.id })}
                    onMouseEnter={() => showEditButtons(index)}
                    onMouseLeave={() => hideEditButtons(index)}
                  >
                    <div
                      className="hoveredStyles"
                      style={{ display: "none" }}
                      id={"edit-" + index}
                    >
                      <EditButtons
                        data={inputData[index]}
                        callBack={props.callBack}
                        index={index}
                      />
                    </div>
                    {!show && (
                      <TextArea
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                      />
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    {!show && (
                      <TextArea
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                        isPrint={props.isPrint}
                      />
                    )}
                  </div>
                );
              }

            case "textfield":
              if (props.dropZone) {
                return (
                  <div
                    className={
                      (props.dropZone ? "dragged-element" : "") + ` ${colClass}`
                    }
                    id={index}
                    draggable={true}
                    onDragStart={props.dragStart({
                      id: item.settings.properties.id,
                    })}
                    ondragover={allowDrop}
                    onDrop={props.onDrop({ id: item.settings.properties.id })}
                    onMouseEnter={() => showEditButtons(index)}
                    onMouseLeave={() => hideEditButtons(index)}
                  >
                    <div
                      className="hoveredStyles"
                      style={{ display: "none" }}
                      id={"edit-" + index}
                    >
                      <EditButtons
                        data={inputData[index]}
                        callBack={props.callBack}
                        index={index}
                      />
                    </div>
                    {!show && (
                      <Textfield
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                      />
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    {!show && (
                      <Textfield
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                        isPrint={props.isPrint}
                      />
                    )}
                  </div>
                );
              }
            case "selectCombo":
              if (props.dropZone) {
                return (
                  <div
                    className={
                      (props.dropZone ? "dragged-element" : "") + ` ${colClass}`
                    }
                    id={index}
                    draggable={true}
                    onDragStart={props.dragStart({
                      id: item.settings.properties.id,
                    })}
                    ondragover={allowDrop}
                    onDrop={props.onDrop({ id: item.settings.properties.id })}
                    onMouseEnter={() => showEditButtons(index)}
                    onMouseLeave={() => hideEditButtons(index)}
                  >
                    <div
                      className="hoveredStyles"
                      style={{ display: "none" }}
                      id={"edit-" + index}
                    >
                      <EditButtons
                        data={inputData[index]}
                        callBack={props.callBack}
                        index={index}
                      />
                    </div>
                    {!show && (
                      <SelectCombo
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                      />
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    {!show && (
                      <SelectCombo
                        obj={inputData[index]}
                        key={index}
                        id={props.id}
                        isPrint={props.isPrint}
                      />
                    )}
                  </div>
                );
              }
            case "checkBox":
              if (props.dropZone) {
                return (
                  <div
                    className={
                      (props.dropZone ? "dragged-element" : "") + ` ${colClass}`
                    }
                    id={index}
                    draggable={true}
                    onDragStart={props.dragStart({
                      id: item.settings.properties.id,
                    })}
                    ondragover={allowDrop}
                    onDrop={props.onDrop({ id: item.settings.properties.id })}
                    onMouseEnter={() => showEditButtons(index)}
                    onMouseLeave={() => hideEditButtons(index)}
                  >
                    <div
                      style={{ display: "none" }}
                      id={"edit-" + index}
                      className="hoveredStyles"
                    >
                      <EditButtons
                        data={inputData[index]}
                        callBack={props.callBack}
                        index={index}
                      />
                    </div>
                    {!show && (
                      <CheckBox
                        obj={inputData[index]}
                        key={index}
                        savedData={
                          savedData[props.id] &&
                          savedData[props.id][item.settings.properties.model]
                        }
                        id={props.id}
                      />
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    {!show && (
                      <CheckBox
                        obj={inputData[index]}
                        key={index}
                        savedData={
                          savedData[props.id] &&
                          savedData[props.id][item.settings.properties.model]
                        }
                        id={props.id}
                      />
                    )}
                  </div>
                );
              }

            case "radioButton":
              if (props.dropZone) {
                return (
                  <div
                    className={
                      (props.dropZone ? "dragged-element" : "") + ` ${colClass}`
                    }
                    id={index}
                    draggable={true}
                    onDragStart={props.dragStart({
                      id: item.settings.properties.id,
                    })}
                    ondragover={allowDrop}
                    onDrop={props.onDrop({ id: item.settings.properties.id })}
                    onMouseEnter={() => showEditButtons(index)}
                    onMouseLeave={() => hideEditButtons(index)}
                  >
                    <div
                      className="hoveredStyles"
                      style={{ display: "none" }}
                      id={"edit-" + index}
                    >
                      <EditButtons
                        data={inputData[index]}
                        callBack={props.callBack}
                        index={index}
                      />
                    </div>
                    {!show && (
                      <RadioButton
                        obj={inputData[index]}
                        key={index}
                        savedData={
                          savedData[props.id] &&
                          savedData[props.id][item.settings.properties.model]
                        }
                        id={props.id}
                      />
                    )}
                  </div>
                );
              } else {
                return (
                  <div>
                    {!show && (
                      <RadioButton
                        obj={inputData[index]}
                        key={index}
                        savedData={
                          savedData[props.id] &&
                          savedData[props.id][item.settings.properties.model]
                        }
                        id={props.id}
                        isPrint={props.isPrint}
                      />
                    )}
                  </div>
                );
              }

            default:
              return null;
          }
        })}
      </div>
    </form>
  );
}
const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(ComponentRenderer);
