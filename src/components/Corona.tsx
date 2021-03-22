import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { defer } from "rxjs";
import BasicTable from "./BasicTable";
//import ApiService from "../api/ApiService";

interface INPUTDATA {
    country:'string',
    fromDate:'string',
    toDate:'string'
}

function Corona(props: any) {
    const [coronaStats, setCoronaStats] = useState<any>([]);
    const [inputDataValues, setInputDataValues] = useState<INPUTDATA>();
    const APIEndPoint = `https://api.covid19api.com/live/country/${inputDataValues?.country}/status/confirmed?from=${inputDataValues?.fromDate}T00:00:00Z&to=${inputDataValues?.toDate}T00:00:00Z`;
    async function getCoronaStatData() {
        const obs$ = defer(async () => {
            let v = await fetch(APIEndPoint).then((value) => value.json())
            return v === coronaStats
                ? console.log("same")
                : fetch(APIEndPoint).then((value) => value.json()).then(resp => resp)
        })
        obs$.subscribe(value => {setCoronaStats(value) })

    }
    function handleGetInputData(inputData:INPUTDATA){
        setInputDataValues(inputData)
    }

    useEffect(() => {
        getCoronaStatData();
    }, [inputDataValues]);

    return (
        <div>
            <SearchBar getInputData={handleGetInputData}/>
            <BasicTable tableData={coronaStats}/>
        </div>
    )
}

export default Corona
