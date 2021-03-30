import { ofType } from "redux-observable";
//import { combineEpics } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchSuccess } from "../actions";

interface ActionType {
    payload:{
        country:string,
        fromDate:string,
        toDate:string
    },
    type:string
}


export const coronaNewsEpic = (actions$:any) => actions$.pipe(
    ofType('FETCH_CORONA_NEWS'),
    mergeMap((action:ActionType) => {
        let url = `https://api.covid19api.com/live/country/${action.payload.country}/status/confirmed?from=${action.payload.fromDate}T00:00:00Z&to=${action.payload.toDate}T00:00:00Z`;
        return ajax.getJSON(url)
        .pipe(map(resp => fetchSuccess(resp)))
    }),
  );

