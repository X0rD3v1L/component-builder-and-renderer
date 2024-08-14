import React, { memo } from "react";
import { useState } from "react";
import { saveData } from "../../../actions";
import store from "../../../store";

function RadioButton(props) {
  const { obj } = props;

  let storeDate = store.getState().saveData[props.id] && store.getState().saveData[props.id][obj.settings.properties.model];
  let scoreStoreData =store.getState().saveData[props.id] && store.getState().saveData[props.id][obj.settings.properties.scoreModel];
  let defaultBindData = storeDate ? storeDate : "";
  let defaultScoreData = scoreStoreData ? scoreStoreData : "";

  const [value, setValue] = useState({
    [obj.settings.properties.model]: defaultBindData,
    itemScore: defaultScoreData,
  });
  const [score, setScore] = useState({
    [obj.settings.properties.scoreModel]: defaultScoreData,
  });

  const handleClick = (e, item) => {
    store.dispatch(
      saveData({ [obj.settings.properties.model]: parseInt(e.target.value) }, props.id)
    );
    setValue({ ...value, itemScore: item.score });
    console.log(item.score, "......value");
    if (obj.settings.type === "scoreRadioButton") {
      store.dispatch(
        saveData({ [obj.settings.properties.scoreModel]: parseInt(item.score) }, props.id)
      );
      setScore({ [obj.settings.properties.scoreModel]: value.itemScore });
      console.log(score, "...state score");
    }
  };
  let validationClass = obj.settings.validations.required && !props.savedData ? "req-check" : "";
  let colClass = obj.settings.others.bootstrapGridClass ? obj.settings.others.bootstrapGridClass : "col-12";
 
  return (
    <div style={{...obj.settings.styles,"width" : obj.settings.styles.width}} className={validationClass + colClass}>
      {/* <div style={obj.settings.styles}> */}
      <div>
        <label
          style={!props.isPrint ? obj.settings.labelStyles : null}
          className={obj.settings.properties.hideLabel ? "d-none" : ""} >
          {obj.settings.properties.label}
        </label>
        {(!props.isPrint && obj.settings.validations.required) && (
          <span className="required">
            {obj.settings.validations.requiredCharacter}
          </span>
        )}
      </div>
        {obj.settings.properties.options.reduce((acc, item) => {
          // console.log(acc, item, ".......reduce method acc, item");

          acc.push([         
            <div style={obj.settings.styles} className={obj.settings.styles.width==="100%" ? "col-md-12" : obj.settings.styles.bootstrapGridClass}>

              <input
                type="radio"
                className="radio-styles"
                name={obj.settings.properties.model}
                disabled={obj.settings.properties.disabled}
                value={item.key}
                // style={obj.settings.styles}
                data-testid={item.key}
                onChange={(e) => handleClick(e, item)}
                key={item.key}
                score={item.score}
                checked={item.key == props.savedData}
              />
              &nbsp;
              <span key={item.value}>
                {item.value}
              </span>
              &nbsp;
            </div>

          ]);

          return acc;
        }, [])}

      {obj.settings.type === "scoreRadioButton"&&
      !obj.settings.properties.hideScore ? (
        <div>
        <input
          style={obj.settings.scoreStyles}
          name={obj.settings.properties.name}
          className="score-input"
          type="number"
          value={value.itemScore}
          readOnly={obj.settings.properties.readOnly}
          disabled={obj.settings.properties.isScoreDisabled}
        />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default memo(RadioButton);