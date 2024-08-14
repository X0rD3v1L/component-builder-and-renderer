import React, { forwardRef } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ComponentRenderer from "./components/component-renderer";
import "bootstrap/dist/css/bootstrap.min.css";

import { renderFormData, saveInitialData, createControlData } from "./actions";
import "@fortawesome/fontawesome-free/css/all.css";

const ComponentRender = (props) => {
  if(props.createControl){
   store.dispatch(createControlData(props.renderData));
  }
  else{
    store.dispatch(renderFormData(props.renderData));
  }
  props.bindData && store.dispatch(saveInitialData(props.bindData, props.refId));
 
  return (
    <Provider store={store}>
      <ComponentRenderer
        renderData={props.renderData} 
        bindData={props.bindData}
        sendFormData={props.sendFormData}
        dropZone={props.dropZone}
        onDrop={props.onDrop}
        dragStart={props.dragStart}
        callBack={props.callBack}
        id={props.refId}
        isPrint={props.isPrint}
        isCreate={props.createControl}
      />
    </Provider>
  );
};
export default ComponentRender;
