export const apiConstants = {
    SAVE_UPLOAD_DOCUMENT: {
        URL: "formData/uploadDocument",
        METHOD: "POST"
    },
    GET_DOCUMENT_DETAILS: {
        URL: "formData/downloadDocument/",
        METHOD: "GET"
    },
    SEARCH_SAVED_DOCUMENT: {
        URL: "formData/search",
        METHOD: "POST"
    },
   
    SAVE_CONTROL:{
        URL:"formControlData",
        METHOD:"POST"
    },
    SAVE_CONTROL_AUTO_COMPLETE:{
        URL:"formControlData/autoComplete",
        METHOD:"GET"
    },
    GET_CUSTOM_ELEMENTS: {
        URL: "formControlData/search",
        METHOD: "POST"
    },
    GET_SAVED_ELEMENTS: {
        URL: "formControlData/autoComplete",
        METHOD: "GET"
    }
}