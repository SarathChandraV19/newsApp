import { formInputModel } from "../util/DataModel";

export const fetchSuccess = (payload: any) => ({ type: 'FETCH_SUCCESSFUL', payload });
export const fetchCoronaNews = (payload: formInputModel) => ({ type: 'FETCH_CORONA_NEWS', payload });