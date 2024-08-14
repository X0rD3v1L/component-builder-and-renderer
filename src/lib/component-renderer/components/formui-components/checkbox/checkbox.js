import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveData } from "../../../actions";
import { evaluateActions } from "../../../common/evaluate-actions";
import store from "../../../store";
import "./check-box.css";
function CheckBox(props) {
  const { obj } = props;
  console.log(props, "checkbox props");
  let storeDate =
    store.getState().saveData[props.id] &&
    store.getState().saveData[props.id][obj.settings.properties.model];
  let othersStoreData =
    store.getState().saveData[props.id] &&
    store.getState().saveData[props.id][
      obj.settings.properties.model + "-others"
    ];
  let othersValue = othersStoreData ? othersStoreData : "";
  useEffect(() => {
    if (
      store.getState().saveData[props.id] &&
      storeData.saveData[props.id][
        obj.settings.properties.model + "-othersCheck"
      ]
    ) {
      setState({ ...state, showOtherText: !state.showOtherText });
    }
  }, [props.savedData]);
  let defaultBindData = storeDate ? storeDate : "";
  const [textValue, setTextValue] = useState(othersValue);
  const [state, setState] = useState({
    [obj.settings.properties.model]: defaultBindData,
    showOtherText: false,
  });
  console.log(store.getState().saveData, ".........checkbox binddata");
  const dispatchtoStore = (action) => {
    evaluateActions(action, props.id);
  };

  const othersHandleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleChange = (e, event) => {
    if (obj.settings.type === "checkBox") {
      if (e.target.checked && obj.settings.properties.checkedAction) {
        dispatchtoStore(obj.settings.properties.checkedAction);
      } else if (obj.settings.properties.unCheckedAction) {
        dispatchtoStore(obj.settings.properties.unCheckedAction);
      }
      setState({ ...state, [e.target.name]: e.target.checked });
      console.log([e.target.name], e.target.checked, "checkbox props55");
      store.dispatch(saveData({ [e.target.name]: e.target.checked }, props.id));
    } else {
      obj.settings.properties.options[e].selected = event.target.checked;
      store.dispatch(
        saveData(
          { [obj.settings.properties.model]: obj.settings.properties.options },
          props.id
        )
      );
    }
  };
  const othersChecked = (e) => {
    store.dispatch(saveData({ [e.target.name]: e.target.checked }, props.id));
    setState({ ...state, showOtherText: !state.showOtherText });
  };
  const othersAction = (e) => {
    store.dispatch(saveData({ [e.target.name]: e.target.value }, props.id));
  };
  let colClass = obj.settings.others.bootstrapGridClass
    ? obj.settings.others.bootstrapGridClass
    : "col-12";
  let validClass = obj.settings.validations.required
    ? state[obj.settings.properties.model]
      ? ""
      : " invalid"
    : " ";
  let storeData = store.getState();
  console.log(storeData.saveData, "I am check box");
  let checkBoxOptions =
    storeData.saveData[props.id] &&
    storeData.saveData[props.id][obj.settings.properties.model]
      ? storeData.saveData[props.id][obj.settings.properties.model]
      : obj.settings.properties.options;
  const isChecked =
    props.savedData == "true" || props.savedData == true ? true : false;
  return (
    <div
      style={{ ...obj.settings.styles, width: obj.settings.styles.width }}
      className={colClass + " checkbox-styles"}
    >
      {obj.settings.type === "checkBox" ? (
        <div className={validClass}>
          <input
            type="checkbox"
            style={{ ...obj.settings.styles }}
            disabled={obj.settings.properties.disabled}
            name={obj.settings.properties.model}
            id={obj.settings.properties.id}
            checked={isChecked}
            required={obj.settings.validations.required}
            onChange={handleChange}
            className={validClass}
            data-testid="check-box-single"
          />
          <label
            className={obj.settings.properties.hideLabel ? "d-none" : ""}
            style={{
              fontSize: obj.settings.styles.fontSize,
              fontFamily: obj.settings.styles.fontFamily,
            }}
          >
            {obj.settings.properties.label}
          </label>
        </div>
      ) : (
        <>
          <p
            style={obj.settings.labelStyles}
            className={
              (obj.settings.properties.hideLabel ? "d-none " : "") +
              "form-check-label"
            }
          >
            {obj.settings.properties.label}
          </p>
          {obj.settings.properties.options ? (
            checkBoxOptions.reduce((acc, item, index) => {
              acc.push([
                <div
                  style={obj.settings.styles}
                  key={item.value}
                  className={
                    obj.settings.styles.width
                      ? "col-md-12"
                      : obj.settings.styles.bootstrapGridClass
                  }
                >
                  <input
                    type="checkbox"
                    onChange={(e) => handleChange(index, e)}
                    name={obj.settings.properties.model}
                    required={obj.settings.validations.required}
                    checked={item.selected || false}
                    data-testid={"check-box" + index}
                  />
                  {item.value}
                </div>,
              ]);
              {
                obj.settings.properties.others &&
                  index + 1 == checkBoxOptions.length &&
                  acc.push([
                    <div style={obj.settings.styles} key={"otherscheck"}>
                      <input
                        type="checkbox"
                        onChange={othersChecked}
                        checked={
                          (storeData.saveData[props.id] &&
                            storeData.saveData[props.id][
                              obj.settings.properties.model + "-othersCheck"
                            ]) ||
                          false
                        }
                        name={obj.settings.properties.model + "-othersCheck"}
                      />
                      <span>Others</span>
                    </div>,
                  ]);
              }
              {
                obj.settings.properties.others &&
                  index + 1 == checkBoxOptions.length &&
                  state.showOtherText &&
                  acc.push([
                    <span key={"otherstext"}>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        required={obj.settings.properties.isOthersMandatory}
                        onBlur={othersAction}
                        name={obj.settings.properties.model + "-others"}
                        onChange={othersHandleChange}
                        value={textValue}
                        style={obj.settings.othersStyles}
                      />
                    </span>,
                  ]);
              }
              return acc;
            }, [])
          ) : (
            <input type="checkbox" />
          )}
        </>
      )}
    </div>
  );
}
export default CheckBox;
