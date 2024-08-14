import './properties-accordion-body.css'
import React ,{useState,useEffect} from "react";
import DisplayZone from '../display-zone/display-zone';
import store from '../../../../component-renderer/store';

const PropertiesAccordionBody = (props) => {
    const { data, jsonData } = props   
    const [display,setDisplay]=useState(false)
    const valuesData = props.customEleUpdated?jsonData:(props.create&&store.getState().createControlData.length>0? store.getState().createControlData  : jsonData)
    useEffect(()=>{
        setDisplay(!display)
    },[props])
        const jsonIndex= props.create? 0 : (props.editIndex ? parseInt(props.editIndex) : valuesData.length-1)
    return (
        <div>
            
            {data.length>0 && data.map((eachData) => {    
                const requiredCharValue=eachData.requiredCharacterObj&& valuesData[jsonIndex] && valuesData[jsonIndex].settings.validations.requiredCharacter
                return (
                    <div>
                        {eachData.jsonProperty !== "" ? 
                        (eachData.label !== "dataOptions"  ? <DisplayZone 
                        label={eachData.label} 
                        title={jsonData[jsonIndex].title} 
                        type={eachData.type} 
                        name={eachData.name} 
                        value={valuesData[jsonIndex] && valuesData[jsonIndex].settings[eachData.jsonProperty][eachData.name]?valuesData[jsonIndex].settings[eachData.jsonProperty][eachData.name]:""} 
                        dropdownOptions={eachData.dropdownOptions ? eachData.dropdownOptions:""} jsonProperty={eachData.jsonProperty} 
                        optionsData={valuesData[jsonIndex] && valuesData[jsonIndex].settings[eachData.jsonProperty].options ? valuesData[jsonIndex].settings[eachData.jsonProperty].options : ""} 
                        optionsHeaders={eachData.optionsHeaders ? eachData.optionsHeaders : ""} 
                        valuesData={valuesData[jsonIndex]} 
                        jsonIndex={jsonIndex} 
                        renderDatas={store.getState().renderData} 
                        requiredCharacterObj={eachData.requiredCharacterObj?eachData.requiredCharacterObj:""}  
                        requiredCharacterValue={requiredCharValue?requiredCharValue:''} 
                        create={props.create} 
                        createJsonData={jsonData}/> 
                        :
                        
                        <DisplayZone label={eachData.label} title={jsonData[jsonIndex].title} type={eachData.type} name={eachData.name} value={valuesData[jsonIndex] && valuesData[jsonIndex].settings[eachData.jsonProperty][eachData.name]} dropdownOptions={eachData.dropdownOptions ? eachData.dropdownOptions:""} jsonProperty={eachData.jsonProperty} optionsData={valuesData[jsonIndex] && valuesData[jsonIndex].settings[eachData.jsonProperty].data ? valuesData[jsonIndex].settings[eachData.jsonProperty].data : ""} optionsHeaders={eachData.optionsHeaders ? eachData.optionsHeaders : ""} valuesData={valuesData[jsonIndex]} jsonIndex={jsonIndex} renderDatas={store.getState().renderData}/>)
                        : 
                        <DisplayZone label={eachData.label} title={jsonData[jsonIndex].title} type={eachData.type} name={eachData.name} value={valuesData[jsonIndex] && valuesData[jsonIndex].settings[eachData.name]} dropdownOptions={eachData.dropdownOptions ? eachData.dropdownOptions:""} jsonProperty={eachData.jsonProperty} jsonIndex={jsonIndex} renderDatas={store.getState().renderData} />}
                    </div>
                )
            })}
        </div>
    )
}

export default PropertiesAccordionBody;

