import {
    TRIGGER_REGISTER,
    TRIGGER_REGISTER_SUCCESS,
    TRIGGER_REGISTER_FAILED,
    TRIGGER_LOGIN,
    TRIGGER_LOGIN_SUCCESS,
    TRIGGER_LOGIN_FAILED,
    TRIGGER_LOGOUT,
    TRIGGER_FORGOT,
    TRIGGER_FORGOT_SUCCESS,
    TRIGGER_FORGOT_FAILED,
    TRIGGER_COUNTRY,
    TRIGGER_COUNTRY_SUCCESS,
    TRIGGER_COUNTRY_FAILED,
    TRIGGER_CITY,
    TRIGGER_CITY_SUCCESS,
    TRIGGER_CITY_FAILED,
    TRIGGER_CATEGORY,
    TRIGGER_CATEGORY_SUCCESS,
    TRIGGER_CATEGORY_FAILED,
    TRIGGER_PRODUCT,
    TRIGGER_PRODUCT_SUCCESS,
    TRIGGER_PRODUCT_FAILED,
    TRIGGER_UNIT,
    TRIGGER_UNIT_SUCCESS,
    TRIGGER_UNIT_FAILED,
    TRIGGER_SEARCH,
    TRIGGER_SEARCH_SUCCESS,
    TRIGGER_SEARCH_FAILED,
    TRIGGER_PROFILE,
    TRIGGER_PROFILE_SUCCESS,
    TRIGGER_PROFILE_FAILED,
    TRIGGER_CUSTOM,
    TRIGGER_CUSTOM_SUCCESS,
    TRIGGER_CUSTOM_FAILED,
    TRIGGER_FORM1,
    TRIGGER_FORM2,
    TRIGGER_FORM3

} from '../actions'

// import { persistor } from '../../src/store';

const initialState = {
    registerObj: {
        loading: false,
        data: [],
        error: null
    },
    loginObj: {
        loading: false,
        data: [],
        error: null
    },
    isLoggedIn: false,
    forgotObj: {
        loading: false,
        data: [],
        error: null
    },
    countryObj: {
        loading: false,
        data: [],
        error: null
    },
    cityObj: {
        loading: false,
        data: [],
        error: null
    },
    categoryObj: {
        loading: false,
        data: [],
        error: null
    },
    productObj: {
        loading: false,
        data: [],
        error: null
    },
    unitObj: {
        loading: false,
        data: [],
        error: null
    },
    searchObj: {
        loading: false,
        data: [],
        error: null
    },
    profileObj: {
        loading: false,
        data: [],
        error: null
    },
    customObj: {
        loading: false,
        data: [],
        error: null
    },
    form1Obj: {
        data: []
    },
    form2Obj: {
        data: []
    },
    form3Obj: {
        data: []
    }
}

const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case TRIGGER_REGISTER:
            return {
                ...state,
                registerObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_REGISTER_SUCCESS:
            return {
                ...state,
                registerObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                },
                isLoggedIn: true
            }
        case TRIGGER_REGISTER_FAILED:
            return {
                ...state,
                registerObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_LOGIN:
            return {
                ...state,
                loginObj: {
                    loading: true,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_LOGIN_SUCCESS:
            return {
                ...state,
                loginObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                },
                isLoggedIn: true
            }
        case TRIGGER_LOGIN_FAILED:
            return {
                ...state,
                loginObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_LOGOUT:
            return {
                ...state,
                loginObj: {
                    loading: false,
                    data: [],
                    error: null
                },
                isLoggedIn: false
            }
        case TRIGGER_FORGOT:
            return {
                ...state,
                forgotObj: {
                    loading: true,
                    data: [],
                    error: null
                },
            }
        case TRIGGER_FORGOT_SUCCESS:
            return {
                ...state,
                forgotObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                },
            }
        case TRIGGER_FORGOT_FAILED:
            return {
                ...state,
                forgotObj: {
                    loading: false,
                    data: [],
                    error: action.error
                },
            }
        case TRIGGER_COUNTRY:
            return {
                ...state,
                countryObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_COUNTRY_SUCCESS:
            return {
                ...state,
                countryObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_COUNTRY_FAILED:
            return {
                ...state,
                countryObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_CITY:
            return {
                ...state,
                cityObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_CITY_SUCCESS:
            return {
                ...state,
                cityObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_CITY_FAILED:
            return {
                ...state,
                cityObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_CATEGORY:
            return {
                ...state,
                categoryObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_CATEGORY_FAILED:
            return {
                ...state,
                categoryObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_PRODUCT:
            return {
                ...state,
                productObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_PRODUCT_SUCCESS:
            return {
                ...state,
                productObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_PRODUCT_FAILED:
            return {
                ...state,
                productObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_UNIT:
            return {
                ...state,
                unitObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_UNIT_SUCCESS:
            return {
                ...state,
                unitObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_UNIT_FAILED:
            return {
                ...state,
                unitObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_SEARCH:
            return {
                ...state,
                searchObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_SEARCH_SUCCESS:
            return {
                ...state,
                searchObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_SEARCH_FAILED:
            return {
                ...state,
                searchObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_PROFILE:
            return {
                ...state,
                profileObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_PROFILE_SUCCESS:
            return {
                ...state,
                profileObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_PROFILE_FAILED:
            return {
                ...state,
                profileObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_CUSTOM:
            return {
                ...state,
                customObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_CUSTOM_SUCCESS:
            return {
                ...state,
                customObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case TRIGGER_CUSTOM_FAILED:
            return {
                ...state,
                customObj: {
                    loading: false,
                    data: [],
                    error: action.error
                }
            }
        case TRIGGER_FORM1:
            return {
                ...state,
                form1Obj: {
                    data: action.payload
                }
            }
        case TRIGGER_FORM2:
            return {
                ...state,
                form2Obj: {
                    data: action.payload
                }
            }
        case TRIGGER_FORM3:
            return {
                ...state,
                form3Obj: {
                    data: action.payload
                }
            }
        default:
            return state
    }
}

export default authReducer;