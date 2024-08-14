import React, { useState } from "react";
import { saveData } from "../../../actions";
import store from "../../../store";
import './selectCombo.css'

function SelectCombo(props) {
  const { obj } = props;
  const [state, setState] = useState({});

  const handleChange = (e) => {
    if (obj.settings.type === "selectCombo") {
      setState({ ...state, [e.target.name]: e.target.value });
      store.dispatch(saveData({ [e.target.name]: e.target.value }, props.id));
    } 
    // else {
    //   obj.settings.properties.options[e].selected = true;
    //   store.dispatch(
    //     saveData({
    //       [obj.settings.properties.name]: obj.settings.properties.options,
    //     })
    //   );
    // }
    // console.log(e.target.name,e.target.value, "onchange");
  };

  let colClass = obj.settings.others.bootstrapGridClass
    ? obj.settings.others.bootstrapGridClass
    : "col-12";
let storeData = store.getState();
console.log(storeData,'==storeData==storeData')
  return (
    <div className={colClass}>
      <div style={obj.settings.divStyles}>
      <label style={obj.settings.labelStyles} className={obj.settings.properties.hideLabel ? 'd-none' : ''}>
        {obj.settings.properties.label}
        {obj.settings.validations.required === true && (
          <span style={{ color: "red" }}>
            {obj.settings.validations.requiredCharacter}
          </span>
        ) }
      </label>
      {props.isPrint ? <>&nbsp;{storeData.saveData[props.id]&&storeData.saveData[props.id][obj.settings.properties.model]}</>
      :
      <>
      <br />
      <select
        className='select-styles'
        name={obj.settings.properties.model}
        id={obj.settings.properties.id}
        required={obj.settings.validations.required}
        onChange={handleChange} data-testid="select-combo"
        value={storeData.saveData[props.id]&&storeData.saveData[props.id][obj.settings.properties.model]}
        disabled={obj.settings.properties.disabled}
      >
        <option value="">Select</option>
        {obj.settings.properties.options.reduce((acc, item) => {
          acc.push([<option value={item.key} key={item.key}>{item.value}</option>]);
          return acc;
        }, [])}
      </select>
      </>
      }
      </div>
    </div>
  );
}

export default SelectCombo;