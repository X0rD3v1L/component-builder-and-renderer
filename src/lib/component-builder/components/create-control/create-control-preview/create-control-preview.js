import React, { useEffect, useState } from "react";
import ComponentRender from "../../../../component-renderer/component-render";
import store from "../../../../component-renderer/store";
import "./create-control-preview.css";
import { connect } from 'react-redux';


const CreateControlPreview = (props) => {
    const [printData, setPrintData] = useState()
    const [renderData,setRenderData]=useState(props.customEleData)
 
    useEffect(()=>{
        if(store.getState().createControlData){
            setRenderData(store.getState().createControlData)
        }
        else{
            setRenderData(props.customEleData)
        }
    },[props.customEleData,props.state.createControlData])

    const getData = (data) => {
        setPrintData(data)
      };
    
    return (
        <form>
            <fieldset className="create-control-preview-grid">
                <legend className="create-control-preview-label">Preview</legend>
                {props.customEleData.length>0 && <ComponentRender renderData={props.customEleData} id="form3" sendFormData={getData} dropZone={false} createControl={true}/>}
               
            </fieldset>
        </form>
    )
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(CreateControlPreview)