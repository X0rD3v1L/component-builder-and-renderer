import React, { useEffect, useRef, useState ,memo} from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import { saveData } from "../../../actions";
import store from "../../../store";
import "./text-field.css";

 function Textfield(props) {
  const { obj } = props;
  let storeDate = store.getState();
  const [textValue, setTextValue] = useState(obj.settings.properties.defaultValue ? obj.settings.properties.defaultValue:"");
  let selectedTranscript =
  store.getState().saveData[props.id]&&store.getState().saveData[props.id][obj.settings.properties.model];
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    {
      obj.settings.properties.isMicNeeded === false
        ? setTextValue(
          storeDate.saveData[props.id]&&storeDate.saveData[props.id][obj.settings.properties.model]
              ? storeDate.saveData[props.id]&&storeDate.saveData[props.id][obj.settings.properties.model]
              : ""
          )
        : setOutput(transcript);
    }
  }, [obj.settings.properties.isMicNeeded === true ? transcript : null]);

  useEffect(() => {
    if(storeDate.saveData[props.id]){
      setTextValue(storeDate.saveData[props.id][obj.settings.properties.model]);
    }
    
  }, [storeDate.saveData[props.id] && storeDate.saveData[props.id][obj.settings.properties.model]]);

  const handleListening = (e) => {
    e.preventDefault();
    if (isListening === false) resetTranscript();
    setIsListening(!isListening);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = (e) => {
    e.preventDefault();
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    if (isListening === false) setOutput("");
    store.dispatch(saveData({ [obj.settings.properties.model]: transcript }, props.id));
  };
  const handleBlur = (e) => {
    store.dispatch(saveData({[e.target.name]:e.target.value}, props.id))
  };
  const handleChange = (e) => {
    if (obj.settings.properties.isMicNeeded === true) {
      setOutput(e.target.value);
    } else {
      setTextValue(e.target.value);
    }
  };

  let colClass = obj.settings.others.bootstrapGridClass
    ? obj.settings.others.bootstrapGridClass
    : "col-12";
  let showPattern = obj.settings.validations.pattern ? true : false;
  return (
    <div className={colClass} style={obj.settings.divStyles}>
      <div
        
        className={obj.settings.properties.hideLabel ? "d-none" : ""}
      >
        <label style={obj.settings.labelStyles}>{obj.settings.properties.label}</label>
        {obj.settings.validations.required === true && (
          <span style={{ color: "red" }}>
            {obj.settings.validations.requiredCharacter}
          </span>
        )}
      </div>
      {!obj.settings.properties.hidden && 
      <div  > {showPattern ? (
        <input
          className="text-field-input"
          data-testid="text-field"
          type={obj.settings.inputType}
          disabled={obj.settings.properties.disabled}
          name={obj.settings.properties.model}
          style={obj.settings.styles}
          value={
            obj.settings.properties.isMicNeeded === true
              ? selectedTranscript && !output
                ? selectedTranscript
                : output
              : textValue || ""
          }
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={obj.settings.properties.placeholder || ""}
          required={obj.settings.validations.required}
          minLength={obj.settings.validations.minLength}
          maxLength={obj.settings.validations.maxLength}
          pattern={obj.settings.validations.pattern}
        />
      ) : (
        <input
          className="text-field-input"
          data-testid="text-field"
          type={obj.settings.inputType}
          disabled={obj.settings.properties.disabled}
          name={obj.settings.properties.model}
          style={obj.settings.styles}
          value={
            obj.settings.properties.isMicNeeded === true
              ? selectedTranscript && !output
                ? selectedTranscript
                : output
              : textValue || ""
          }
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={obj.settings.properties.placeholder || ""}
          required={obj.settings.validations.required}
          minLength={obj.settings.validations.minLength}
          maxLength={obj.settings.validations.maxLength}
        />
      )}
      </div>}
      {obj.settings.properties.isMicNeeded && (
        <div
          className={
            isListening ? "microphone-status-rec" : "microphone-status-stop"
          }
        >
          <button
            className="fas fa-microphone"
            ref={microphoneRef}
            onClick={isListening ? stopHandle : handleListening}
            disabled={obj.settings.properties.disabled}
          ></button>
        </div>
      )}
    </div>
  );
}
export default memo(Textfield);
