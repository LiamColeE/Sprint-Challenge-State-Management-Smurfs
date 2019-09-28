import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const FAILED_CALL = "FAILED_CALL"

export function addSmurf(smurf) {
    return function(dispatch) {
        return axios.post("http://localhost:3333/smurfs", smurf)
        .then((res)=>{
            dispatch({ type: ADD_SMURF, payload: {result: res.data, smurf: smurf} });
        })
        .catch((err) => {
            console.log(err)
            return {
                type: FAILED_CALL,
                payload: err
            }
        });
    }
}

export function removeSmurf(smurf) {
    return function(dispatch) {
        return axios.delete(`http://localhost:3333/smurfs/${smurf}`, smurf)
        .then((res)=>{
            dispatch({ type: REMOVE_SMURF, payload: {result: res.data, smurf: smurf} });
        })
        .catch((err) => {
            console.log(err)
            return {
                type: FAILED_CALL,
                payload: err
            }
        });
    }
}

export function getSmurfs(){
    return function(dispatch) {
        return axios.get("http://localhost:3333/smurfs")
        .then((res)=>{
            dispatch({ type: GET_SMURFS, payload: res.data });
        })
        .catch((err) => {
            console.log(err)
            return {
                type: FAILED_CALL,
                payload: err
            }
        });
    }
}