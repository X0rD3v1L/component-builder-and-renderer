export const data = [
    {
      "title": "Date",
      "template": "componentBuilder/components/date.html",
      "icon": "fa fa-calendar",
      "settings": {
        "icon": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "key": "date",
        "isModelNeeded": true,
        "properties": {
          "label": "Admission Date",
          "placeholder": "",
          "name": "date50890",
          "id": "date50890",
          "model": "admissionDate",
          "labelSize": "",
          "labelColor": "",
          "defaultValue": "",
          "readonly": false,
          "disabled": false,
          "hidden": false,
          "hideLabel": false,
          "bootstrapClass": "",
          "format": "MM/dd/yyyy",
          "identificationLabel": ""
        },
        "styles": {
          "color": "",
          "backgroundColor": "",
          "borderColor": "",
          "fontSize": "",
          "marginLeft": "",
          "marginRight": "",
          "marginTop": "",
          "marginBottom": "",
          "paddingLeft": "",
          "paddingRight": "",
          "paddingTop": "",
          "paddingBottom": ""
        },
        "labelStyles": {
          "color": "#F58220",
          "font-size": "13px",
          "font-weight": "600",
          "wordWrap": "break-word",
          "marginLeft": "10px"
        },
        "validations": {
          "required": false,
          "minDate": "",
          "maxDate": "",
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
        "special": {
          "isOpen": ""
        },
        "type": "date"
      },
      "configurations": [
        {
          "show": true,
          "title": "Display",
          "template": "componentBuilder/components/date/settings.html"
        },
        {
          "title": "Styles",
          "template": "componentBuilder/components/date/styles.html"
        },
        {
          "title": "Validations",
          "template": "componentBuilder/components/date/validations.html"
        },
        {
          "title": "Conditions",
          "template": "componentBuilder/components/common/conditional.html"
        }
      ],
      "componentId": "component-43588"
    },
    {
        "title": "Text Field",
        "settings":{
            "properties":{
                "label":"Remarks"
            }
        }
    },
    {
        "title": "BMI",
        "settings":{
            "properties":{
                "label":"Body Mass Index"
            }
        }
    },
    {
        "title": "Datetime",
        "settings":{
            "properties":{
                "label":"DateTime"
            },
        "type":"datetime-local"
        }
        
    },
    {
        "title": "Signature",
        "settings":{
            "properties":{
                "label":"Signature"
            },
        "type":""
        }
        
    },
    {
        "title": "Time",
        "settings":{
            "properties":{
                "label":"Time"
            },
        "type":"time"
        }
        
    },
    {
        "title": "Empty Space",
        "settings":{
            "properties":{
                "label":"Time"
            },
        "type":""
        }
        
    },
    {
        "title": "Line",
        "settings":{
            "properties":{
                "label":""
            },
        "type":""
        }
        
    },
    {
      "title": "Label",
      "template": "componentBuilder/components/label.html",
      "icon": "fa fa-font",
      "settings": {
          "icon": true,
          "inputType": "label",
          "inputMask": "",
          "key": "labelField",
          "properties": {
              "label": "Label",
              "labelSize": "",
              "labelColor": "",
              "name": "labelField104610",
              "hidden": false,
              "hideLabel": false
          },
          "divStyles": {
              "color": "",
              "backgroundColor": "",
              "height": "",
              "marginLeft": "",
              "marginRight": "",
              "marginTop": "",
              "marginBottom": "",
              "paddingLeft": "",
              "paddingRight": "",
              "paddingTop": "",
              "paddingBottom": "",
              "borderColor": "",
              "borderStyle": "",
              "borderWidth": ""
          },
          "labelStyles": {
              "textAlign": "left",
              "fontStyle": "",
              "fontSize": "",
              "fontFamily": "",
              "fontWeight": "",
              "textDecoration": "",
              "textTransform": "uppercase",
              "color": "#f01202",
              "wordWrap": "break-word"
          },
          "others": {
              "bootstrapGridClass": ""
          },
          "conditional": {
              "show": null,
              "when": null,
              "eq": ""
          },
          "type": "label"
      },
      "configurations": [
          {
              "show": true,
              "title": "Display",
              "template": "componentBuilder/components/label/settings.html",
              "$$hashKey": "object:6326"
          },
          {
              "title": "Styles",
              "template": "componentBuilder/components/label/styles.html",
              "$$hashKey": "object:6327"
          },
          {
              "title": "Conditions",
              "template": "componentBuilder/components/common/conditional.html",
              "$$hashKey": "object:6328"
          }
      ],
      "componentId": "component-25580"
    },
    {
        "title": "BMI",
        "settings":{
            "properties":{
                "label":"Body Mass Index"
            }
        }
    },
    {
        "title": "Image",
        "settings":{
            "properties":{
                "label":"DateTime"
            },
        "type":"file"
        }
        
    },
    {
      "title": "TableEdit",
      "template": "componentBuilder/components/table-edit.html",
      "icon": "fa fa-table",
      "settings": {
          "icon": true,
          "inputType": "table-edit",
          "inputMask": "",
          "key": "table-edit",
          "isModelNeeded": true,
          "properties": {
              "label": "Table",
              "name": "table-edit35358",
              "id": "table-edit35358",
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
              "model": "table-edit35358",
              "icon": true,
              "hidden": false,
              "hideLabel": false,
              "bootstrapClass": "",
              "options": [
                  {
                      "key": 1,
                      "value": "Field 1",
                      "isMandatory": false,
                      "$$hashKey": "object:8470"
                  },
                  {
                      "key": 2,
                      "value": "Field 2",
                      "isMandatory": false,
                      "$$hashKey": "object:8471"
                  },
                  {
                      "key": 3,
                      "value": "Field 3",
                      "isMandatory": false,
                      "$$hashKey": "object:8472"
                  },
                  {
                      "key": 4,
                      "value": "Field 4",
                      "isMandatory": false,
                      "$$hashKey": "object:8473"
                  }
              ]
          },
          "labelStyles": {
              "color": "#fffff",
              "fontSize": "13px",
              "fontWeight": "400",
              "backgroundColor": "",
              "marginLeft": "5px",
              "marginRight": "",
              "marginTop": "",
              "marginBottom": "",
              "wordWrap": "break-word",
              "textAlign": "left"
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
              "fontSize": "12px",
              "fontFamily": "Arial",
              "fontWeight": "700",
              "color": "#333333",
              "background": "rgb(240,238,239)",
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
              "backgroundColor": "none",
              "customCss": "",
              "customClass": "",
              "marginLeft": "5px",
              "marginRight": "5px",
              "marginTop": "5px",
              "marginBottom": "5px",
              "paddingLeft": "",
              "paddingRight": "",
              "paddingTop": "",
              "paddingBottom": "",
              "display": "",
              "width": "90%"
          },
          "tableStyles": {
              "marginLeft": "20px",
              "marginRight": "",
              "marginTop": "5px",
              "marginBottom": "15px",
              "width": "90%",
              "border-collapse":"fixed",
              
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
              "template": "componentBuilder/components/table-edit/settings.html",
              "$$hashKey": "object:8384"
          },
          {
              "title": "Styles-Label",
              "template": "componentBuilder/components/table-edit/stylesLabel.html",
              "$$hashKey": "object:8385"
          },
          {
              "title": "Styles-table-Header",
              "template": "componentBuilder/components/table-edit/headerStyles.html",
              "$$hashKey": "object:8386",
              "show": false
          },
          {
              "title": "Styles-table",
              "template": "componentBuilder/components/table-edit/tableStyles.html",
              "$$hashKey": "object:8387",
              "show": false
          },
          {
              "title": "Conditions",
              "template": "componentBuilder/components/common/conditional.html",
              "$$hashKey": "object:8388"
          }
      ],
      "componentId": "component-73944"
      },
      {
        "title": "Horizontal Tabs",
        "settings":{
            "properties":{
                "label":""
            },
        "type":""
        }
        
    },
    {
      "title": "Vertical Tabs",
      "settings":{
          "properties":{
              "label":""
          },
      "type":""
      }
      
  },
  {
    "title": "Panel",
    "settings":{
        "properties":{
            "label":""
        },
    "type":""
    }
    
  },
  {
    "title": "Field Set",
    "settings":{
        "properties":{
            "label":""
        },
    "type":""
    }
    
  },
  {
    "title": "Help",
    "settings":{
        "properties":{
            "label":""
        },
    "type":""
    }
    
  },
  {
    "title": "Button",
    "settings":{
        "properties":{
            "label":""
        },
    "type":""
    }
    
  },
  {
    "title": "Check Box",
    "template": "componentBuilder/components/checkBox.html",
    "icon": "fa fa-check-square-o",
    "settings": {
        "icon": true,
        "inputType": "checkbox",
        "inputMask": "",
        "key": "checkBox",
        "isModelNeeded": true,
        "properties": {
            "label": "Option",
            "name": "checkBox21155",
            "id": "checkBox21155",
            "labelSize": "",
            "labelColor": "",
            "defaultValue": false,
            "readonly": false,
            "disabled": false,
            "model": "checkBox21155",
            "hidden": true,
            "hideLabel": false,
            "identificationLabel": "",
            "bootstrapClass": "",
            "checkedAction": "",
            "unCheckedAction": ""
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
        "others": {
            "bootstrapGridClass": ""
        },
        "validations": {
            "required": false
        },
        "conditional": {
            "show": null,
            "when": null,
            "eq": ""
        },
        "type": "checkBox"
    },
    "configurations": [
        {
            "show": true,
            "title": "Display",
            "template": "componentBuilder/components/checkBox/settings.html",
            "$$hashKey": "object:6706"
        },
        {
            "title": "Styles",
            "template": "componentBuilder/components/checkBox/styles.html",
            "$$hashKey": "object:6707"
        },
        {
            "title": "Validations",
            "template": "componentBuilder/components/checkBox/validations.html",
            "$$hashKey": "object:6708"
        },
        {
            "title": "Conditions",
            "template": "componentBuilder/components/common/conditional.html",
            "$$hashKey": "object:6709"
        }
    ],
    "componentId": "component-52793"
  },
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
            "name": "radioButton38613",
            "id": "radioButton38613",
            "value": "",
            "color": "",
            "defaultValue": false,
            "readonly": false,
            "disabled": false,
            "click": false,
            "show": true,
            "inline": false,
            "model": "radioButton38613",
            "identificationLabel": "",
            "icon": true,
            "hidden": false,
            "hideLabel": false,
            "bootstrapClass": "",
            "options": [
                {
                    "key": 1,
                    "value": "option 1",
                    "$$hashKey": "object:6107"
                },
                {
                    "key": 2,
                    "value": "option 2",
                    "$$hashKey": "object:6108"
                },
                {
                    "key": 3,
                    "value": "option 3",
                    "$$hashKey": "object:6109"
                },
                {
                    "key": 4,
                    "value": "option 4",
                    "$$hashKey": "object:6110"
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
    "configurations": [
        {
            "show": true,
            "title": "Display",
            "template": "componentBuilder/components/radioButton/settings.html",
            "$$hashKey": "object:6031"
        },
        {
            "title": "Styles",
            "template": "componentBuilder/components/radioButton/styles.html",
            "$$hashKey": "object:6032"
        },
        {
            "title": "Validations",
            "template": "componentBuilder/components/radioButton/validations.html",
            "$$hashKey": "object:6033"
        },
        {
            "title": "Conditions",
            "template": "componentBuilder/components/common/conditional.html",
            "$$hashKey": "object:6034"
        }
    ],
    "componentId": "component-36976"
    },
    {
        "title": "Multi Check",
        "template": "componentBuilder/components/multiSelectCheckbox.html",
        "icon": "fa fa-check-square-o",
        "settings": {
            "icon": true,
            "inputType": "checkbox",
            "inputMask": "",
            "key": "multiSelectCheckbox",
            "isModelNeeded": true,
            "properties": {
                "label": "Check Box Text",
                "name": "multiSelectCheckbox86027",
                "id": "multiSelectCheckbox86027",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "multiSelectCheckbox86027",
                "icon": true,
                "hidden": false,
                "hideLabel": false,
                "bootstrapClass": "",
                "others": false,
                "isOthersMandatory": false,
                "identificationLabel": "",
                "options": [
                    {
                        "key": 1,
                        "value": "option 1",
                        "$$hashKey": "object:6232"
                    },
                    {
                        "key": 2,
                        "value": "option 2",
                        "$$hashKey": "object:6233"
                    },
                    {
                        "key": 3,
                        "value": "option 3",
                        "$$hashKey": "object:6234"
                    },
                    {
                        "key": 4,
                        "value": "option 4",
                        "$$hashKey": "object:6235"
                    }
                ]
            },
            "labelStyles": {
                "lableColor": "",
                "labelSize": ""
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
                "bootstrapGridClass": "",
                "wordWrap": "break-word"
            },
            "othersStyles": {
                "width": 100,
                "marginLeft": 10,
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "display": "inline"
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
            "type": "multiSelectCheckbox"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "componentBuilder/components/multiSelectCheckbox/settings.html",
                "$$hashKey": "object:6123"
            },
            {
                "title": "Styles-Label",
                "template": "componentBuilder/components/multiSelectCheckbox/stylesLabel.html",
                "$$hashKey": "object:6124"
            },
            {
                "title": "Styles-checkbox",
                "template": "componentBuilder/components/multiSelectCheckbox/styles.html",
                "$$hashKey": "object:6125"
            },
            {
                "title": "Styles-others",
                "template": "componentBuilder/components/multiSelectCheckbox/othersStyles.html",
                "$$hashKey": "object:6126"
            },
            {
                "title": "Conditions",
                "template": "componentBuilder/components/common/conditional.html",
                "$$hashKey": "object:6127"
            }
        ],
        "componentId": "component-30724"
    },{
        "title": "Data Flow",
        "template": "app/common/builderControls/dataFlow/partials/dataFlow.html",
        "icon": "fa fa-circle",
        "settings": {
            "icon": true,
            "tableView": true,
            "inputType": "dataFlow",
            "backupType": "dataFlow",
            "inputMask": "",
            "key": "dataFlow",
            "hide": false,
            "isModelNeeded": true,
            "properties": {
                "label": "Text",
                "labelSize": "",
                "labelColor": "",
                "placeholder": "Enter text",
                "name": "dataFlow14519",
                "id": "dataFlow14519",
                "rows": "",
                "model": "dataFlow",
                "defaultValue": "",
                "readonly": false,
                "disabled": false,
                "hidden": false,
                "hideLabel": false,
                "isMicNeeded": false,
                "bootstrapClass": "",
                "identificationLabel": "",
                "mode": "R"
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
                "fontSize": "13px",
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
            "type": "dataFlow"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "app/common/builderControls/dataFlow/partials/settings.html",
                "$$hashKey": "object:7709"
            },
            {
                "title": "Styles",
                "template": "app/common/builderControls/dataFlow/partials/styles.html",
                "$$hashKey": "object:7710"
            },
            {
                "title": "Validations",
                "template": "app/common/builderControls/dataFlow/partials/validations.html",
                "$$hashKey": "object:7711"
            },
            {
                "title": "Conditions",
                "template": "componentBuilder/components/common/conditional.html",
                "$$hashKey": "object:7712"
            }
        ],
        "componentId": "component-26207"
    },
    {
      "title": "Accordian",
      "settings":{
          "properties":{
              "label":""
          },
      "type":""
      }
      
    },
    {
        "title": "Score Combo",
        "template": "componentBuilder/components/scoreSelectCombo.html",
        "icon": "fa fa-caret-square-o-down",
        "settings": {
            "icon": true,
            "inputType": "select",
            "inputMask": "",
            "key": "select",
            "isModelNeeded": true,
            "isScoreModelNeeded": true,
            "properties": {
                "label": "Select",
                "name": "select103784",
                "id": "select103784",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "isScoreDisabled": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "select103784",
                "scoreModel": "select103784-score",
                "identificationLabel": "",
                "scoreIdentificationLabel": "",
                "icon": true,
                "hidden": true,
                "hideLabel": false,
                "hideScore": false,
                "bootstrapClass": "",
                "options": [
                    {
                        "key": 1,
                        "value": "option 1",
                        "score": "1",
                        "$$hashKey": "object:16244"
                    },
                    {
                        "key": 2,
                        "value": "option 2",
                        "score": "2",
                        "$$hashKey": "object:16245"
                    },
                    {
                        "key": 3,
                        "value": "option 3",
                        "score": "3",
                        "$$hashKey": "object:16246"
                    },
                    {
                        "key": 4,
                        "value": "option 4",
                        "score": "4",
                        "$$hashKey": "object:16247"
                    }
                ]
            },
            "labelStyles": {
                "color": "",
                "fontSize": "13px",
                "fontWeight": "",
                "backgroundColor": "",
                "marginLeft": "2px",
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "wordWrap": "break-word"
            },
            "divStyles": {
                "color": "",
                "backgroundColor": "",
                "customCss": "",
                "customClass": "",
                "marginLeft": "5px",
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": "",
                "borderColor": "",
                "display": "inline",
                "width": "79%",
                "float": "left"
            },
            "scoreStyles": {
                "width": "19%",
                "marginLeft": "",
                "marginRight": "",
                "marginTop": "",
                "marginBottom": "",
                "display": "block"
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
            "type": "scoreSelectCombo"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "componentBuilder/components/scoreSelectCombo/settings.html",
                "$$hashKey": "object:16116"
            },
            {
                "title": "Styles - Label",
                "template": "componentBuilder/components/scoreSelectCombo/labelStyles.html",
                "$$hashKey": "object:16117"
            },
            {
                "title": "Styles - List",
                "template": "componentBuilder/components/scoreSelectCombo/listStyles.html",
                "$$hashKey": "object:16118"
            },
            {
                "title": "Styles - Score",
                "template": "componentBuilder/components/scoreSelectCombo/stylesScore.html",
                "$$hashKey": "object:16119"
            },
            {
                "title": "Validations",
                "template": "componentBuilder/components/scoreSelectCombo/validations.html",
                "$$hashKey": "object:16120"
            },
            {
                "title": "Conditions",
                "template": "componentBuilder/components/common/conditional.html",
                "$$hashKey": "object:16121"
            }
        ],
        "componentId": "component-67583"
    },
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
                "name": "select69701",
                "id": "select69701",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "select69701",
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
                "fontSize": "13px",
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
                "marginLeft": "5px",
                "marginRight": 5,
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": "",
                "borderColor": "",
                "display": "",
                "width": "98%"
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
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "componentBuilder/components/selectCombo/settings_new.html",
                "$$hashKey": "object:17141"
            },
            {
                "title": "Data Selection",
                "template": "componentBuilder/components/selectCombo/data.html",
                "$$hashKey": "object:17142",
                "show": false
            },
            {
                "title": "Styles",
                "template": "componentBuilder/components/selectCombo/styles.html",
                "$$hashKey": "object:17143"
            },
            {
                "title": "Validations",
                "template": "componentBuilder/components/selectCombo/validations.html",
                "$$hashKey": "object:17144"
            },
            {
                "title": "Conditions",
                "template": "componentBuilder/components/common/conditional.html",
                "$$hashKey": "object:17145"
            }
        ],
        "componentId": "component-33337"
    },
    {
        "title": "Container",
        "template": "componentBuilder/components/container.html",
        "icon": "fa fa-folder-open",
        "settings": {
            "icon": true,
            "inputType": "container",
            "inputMask": "",
            "key": "container",
            "properties": {
                "hidden": false,
                "hideLabel": false,
                "json": []
            },
            "divStyles": {
                "height": 100,
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
                "border": "",
                "borderColor": "",
                "borderStyle": "",
                "borderWidth": "",
                "display": "",
                "width": "100%"
            },
            "labelStyles": {
                "color": "",
                "fontSize": "",
                "wordWrap": "break-word"
            },
            "validations": {
                "required": false,
                "maxLength": "",
                "minLength": "",
                "pattern": ""
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
            "type": "container"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "componentBuilder/components/container/settings.html",
                "$$hashKey": "object:18126"
            },
            {
                "title": "Styles",
                "template": "componentBuilder/components/container/styles.html",
                "$$hashKey": "object:18127"
            },
            {
                "title": "Conditions",
                "template": "componentBuilder/components/common/conditional.html",
                "$$hashKey": "object:18128"
            }
        ],
        "componentId": "component-49045"
    },
    {
        "title": "Assessment Score",
        "template": "app/common/builderControls/assessmentScore/partials/assessmentScore.html",
        "icon": "fa fa-circle",
        "settings": {
            "icon": true,
            "inputType": "assessmentScore",
            "inputMask": "",
            "key": "assessmentScore",
            "isModelNeeded": true,
            "properties": {
                "label": "Assessment Score",
                "name": "assessmentScore103274",
                "id": "assessmentScore103274",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "assessmentScore103274",
                "icon": true,
                "hidden": false,
                "hideLabel": false,
                "bootstrapClass": "",
                "assessmentCode": "BRADEN_SCALE"
            },
            "divStyles": {
                "marginLeft": "5px",
                "marginRight": 5,
                "marginTop": "1px",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": ""
            },
            "type": "assessmentScore",
            "labelStyles": {
                "fontWeight": "bold",
                "fontSize": "13px",

            }
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "app/common/builderControls/assessmentScore/partials/settings.html",
                "$$hashKey": "object:5899"
            },
            {
                "title": "Styles",
                "template": "app/common/builderControls/assessmentScore/partials/styles.html",
                "$$hashKey": "object:5900",
                "show": false
            }
        ],
        "componentId": "component-99079"
    },
    {
        "title": "NOK Combo",
        "template": "app/common/builderControls/nokCombo/partials/nokCombo.html",
        "icon": "fa fa-user",
        "settings": {
            "icon": true,
            "inputType": "select",
            "inputMask": "",
            "key": "nokCombo",
            "isModelNeeded": true,
            "properties": {
                "label": "NOK Combo",
                "name": "nokCombo87734",
                "id": "nokCombo87734",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": false,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "nokCombo",
                "icon": true,
                "hidden": false,
                "hideLabel": false,
                "bootstrapClass": ""
            },
            "divStyles": {
                "marginLeft": "",
                "marginRight": 5,
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": ""
            },
            "labelStyles": {
                "fontWeight": "",
                "fontSize": "13px",

            },
            "type": "nokCombo"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "app/common/builderControls/nokCombo/partials/settings.html",
                "$$hashKey": "object:8452"
            },
            {
                "title": "Styles",
                "template": "app/common/builderControls/nokCombo/partials/styles.html",
                "$$hashKey": "object:8453",
                "show": false
            }
        ],
        "componentId": "component-11006"
    },
    {
        "title": "RISKSCORE",
        "template": "app/common/builderControls/pressureAreaCount/partials/riskCount.html",
        "icon": "fa fa-user",
        "settings": {
            "icon": true,
            "inputType": "text",
            "inputMask": "",
            "key": "riskScore",
            "isModelNeeded": true,
            "properties": {
                "label": "Signature",
                "name": "riskScore41637",
                "id": "riskScore41637",
                "value": "",
                "labelSize": "",
                "labelColor": "",
                "defaultValue": false,
                "readonly": true,
                "disabled": false,
                "click": false,
                "show": true,
                "inline": false,
                "model": "risk_count",
                "icon": true,
                "hidden": false,
                "hideLabel": false,
                "bootstrapClass": ""
            },
            "divStyles": {
                "marginLeft": "",
                "marginRight": 5,
                "marginTop": "",
                "marginBottom": "",
                "paddingLeft": "",
                "paddingRight": "",
                "paddingTop": "",
                "paddingBottom": ""
            },
            "labelStyles": {
                "fontWeight": "",
                "fontSize": "13px",

            },
            "type": "riskCount"
        },
        "configurations": [
            {
                "show": true,
                "title": "Display",
                "template": "app/common/builderControls/pressureAreaCount/partials/settings.html",
                "$$hashKey": "object:8755"
            },
            {
                "title": "Styles",
                "template": "app/common/builderControls/pressureAreaCount/partials/styles.html",
                "$$hashKey": "object:8756",
                "show": true
            }
        ],
        "componentId": "component-54314"
    }
]
