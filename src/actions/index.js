export const ADDITION = 'ADDITION'
export const SUBSTRACTION = 'SUBSTRACTION'
export const DIVIDATION = 'DIVIDATION'
export const MULTIPLICATION = 'MULTIPLICATION'
export const SHOWTEXT = 'SHOWTEXT'
export const LANGUAGEDATA = 'LANG_DATA'
export * from './AuthAction'

export function additionOfTwoNumbers(obj) {
    return {
        type: ADDITION,
        payload: obj
    }
}

export function substractionOfTwoNumbers(obj) {
    return {
        type: SUBSTRACTION,
        payload: obj
    }
}

export function dividationOfTwoNumbers(obj) {
    return {
        type: DIVIDATION,
        payload: obj
    }
}

export function multiplicationOfTwoNumbers(obj) {
    return {
        type: MULTIPLICATION,
        payload: obj
    }
}

export function showTextOfTwo(text) {
    return {
        type: SHOWTEXT,
        payload: text
    }
}

export function selectLanguage(val) {
    return {
        type: LANGUAGEDATA,
        payload: val
    }
}
