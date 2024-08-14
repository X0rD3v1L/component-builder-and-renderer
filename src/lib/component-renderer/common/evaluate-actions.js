import store from "../store";
import { saveData } from "../actions";
export const evaluateActions = (data, id) =>{
    // console.log(data,'--data--data')
    let actionSequence = data.includes('\n')?data.split('\n'):[data]
    const mapObj = {
        'data.': '',
    }
    actionSequence.map((actions) => {
        if(actions){
        actions = actions.replace(/\b(?:data.)\b/gi, matched => mapObj[matched])
        let splittedObj = actions.includes(';')?actions.split(';')[0]:actions
    
        let keyValues = splittedObj.split('=')
  
        const value = keyValues[1]!="''" ? (keyValues[1]): ''
        store.dispatch(saveData({ [keyValues[0]]: value }, id))
        }
    })
}