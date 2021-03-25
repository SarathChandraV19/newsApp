import { INITIAL_FORM_VALUES } from "../util/Constants";
import { formInputModel } from "../util/DataModel";
export default (state:formInputModel = INITIAL_FORM_VALUES, action:any) => {
    switch (action.type) {
        case 'FETCH_CORONA_NEWS':
            return {...state, state: action.payload}
        default:
            return state;
    }
}