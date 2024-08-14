import {
    FaMinus,
    FaCaretSquareDown,
  } from "react-icons/fa";
  import { BiSquareRounded } from "react-icons/bi";
  import { FiCheckSquare, FiCircle } from "react-icons/fi";
  const formUIElements = [
    { icon: <FiCheckSquare />, name: "checkBox",displayName: "Check Box", id: 1 },
    { icon: <FiCircle />, name: "radioButton",displayName: "Radio Button", id: 2 },
    { icon: <FaCaretSquareDown />, name: "selectCombo",displayName: "Select Combo", id: 3 },
    { icon: <BiSquareRounded />, name: "textarea",displayName: "Text Area", id: 4 },
    { icon: <FaMinus />, name: "textfield",displayName: "Text Field", id: 5 },
  ];
  const mapIcons = {
    "fa fa-check-square-o": <FiCheckSquare />,
    "fa fa-square-o": <BiSquareRounded />,
    "fa fa-minus": <FaMinus />,
    "fa fa-circle-o": <FiCircle />,
    "fa fa-caret-square-o-down": <FaCaretSquareDown />,
  };
  const staticJson = {
    "checkBox": [
      {
        title: "Check Box",
        template: "componentBuilder/components/checkBox.html",
        icon: "fa fa-check-square-o",
        settings: {
          icon: true,
          inputType: "checkbox",
          inputMask: "",
          key: "checkBox",
          isModelNeeded: true,
          properties: {
            label: "Option",
            name: "checkBox62341",
            id: "checkBox62341",
            labelSize: "",
            labelColor: "",
            defaultValue: false,
            readonly: false,
            disabled: false,
            model: "checkBox62341",
            hidden: true,
            hideLabel: false,
            identificationLabel: "",
            bootstrapClass: "",
            checkedAction: "",
            unCheckedAction: "",
          },
          styles: {
            textAlign: "",
            fontStyle: "",
            fontSize: "",
            fontFamily: "",
            fontWeight: "",
            color: "",
            backgroundColor: "",
            customCss: "",
            customClass: "",
            marginLeft: "",
            marginRight: 5,
            marginTop: "",
            marginBottom: "",
            paddingLeft: "",
            paddingRight: "",
            paddingTop: "",
            paddingBottom: "",
            display: "",
            width: "",
            float: "left",
          },
          others: {
            bootstrapGridClass: "",
          },
          validations: {
            required: false,
          },
          conditional: {
            show: null,
            when: null,
            eq: "",
          },
          type: "checkBox",
        },
        componentId: "component-17266",
      },
    ],
    "radioButton": [
      {
        "title": "Radio Button",
        "template": "componentBuilder/components/radioButton.html",
        "icon": "fa fa-circle-o",
        "settings": {
            "icon": true,
            "inputType": "radio",
            "inputMask": "",
            "key": "radioButton",
            "isModelNeeded": true,
            "properties": {
                "label": "Radio Text",
                "name": "radioButton68892",
                "id": "radioButton68892",
                "value": "",
                "color": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "radioButton68892",
                "identificationLabel": "",
                "icon": true,
                "hidden": false,
                "hideLabel": false,
                "bootstrapClass": "",
                "options": [
                    {
                        "key": 1,
                        "value": "option 1",
                        "$$hashKey": "object:971"
                    },
                    {
                        "key": 2,
                        "value": "option 2",
                        "$$hashKey": "object:972"
                    },
                    {
                        "key": 3,
                        "value": "option 3",
                        "$$hashKey": "object:973"
                    },
                    {
                        "key": 4,
                        "value": "option 4",
                        "$$hashKey": "object:974"
                    }
                ]
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
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": "",
                "display": "",
                "width": "",
                "float": "left",
                "bootstrapGridClass": ""
            },
            "labelStyles": {
                "color": "",
                "fontSize": "",
                "fontWeight": "",
                "wordWrap": "break-word"
            },
            "validations": {
                "required": false,
                "requiredCharacter": "*"
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
            "type": "radioButton"
        },
        "componentId": "component-27619"
    }
    ],
    "selectCombo": [
      {
        "title": "Select Combo",
        "template": "componentBuilder/components/selectCombo.html",
        "icon": "fa fa-caret-square-o-down",
        "settings": {
            "icon": true,
            "inputType": "select",
            "inputMask": "",
            "key": "select",
            "isModelNeeded": true,
            "properties": {
                "label": "Select",
                "name": "select102463",
                "id": "select102463",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "select102463",
                "identificationLabel": "",
                "icon": true,
                "hidden": true,
                "hideLabel": false,
                "bootstrapClass": "",
                "options": []
            },
            "labelStyles": {
                "textAlign": "left",
                "fontStyle": "",
                "fontSize": "",
                "fontFamily": "",
                "fontWeight": "",
                "textDecoration": "",
                "textTransform": "",
                "color": "",
                "wordWrap": "break-word"
            },
            "divStyles": {
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
                "borderColor": "",
                "display": "",
                "width": ""
            },
            "validations": {
                "required": false,
                "requiredCharacter": "*"
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
            "type": "selectCombo"
        },
        "componentId": "component-61605"
    }
    ],
    "textarea": [
      {
        "title": "Text Area",
        "template": "componentBuilder/components/textarea.html",
        "icon": "fa fa-square-o",
        "settings": {
            "input": true,
            "tableView": true,
            "inputType": "textarea",
            "label": "text area",
            "isModelNeeded": true,
            "key": "TextArea",
            "properties": {
                "label": "Text",
                "labelSize": "",
                "labelColor": "",
                "placeholder": "Enter text",
                "name": "TextArea49618",
                "id": "TextArea49618",
                "rows": "",
                "model": "TextArea49618",
                "defaultValue": "",
                "readonly": false,
                "disabled": false,
                "hidden": false,
                "hideLabel": false,
                "isMicNeeded": false,
                "bootstrapClass": "",
                "identificationLabel": ""
            },
            "styles": {
                "color": "",
                "backgroundColor": "",
                "borderColor": "",
                "marginLeft": "",
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": "",
                "height": ""
            },
            "labelStyles": {
                "color": "",
                "fontSize": "",
                "fontWeight": "",
                "wordWrap": "break-word"
            },
            "divStyles": {
                "color": "black",
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
                "borderColor": "",
                "display": "",
                "width": "",
                "height": "100"
            },
            "validations": {
                "required": false,
                "maxLength": "",
                "minLength": "",
                "pattern": "",
                "requiredCharacter": "*"
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
            "type": "textarea"
        },
        "componentId": "component-84618"
    }
    ],
    "textfield": [
      {
        "title": "Text Field",
        "template": "componentBuilder/components/textfield.html",
        "icon": "fa fa-minus",
        "settings": {
            "icon": true,
            "tableView": true,
            "inputType": "text",
            "backupType": "text",
            "inputMask": "",
            "key": "TextField",
            "hide": false,
            "isModelNeeded": true,
            "properties": {
                "label": "Text",
                "placeholder": "Enter text",
                "name": "TextField17795",
                "id": "TextField17795",
                "model": "TextField17795",
                "defaultValue": "",
                "readonly": false,
                "disabled": false,
                "hidden": false,
                "hideLabel": false,
                "isMicNeeded": false,
                "bootstrapClass": "",
                "identificationLabel": ""
            },
            "styles": {
                "color": "",
                "backgroundColor": "white",
                "borderColor": "",
                "fontSize": "",
                "marginLeft": "",
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": "",
                "fontFamily": "",
                "fontWeight": "",
                "textDecoration": "",
                "textTransform": ""
            },
            "labelStyles": {
                "lableColor": "",
                "labelSize": "",
                "wordWrap": "break-word"
            },
            "divStyles": {
                "color": "black",
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
                "borderColor": "",
                "display": "",
                "width": ""
            },
            "validations": {
                "required": false,
                "maxLength": "",
                "minLength": "",
                "pattern": "",
                "requiredCharacter": "*"
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
                "operator": "",
                "compareValue": ""
            },
            "type": "textfield"
        },
        "componentId": "component-82379"
    }
    ]
  };
  export { formUIElements, mapIcons, staticJson };
  