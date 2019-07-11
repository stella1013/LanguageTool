import { FormState } from "../types";

export const GET_DATA = 'GET_DATA';



interface getDataAction {
    type: typeof GET_DATA
    payload: FormState
    
};
export type DefaultActionTypes =  getDataAction;