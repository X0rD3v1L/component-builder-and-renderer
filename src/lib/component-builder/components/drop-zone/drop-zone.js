import { useEffect, useState } from 'react';
import { staticJson } from '../left-menu/left-menu-constants';
import './drop-zone.css'
import store from '../../../component-renderer/store'
import ComponentRender from '../../../component-renderer/component-render';
import { renderFormData } from '../../../component-renderer/actions';

function DropZone(props) {
  const [element, setElement] = useState([]);
  const [JsonData, setJsonData] = useState([]);
  const [updatedJson, setupdatedJson] = useState(false);
  const [show, setShow] = useState(false);
  const [, updateState] = useState();
  useEffect(() => {
    setShow(true)
  }, [updatedJson])
  useEffect(() => {
    if (props.selectedFormData && props.selectedFormData.length > 0) {
      setJsonData(props.selectedFormData)
      setShow(true)
    }
  }, [props.selectedFormData])
  useEffect(() => {
    setJsonData(props.storeData);
  }, [props.renderData])
  useEffect(()=>{
    setShow(!updatedJson)
  },[ store.getState().renderData])

  useEffect(()=>{
       (JsonData.length>0) && JsonData.map(each=>{
         each.settings.others.bootstrapGridClass=props.noOfColumns
       })
  },[props.noOfColumns, JsonData.length>0 && JsonData[JsonData.length-1].title])

  const onDrop = (event) => {
    setShow(false)
    let curElement = event.dataTransfer.getData("text");
    let dragContent = event.dataTransfer.getData("dragContent")
    if (event.dataTransfer.getData("dragContent")) {
      event.preventDefault();
      setupdatedJson(!updatedJson)
    
    } else {
      if(event.target.id.split('-')[0]!="nestedDrop") {
      setElement([...element, curElement])
      }
      if(event.target.id.includes('-tabpane-')) {
        getJsonData(curElement,event.target.firstChild.id, true, event.target.id.split('tabpane-')[1])
      } else {
      getJsonData(curElement,event.target.id)
     
      }
    }

  };
  const allowDrop = (e) => {
    e.preventDefault();
  }
  const getJsonData = (ele, target, istabs, tabIndex) => {
    let draggedElement = JSON.parse((JSON.stringify(staticJson[ele][0])))
    draggedElement.componentId = "component-" + Math.round(10000 + Math.random() * 100000)
    let uniqueValue = Math.round(10000 + Math.random() * 100000)
    let draggedElementKey = draggedElement.settings.key;
    draggedElement.settings.properties.id = draggedElementKey + "" + uniqueValue
    draggedElement.settings.properties.name = draggedElementKey + "" + uniqueValue
    draggedElement.settings.properties.model = draggedElementKey + "" + uniqueValue
    draggedElement.settings.properties.scoreModel = draggedElementKey + "" + uniqueValue + "-score"
    if(target.split('-')[0]=="nestedDrop") {
    
      let updatedData = store.getState().renderData
      setJsonData(updatedData)
      setShow(true)
      props.showProperties(draggedElement)
      } else {
    
        let updatedJsonData = store.getState().renderData;
      updatedJsonData.push(draggedElement)
    
      setShow(true)
      props.showProperties(draggedElement)
      setJsonData(updatedJsonData)
   
      }
  }
 
  const swapBoxes = (fromBox, toBox) => {
    let boxes = JsonData.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].settings.properties.id === fromBox.id) {
        fromIndex = i;
      }
      if (boxes[i].settings.properties.id === toBox.id) {
        toIndex = i;
      }
    }

    if (fromIndex != -1 && toIndex != -1) {
      let { fromId, ...fromRest } = boxes[fromIndex];
      let { toId, ...toRest } = boxes[toIndex];
      boxes[fromIndex] = { id: fromBox.id, ...toRest };
      boxes[toIndex] = { id: toBox.id, ...fromRest };
      setJsonData(boxes)
    }
  };
  const onDropEvent = data => event => {
    event.preventDefault();
    const dragContent = event.dataTransfer.getData("dragContent")
    if(dragContent) {
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
    swapBoxes(fromBox, toBox);
    return false;
    }
  }
  const dragStart = data => event => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  }
  const handleEdit = (data, operation, index) => {
    let jsonDataAfterEdit = store.getState().renderData;
    if (operation == "copy") {
      let index = -1;
      for (let i = 0; i < JsonData.length; i++) {
        if (JsonData[i].title === data.title) {
          index = i;
        }
      }
      jsonDataAfterEdit.splice(1, 0, data);
      setJsonData(jsonDataAfterEdit)
      setShow(!updatedJson)
      updateState({})
    }
    if (operation == "close") {
      let index = -1;
      for (let i = 0; i < JsonData.length; i++) {
        if (JsonData[i].settings.properties.id === data.settings.properties.id) {
          index = i;
        }
      }
      jsonDataAfterEdit.splice(index, 1);
      setJsonData(jsonDataAfterEdit)
      setShow(!updatedJson)
      updateState({})
    }
    if (operation == "edit"){
      setJsonData(jsonDataAfterEdit);
      setShow(!updatedJson)
      props.editButtonCallback(jsonDataAfterEdit[index],index)
      updateState({})
    }
  }
  const sendFormData = () => {

  }
  return (
    <div className="col-12" onDragOver={allowDrop} onDrop={onDrop} id='outerdrop'>
      <div className="dropzone">
        <div className="dropzone area">
          {show == true && <ComponentRender renderData={JsonData} refId='form1' dropZone={true} onDrop={onDropEvent} dragStart={dragStart} callBack={handleEdit} sendFormData={sendFormData}/>}
          <p className="dropzone-placeholder">Drag and Drop a form component</p>
        </div>
      </div>
    </div>
  )
}

export default DropZone;
