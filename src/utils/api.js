//import {getStore} from "../src/store/config_store"

const baseurl = 'http://rbn.sairoses.com/Front//index.php/API';


const API = {
    getApi: async (url) => {
//        const state = getStore().getState();
  //      let accessToken = state.acess_token.token
        return fetch(baseurl + '/' + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "multipart/form-data"
               // 'Authorisation': `Token ${accessToken}`
            }
        })
            .catch((error) => {
                return {error: true, errMsg: error.toString(), errorResp: error};
            })
    }, postApi: async (url, formdata) => {
       // const state = getStore().getState();
      //  let accessToken = state.acess_token.token;
        const fetchConfig = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "multipart/form-data"
              //  'Authorisation': `Token ${accessToken}`
            },
            body: formdata
        };
        return fetch(baseurl + '/' + url, fetchConfig)
           .catch(error => {
                return error;
            })

    }, putApi: async (url, formdata) => {
       // const state = getStore().getState();
        //let accessToken = state.acess_token.token;
        const fetchConfig = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                "Content-Type": "multipart/form-data"
              //  'Authorisation': `Token ${accessToken}`
            },
            body: formdata
        };
        return fetch(baseurl + '/' + url, fetchConfig)
            .then(res => {
                return res.json()
            }).catch(error => {
                return error;
            })

    },
    deleteApi: async (url) => {
       // const state = getStore().getState();
       // let accessToken = state.acess_token.token
        return fetch(baseurl + '/' + url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Content-Type": "multipart/form-data"
             //   'Authorisation': `Token ${accessToken}`
            }
        }).then((res) => {
            return res.json();
        })
            .catch((error) => {
                return {error: true, errMsg: error.toString(), errorResp: error};
            })
    }

}

export default API;
