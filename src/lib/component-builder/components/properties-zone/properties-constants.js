export const formUIElements = {
    "checkBox" : {
        "Display":[
            {"label":"Label","type":"text", "name":"label", "jsonProperty":"properties"},
            {"label":"Default Value","type":"text", "name":"defaultValue", "jsonProperty":"properties"},
            {"label":"Identification Label","type":"text", "name":"identificationLabel", "jsonProperty":"properties"},
            {"label":"Key","type":"text","name":"model", "jsonProperty":"properties"},
            {"label":"Size","type":"select","name":"bootstrapGridClass", "jsonProperty":"others","dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"Hide Label","type":"checkbox", "name":"hideLabel", "jsonProperty":"properties"},
            {"label":"Is Disabled","type":"checkbox", "name":"disabled", "jsonProperty":"properties"},
            {"label":"Is ReadOnly","type":"checkbox", "name":"readonly", "jsonProperty":"properties"},
            {"label":"Checked Action","type":"textarea","name":"checkedAction","jsonProperty":"properties"},
            {"label":"Unchecked Action","type":"textarea","name":"unCheckedAction","jsonProperty":"properties"}
        ],
        "Styles":[
            {"label":"Text Align","type":"select", "name":"textAlign", "jsonProperty":"styles","dropdownOptions":["center","right","left"]},
            {"label":"Text Color","type":"color","name":"color", "jsonProperty":"styles"},
            {"label":"Font Size","type":"number", "name":"fontSize", "jsonProperty":"styles"},
            {"label":"Font Weight","type":"select", "name":"fontWeight", "jsonProperty":"styles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Font Family","type":"select", "name":"fontFamily", "jsonProperty":"styles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Background Color","type":"color","name":"backgroundColor", "jsonProperty":"styles"},
            {"label":"Margin Left","type":"number", "name":"marginLeft", "jsonProperty":"styles"},
            {"label":"Margin Right","type":"number", "name":"marginRight", "jsonProperty":"styles"},
            {"label":"Margin Top","type":"number", "name":"marginTop", "jsonProperty":"styles"},
            {"label":"Margin Bottom","type":"number", "name":"marginBottom", "jsonProperty":"styles"},
            {"label":"Padding Right","type":"number", "name":"paddingRight", "jsonProperty":"styles"},
            {"label":"Padding Left","type":"number", "name":"paddingLeft", "jsonProperty":"styles"},
            {"label":"Padding Top","type":"number", "name":"paddingTop", "jsonProperty":"styles"},
            {"label":"Padding Bottom","type":"number", "name":"paddingBottom", "jsonProperty":"styles"},
            {"label":"Font Style","type":"select", "name":"fontStyle", "jsonProperty":"styles","dropdownOptions":["normal","italic","oblique"]},
            {"label":"Width","type":"number", "name":"width", "jsonProperty":"styles"}
        ],
        "Validations":[
            {"label":"Is Required", "type":"checkbox", "name":"required", "jsonProperty":"validations"},
        ]
    },
    "textarea":{
        "Display":[
            {"label":"Label","type":"text", "name":"label", "jsonProperty":"properties"},
            {"label":"Rows","type":"number", "name":"rows", "jsonProperty":"properties"},
            {"label":"Placeholder","type":"text", "name":"placeholder", "jsonProperty":"properties"},
            {"label":"Default Value","type":"text", "name":"defaultValue", "jsonProperty":"properties"},
            {"label":"Key","type":"text","name":"model", "jsonProperty":"properties"},
            {"label":"identification Label","type":"text", "name":"identificationLabel", "jsonProperty":"properties"},
            {"label":"Size","type":"select","name":"bootstrapGridClass", "jsonProperty":"others","dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"Hide Label","type":"checkbox", "name":"hideLabel", "jsonProperty":"properties"},
            {"label":"Is Disabled","type":"checkbox", "name":"disabled", "jsonProperty":"properties"},
            {"label":"Is ReadOnly","type":"checkbox", "name":"readonly", "jsonProperty":"properties"},
            {"label":"Is Mic Needed","type":"checkbox", "name":"isMicNeeded", "jsonProperty":"properties"},
            {"label":"Is Hidden","type":"checkbox", "name":"hidden", "jsonProperty":"properties"}
        ],
        "Styles":[
            {"label":"Text Color","type":"color","name":"color", "jsonProperty":"styles"},
            {"label":"Label Color","type":"color","name":"color", "jsonProperty":"labelStyles"},
            {"label":"Label Size","type":"number", "name":"fontSize", "jsonProperty":"labelStyles"},
            {"label":"Label Weight","type":"select", "name":"fontWeight", "jsonProperty":"labelStyles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Background Color","type":"color","name":"backgroundColor", "jsonProperty":"styles"},
            {"label":"Border Color","type":"color","name":"borderColor", "jsonProperty":"styles"},
            {"label":"Margin Left","type":"number", "name":"marginLeft", "jsonProperty":"divStyles"},
            {"label":"Margin Right","type":"number", "name":"marginRight", "jsonProperty":"divStyles"},
            {"label":"Margin Top","type":"number", "name":"marginTop", "jsonProperty":"divStyles"},
            {"label":"Margin Bottom","type":"number", "name":"marginBottom", "jsonProperty":"divStyles"},
            {"label":"Padding Right","type":"number", "name":"paddingRight", "jsonProperty":"divStyles"},
            {"label":"Padding Left","type":"number", "name":"paddingLeft", "jsonProperty":"divStyles"},
            {"label":"Padding Top","type":"number", "name":"paddingTop", "jsonProperty":"divStyles"},
            {"label":"Padding Bottom","type":"number", "name":"paddingBottom", "jsonProperty":"divStyles"},
            {"label":"Height","type":"number", "name":"height", "jsonProperty":"styles"}
        ],
        "Validations":[
            {"label":"Minimum Length", "type":"number", "name":"minLength", "jsonProperty":"validations"},
            {"label":"Maximum Length", "type":"number", "name":"maxLength", "jsonProperty":"validations"},
            {"label":"Pattern", "type":"text", "name":"pattern", "jsonProperty":"validations"},
            {"label":"Is Required", "type":"checkbox", "name":"required", "jsonProperty":"validations"},
            {"label":"Required Character", "type":"text", "name":"requiredCharacter", "jsonProperty":"validations"},
        ]
    },
    "textfield":{
        "Display":[
            {"label":"Label","type":"text", "name":"label", "jsonProperty":"properties"},
            {"label":"Input Type","type":"select","name":"inputType","jsonProperty":"","dropdownOptions":["email","color","text","password"]},
            {"label":"Placeholder","type":"text", "name":"placeholder", "jsonProperty":"properties"},
            {"label":"Default Value","type":"text", "name":"defaultValue", "jsonProperty":"properties"},
            {"label":"Size","type":"select","name":"bootstrapGridClass", "jsonProperty":"others","dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"Key","type":"text","name":"model", "jsonProperty":"properties"},
            {"label":"identification Label","type":"text", "name":"identificationLabel", "jsonProperty":"properties"},
            {"label":"Hide Label","type":"checkbox", "name":"hideLabel", "jsonProperty":"properties"},
            {"label":"Is Disabled","type":"checkbox", "name":"disabled", "jsonProperty":"properties"},
            {"label":"Is ReadOnly","type":"checkbox", "name":"readonly", "jsonProperty":"properties"},
            {"label":"Is Mic Needed","type":"checkbox", "name":"isMicNeeded", "jsonProperty":"properties"},
            {"label":"Is Hidden","type":"checkbox", "name":"hidden", "jsonProperty":"properties"}
        ],
        "Styles":[
            {"label":"Text Color","type":"color","name":"color", "jsonProperty":"styles"},
            {"label":"Background Color","type":"color","name":"backgroundColor", "jsonProperty":"styles"},
            {"label":"Border Color","type":"color","name":"borderColor", "jsonProperty":"styles"},
            {"label":"Font Size","type":"select", "name":"fontSize", "jsonProperty":"styles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Font Weight","type":"select", "name":"fontWeight", "jsonProperty":"styles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Label Color","type":"color","name":"color", "jsonProperty":"labelStyles"},
            {"label":"Label Size","type":"number", "name":"fontSize", "jsonProperty":"labelStyles"},
            {"label":"Label Weight","type":"select", "name":"fontWeight", "jsonProperty":"labelStyles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Font Family","type":"select", "name":"fontFamily", "jsonProperty":"styles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Margin Left","type":"number", "name":"marginLeft", "jsonProperty":"divStyles"},
            {"label":"Margin Right","type":"number", "name":"marginRight", "jsonProperty":"divStyles"},
            {"label":"Margin Top","type":"number", "name":"marginTop", "jsonProperty":"divStyles"},
            {"label":"Margin Bottom","type":"number", "name":"marginBottom", "jsonProperty":"divStyles"},
            {"label":"Padding Right","type":"number", "name":"paddingRight", "jsonProperty":"divStyles"},
            {"label":"Padding Left","type":"number", "name":"paddingLeft", "jsonProperty":"divStyles"},
            {"label":"Padding Top","type":"number", "name":"paddingTop", "jsonProperty":"divStyles"},
            {"label":"Padding Bottom","type":"number", "name":"paddingBottom", "jsonProperty":"divStyles"},
            {"label":"Font Style","type":"select", "name":"fontStyle", "jsonProperty":"styles","dropdownOptions":["normal","italic","oblique"]}
        ],
        "Validations":[
            {"label":"Minimum Length", "type":"number", "name":"minLength", "jsonProperty":"validations"},
            {"label":"Maximum Length", "type":"number", "name":"maxLength", "jsonProperty":"validations"},
            {"label":"Pattern", "type":"text", "name":"pattern", "jsonProperty":"validations"},
            {"label":"Is Required", "type":"checkbox", "name":"required", "jsonProperty":"validations"},
            {"label":"Required Character", "type":"text", "name":"requiredCharacter", "jsonProperty":"validations"},
        ]
    },
    "radioButton":{
        "Display":[
            {"label":"Label","type":"text", "name":"label", "jsonProperty":"properties"},
            {"label":"Name","type":"text","name":"name", "jsonProperty":"properties"},
            {"label":"Key","type":"text","name":"model", "jsonProperty":"properties"},
            {"label":"Identification Label","type":"text", "name":"identificationLabel", "jsonProperty":"properties"},
            {"label":"Size","type":"select","name":"bootstrapGridClass", "jsonProperty":"others","dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"options","type":"options", "name":"options", "jsonProperty":"properties","optionsHeaders":["Value","Display"]},
            {"label":"Hide Label","type":"checkbox", "name":"hideLabel", "jsonProperty":"properties"},
            {"label":"Is Disabled","type":"checkbox", "name":"disabled", "jsonProperty":"properties"},
            {"label":"Is ReadOnly","type":"checkbox", "name":"readonly", "jsonProperty":"properties"}
        ],
        "Styles":[
            {"label":"Text Align","type":"select", "name":"textAlign", "jsonProperty":"styles","dropdownOptions":["center","right","left"]},
            {"label":"Label Size", "type":"select", "name":"bootstrapGridClass", "jsonProperty":"styles", "dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"Options Color","type":"color","name":"color", "jsonProperty":"styles"},
             {"label":"Options Size","type":"number", "name":"fontSize", "jsonProperty":"styles"},
            {"label":"Options Weight","type":"select", "name":"fontWeight", "jsonProperty":"styles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Font Family","type":"select", "name":"fontFamily", "jsonProperty":"styles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Label Color","type":"color","name":"color", "jsonProperty":"labelStyles"},
            {"label":"Label Size","type":"number","name":"fontSize", "jsonProperty":"labelStyles"},
            // {"label":"Label Size","type":"number", "name":"fontSize", "jsonProperty":"labelStyles"},
            {"label":"Label Weight","type":"select", "name":"fontWeight", "jsonProperty":"labelStyles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Font Family","type":"select", "name":"fontFamily", "jsonProperty":"styles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Background Color","type":"color","name":"backgroundColor", "jsonProperty":"styles"},
            {"label":"Margin Left","type":"number", "name":"marginLeft", "jsonProperty":"styles"},
            {"label":"Margin Right","type":"number", "name":"marginRight", "jsonProperty":"styles"},
            {"label":"Margin Top","type":"number", "name":"marginTop", "jsonProperty":"styles"},
            {"label":"Margin Bottom","type":"number", "name":"marginBottom", "jsonProperty":"styles"},
            {"label":"Padding Right","type":"number", "name":"paddingRight", "jsonProperty":"styles"},
            {"label":"Padding Left","type":"number", "name":"paddingLeft", "jsonProperty":"styles"},
            {"label":"Padding Top","type":"number", "name":"paddingTop", "jsonProperty":"styles"},
            {"label":"Padding Bottom","type":"number", "name":"paddingBottom", "jsonProperty":"styles"},
            {"label":"Font Style","type":"select","name":"fontStyle","jsonProperty":"styles","dropdownOptions":["normal","italic","oblique"]},
            {"label":"Align","type":"selectMulti","name":"width","jsonProperty":"styles","dropdownOptions":[{"key":"Inline","value":"100%"},{"key":"Normal","value":""}]}
         ],
         "Validations":[
            {"label":"Is Required", "type":"checkboxReq", "name":"required", "jsonProperty":"validations", "requiredCharacterObj":{"label":"Required Character", "type":"validationText", "name":"requiredCharacter", "jsonProperty":"validations"}, },
            
        ]

    },
    "selectCombo":{
        "Display":[
            {"label":"Label","type":"text", "name":"label", "jsonProperty":"properties"},
            {"label":"Name","type":"text","name":"name", "jsonProperty":"properties"},
            {"label":"ID","type":"text","name":"id", "jsonProperty":"properties"},
            {"label":"Key","type":"text","name":"model", "jsonProperty":"properties"},
            {"label":"identification Label","type":"text", "name":"identificationLabel", "jsonProperty":"properties"},
            {"label":"Size","type":"select","name":"bootstrapGridClass", "jsonProperty":"others","dropdownOptions":["1","2","3","4","5","6","7","8","9","10","11","12"]},
            {"label":"Hide Label","type":"checkbox", "name":"hideLabel", "jsonProperty":"properties"},
            {"label":"Is Disabled","type":"checkbox", "name":"disabled", "jsonProperty":"properties"},
            {"label":"Is ReadOnly","type":"checkbox", "name":"readonly", "jsonProperty":"properties"}
        ],
        "Data Selection":[
            {"label":"","type":"dataSelectionMultiSelect","name":"isFromAPI","jsonProperty":"properties"}
        ],
        "Styles":[
            {"label":"Text Align","type":"select", "name":"textAlign", "jsonProperty":"labelStyles","dropdownOptions":["center","right","left"]},
            {"label":"Text Color","type":"color","name":"color", "jsonProperty":"labelStyles"},
            {"label":"Font Size","type":"number", "name":"fontSize", "jsonProperty":"labelStyles"},
            {"label":"Font Weight","type":"select", "name":"fontWeight", "jsonProperty":"labelStyles","dropdownOptions":["normal","bold","bolder","lighter"]},
            {"label":"Font Family","type":"select", "name":"fontFamily", "jsonProperty":"labelStyles","dropdownOptions":["Georgia,serif","Times New Roman","Times","serif"]},
            {"label":"Background Color","type":"color","name":"backgroundColor", "jsonProperty":"divStyles"},
            {"label":"Border Color","type":"color","name":"borderColor", "jsonProperty":"divStyles"},
            {"label":"Margin Left","type":"number", "name":"marginLeft", "jsonProperty":"divStyles"},
            {"label":"Margin Right","type":"number", "name":"marginRight", "jsonProperty":"divStyles"},
            {"label":"Margin Top","type":"number", "name":"marginTop", "jsonProperty":"divStyles"},
            {"label":"Margin Bottom","type":"number", "name":"marginBottom", "jsonProperty":"divStyles"},
            {"label":"Padding Right","type":"number", "name":"paddingRight", "jsonProperty":"divStyles"},
            {"label":"Padding Left","type":"number", "name":"paddingLeft", "jsonProperty":"divStyles"},
            {"label":"Padding Top","type":"number", "name":"paddingTop", "jsonProperty":"divStyles"},
            {"label":"Padding Bottom","type":"number", "name":"paddingBottom", "jsonProperty":"divStyles"},
            {"label":"Font Style","type":"select", "name":"fontStyle", "jsonProperty":"labelStyles","dropdownOptions":["normal","italic","oblique"]},
            {"label":"Width","type":"number", "name":"width", "jsonProperty":"divStyles"}
        ],
        "Validations":[
            {"label":"Is Required", "type":"checkboxReq", "name":"required", "jsonProperty":"validations", "requiredCharacterObj":{"label":"Required Character", "type":"validationText", "name":"requiredCharacter", "jsonProperty":"validations"}, },
            
        ]
    }
}