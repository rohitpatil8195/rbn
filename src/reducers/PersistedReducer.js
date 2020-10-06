const { act } = require("react-test-renderer")
import { ADDITION, SUBSTRACTION, DIVIDATION, MULTIPLICATION, SHOWTEXT, LANGUAGEDATA } from '../actions';

const intialState = {
    data: [],
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    lang: []
}

const persistedReducer = (state= intialState, action) => {
    switch (action.type) {
        case ADDITION:
            let addtion = action.payload.a + action.payload.b
            return {
                ...state,
                data: addtion
            }
        case SUBSTRACTION: 
            let substraction = action.payload.a - action.payload.b
            return {
                ...state,
                data1: substraction
            }
        case DIVIDATION: 
            let dividation = action.payload.a / action.payload.b
            return {
                ...state,
                data2: dividation
            }
        case MULTIPLICATION:
            let multiplication = action.payload.a * action.payload.b
            return {
                ...state,
                data3: multiplication
            }
        case SHOWTEXT:
            let showText = action.payload.c + action.payload.d
            return {
                ...state,   
                data4: showText
            }
        case LANGUAGEDATA:
            return {
                ...state,
                lang: action.payload.lang
            }
        default: 
            return state;
    }
}

export default persistedReducer;