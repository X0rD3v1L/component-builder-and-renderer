import React, { memo, useEffect, useRef,useState } from "react";
import { saveData } from "../../../actions";
import SpeechRecognition, {useSpeechRecognition,} from "react-speech-recognition";
import store from "../../../store";
import "./textarea.css";

function TextArea(props) {
  const { obj } = props;
  let storeDate = store.getState();
  const [textValue, setTextValue] = useState(obj.settings.properties.defaultValue ? obj.settings.properties.defaultValue:"");
  const [validate, setValidate] = useState(false);
  let selectedTranscript = store.getState().saveData[props.id]&&store.getState().saveData[props.id][obj.settings.properties.model];
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const [output,setOutput] = useState("");

  useEffect(() => {
    // console.log('use effect textarea1')
    if (storeDate.saveData[props.id]) {
      setTextValue(
        storeDate.saveData[props.id][obj.settings.properties.model]
          ? storeDate.saveData[props.id][obj.settings.properties.model]
          : ""
      );
    }
  }, []);

  useEffect(() => {
    // console.log('use effect textarea')
    if (storeDate.saveData[props.id]) {
      setTextValue(storeDate.saveData[props.id][obj.settings.properties.model]);
    }
  }, [
    storeDate.saveData[props.id] &&
      storeDate.saveData[props.id][obj.settings.properties.model],
  ]);

  useEffect(() => {
    setOutput(transcript);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="microphone-wrapper">
        Browser Doesn't Support Speech Recognition.
      </div>
    );
  }
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
    store.dispatch(
      saveData({ [obj.settings.properties.model]: transcript }, props.id)
    );
  };

  // useEffect(() => {
  //   // console.log('use effect textarea')
  //   setTextValue(storeDate.saveData[props.id][obj.settings.properties.model]);
  // }, [storeDate.saveData[props.id][obj.settings.properties.model]]);

  


  // useEffect(() => {
  //   // console.log('use effect textarea')
  //   setTextValue(storeDate.saveData[props.id][obj.settings.properties.model]);
  // }, [storeDate.saveData[props.id][obj.settings.properties.model]]);

  

  const handleBlur = (e) => {
    store.dispatch(saveData({ [e.target.name]: e.target.value }, props.id));
  };
  const handleChange = (e) => {
    let inputs = e.target.value;

    setTextValue(inputs);
    if (e.target.value) {
      let patterncheck = new RegExp(obj.settings.validations.pattern);

      // console.log("pattern from json:", patterncheck);

      if (obj.settings.validations.pattern) {
        if (inputs.match(patterncheck)) {
          // console.log('IN IF')
          //   [...inputs].forEach(inputVal => {
          //     // console.log(inputVal)
          //       if(!inputVal.match(patterncheck)) {
          //           setValidate(false);
          //           return;
          //       }
          //       else setValidate(true);
          //   })

          //the above code is not giving output as expected:
          //for pattern: [a-z]+, aaAAaa is being valid

          for (let i = 0; i < inputs.length; i++) {
            if (
              !inputs[i].match(patterncheck) ||
              (obj.settings.validations.maxLength &&
                inputs.length > obj.settings.validations.maxLength) ||
              (obj.settings.validations.minLength &&
                inputs.length < obj.settings.validations.minLength)
            ) {
              // console.log('Inner if', inputs.length,obj.settings.validations.maxLength)
              setValidate(false);
              return;
            } else {
              // console.log('Inner else')
              setValidate(true);
            }
          }
        } else {
          setValidate(false);
          console.log("else: ", inputs);
          return;
          //    alert("not valid character")
        }
      }
    }
  };

  let colClass = obj.settings.others.bootstrapGridClass
    ? obj.settings.others.bootstrapGridClass
    : "col-12";

  return (
    <>
      <div className={colClass} style={obj.settings.divStyles}>
        <label
          style={obj.settings.labelStyles}
          className={obj.settings.properties.hideLabel ? "d-none" : ""}
        >
          {obj.settings.properties.label}
          <label className="required-char">
            {obj.settings.validations.required
              ? obj.settings.validations.requiredCharacter
              : ""}
          </label>
        </label>
        <br />
    

      <div className="microphone-wrapper">
     
      {!obj.settings.properties.hidden && <textarea
          // className="form-control form-control-sm" //causes conflicts with inline styles
          rows={obj.settings.properties.rows}
          cols="100"
    
          className={'text-area ' +((obj.settings.validations.required && !textValue)
            ? " red " : "")+ (obj.settings.validations.pattern ? (textValue ? (!validate ? " green" : " red") : '') : '')}
          style={
            obj.settings.styles
          }
          data-testid='text-area'
          disabled={obj.settings.properties.disabled}
          name={obj.settings.properties.model}
          value={textValue || ""}
          // value={obj.settings.properties.isMicNeeded}  ? ({textValue || ""}) : ({(selectedTranscript && !output) ? selectedTranscript : output})
          onBlur={handleBlur} 
          onChange={handleChange}
          placeholder={obj.settings.properties.placeholder || ""}
          required={obj.settings.validations.required}
          readOnly={obj.settings.properties.readonly}
        />}
      
      {obj.settings.properties.isMicNeeded && <div
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
        </div>}
      </div>
      </div>
    </>
  );
}

export default memo(TextArea);
