import React,{useState} from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TableEdit from "../../../../component-renderer/components/formui-components/table-edit/table-edit";
import store from "../../../../component-renderer/store";

function DataModalPopup(data) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleSave = () => {
        const tableData = data;
        tableData['data'][0].settings.properties.data = store.getState().saveData.undefined ? store.getState().saveData.undefined["table-edit24030"] : []
        setShow(true);
    }
    const jsonData = [
        {
            "title": "Table - Edit",
            "template": "componentBuilder/components/table-edit.html",
            "icon": "fa fa-table",
            "settings": {
                "icon": true,
                "inputType": "table-edit",
                "inputMask": "",
                "key": "table-edit",
                "isModelNeeded": true,
                "properties": {
                    "label": "",
                    "name": "table-edit24030",
                    "id": "table-edit24030",
                    "value": "",
                    "labelSize": "",
                    "labelColor": "",
                    "defaultValue": false,
                    "readonly": false,
                    "disabled": false,
                    "required": false,
                    "click": false,
                    "show": true,
                    "inline": false,
                    "model": "table-edit24030",
                    "icon": true,
                    "hidden": false,
                    "hideLabel": false,
                    "bootstrapClass": "",
                    "options": [
                        {
                            "key": 1,
                            "value": "Field 1",
                            "isMandatory": false,
                            "$$hashKey": "object:179"
                        },
                        {
                            "key": 2,
                            "value": "Field 2",
                            "isMandatory": false,
                            "$$hashKey": "object:180"
                        },
                        {
                            "key": 3,
                            "value": "Field 3",
                            "isMandatory": false,
                            "$$hashKey": "object:181"
                        },
                        {
                            "key": 4,
                            "value": "Field 4",
                            "isMandatory": false,
                            "$$hashKey": "object:182"
                        }
                    ]
                },
                "labelStyles": {
                    "color": "",
                    "fontSize": "",
                    "fontWeight": "",
                    "backgroundColor": "",
                    "marginLeft": "",
                    "marginRight": "",
                    "marginTop": "",
                    "marginBottom": "",
                    "wordWrap": "break-word"
                },
                "styles": {
                    "textAlign": "",
                    "fontStyle": "",
                    "fontSize": "",
                    "fontFamily": "",
                    "fontWeight": "",
                    "color": "",
                    "backgroundColor": "",
                    "customCss": "",
                    "customClass": "",
                    "marginLeft": "",
                    "marginRight": 5,
                    "marginTop": "",
                    "marginBottom": "",
                    "paddingLeft": "",
                    "paddingRight": "",
                    "paddingTop": "",
                    "paddingBottom": "",
                    "display": "",
                    "width": "",
                    "float": "left"
                },
                "headerStyles": {
                    "textAlign": "",
                    "fontStyle": "",
                    "fontSize": "",
                    "fontFamily": "",
                    "fontWeight": "",
                    "color": "",
                    "backgroundColor": "",
                    "customCss": "",
                    "customClass": "",
                    "marginLeft": "",
                    "marginRight": "",
                    "marginTop": "",
                    "marginBottom": "",
                    "paddingLeft": "",
                    "paddingRight": "",
                    "paddingTop": "",
                    "paddingBottom": "",
                    "display": "",
                    "width": ""
                },
                "rowStyles": {
                    "textAlign": "",
                    "fontStyle": "",
                    "fontSize": "",
                    "fontFamily": "",
                    "fontWeight": "",
                    "color": "",
                    "backgroundColor": "",
                    "customCss": "",
                    "customClass": "",
                    "marginLeft": "",
                    "marginRight": "",
                    "marginTop": "",
                    "marginBottom": "",
                    "paddingLeft": "",
                    "paddingRight": "",
                    "paddingTop": "",
                    "paddingBottom": "",
                    "display": "",
                    "width": ""
                },
                "tableStyles": {
                    "marginLeft": "",
                    "marginRight": "",
                    "marginTop": "",
                    "marginBottom": "",
                    "width": ""
                },
                "validations": {
                    "required": false
                },
                "others": {
                    "errorColor": "",
                    "customCss": "",
                    "customClass": "",
                    "bootstrapGridClass": ""
                },
                "conditional": {
                    "show": null,
                    "when": null,
                    "eq": ""
                },
                "type": "Table-Inline"
            },
            "configurations": [
                {
                    "show": true,
                    "title": "Display",
                    "template": "componentBuilder/components/table-edit/settings.html"
                },
                {
                    "title": "Styles-Label",
                    "template": "componentBuilder/components/table-edit/stylesLabel.html"
                },
                {
                    "title": "Styles-text",
                    "template": "componentBuilder/components/table-edit/styles.html"
                },
                {
                    "title": "Styles-table-Header",
                    "template": "componentBuilder/components/table-edit/headerStyles.html"
                },
                {
                    "title": "Styles-table-Row",
                    "template": "componentBuilder/components/table-edit/rowStyles.html"
                },
                {
                    "title": "Styles-table",
                    "template": "componentBuilder/components/table-edit/tableStyles.html"
                },
                {
                    "title": "Validations",
                    "template": "componentBuilder/components/table-edit/validations.html"
                },
                {
                    "title": "Conditions",
                    "template": "componentBuilder/components/common/conditional.html"
                }
            ],
            "componentId": "component-61468"
        }
    ]
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Data
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Data to table</Modal.Title>
          </Modal.Header>
          <Modal.Body><TableEdit obj={jsonData[0]} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DataModalPopup;
