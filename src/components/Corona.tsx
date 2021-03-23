import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
//import { defer } from "rxjs";
import BasicTable from "./BasicTable";
import ApiService from "../api/ApiService";
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from "@material-ui/core/Fade";


interface INPUTDATA {
    country:string,
    fromDate:string,
    toDate:string
}

const initialValues = {
    country:'india',
    fromDate:'2021-03-18',
    toDate:'2021-03-20'
    }

function Corona(props: any) {
    const [coronaStats, setCoronaStats] = useState<any>([]);
    const [inputDataValues, setInputDataValues] = useState<INPUTDATA>(initialValues);
    const APIEndPoint = `https://api.covid19api.com/live/country/${inputDataValues?.country}/status/confirmed?from=${inputDataValues?.fromDate}T00:00:00Z&to=${inputDataValues?.toDate}T00:00:00Z`;

    function handleGetInputData(inputData:INPUTDATA){
        setInputDataValues(inputData)
    }
    // async function getCoronaStatData() {
    //     const obs$ = defer(async () => {
    //         let v = await fetch(APIEndPoint).then((value) => value.json())
    //         return v === coronaStats
    //             ? console.log("same")
    //             : fetch(APIEndPoint).then((value) => value.json()).then(resp => resp)
    //     })
    //     obs$.subscribe(value => {setCoronaStats(value) })
    
    // }

    useEffect(() => {
       // getCoronaStatData();
       let api = new ApiService();
       api.getCoronaNews(APIEndPoint, (resp:any)=>{ setCoronaStats(resp) })
    }, []);
    console.log(coronaStats)
    return (
         <div>
         {/* <SearchBar/> */}
         { (coronaStats.length === 0) ? (
             <div style={{position:"relative",left:"600px",top:"400px"}}>
                 <CircularProgress value={50} />
            </div>     
         ):(
            <div>
              <SearchBar getInputData={handleGetInputData}/>
              <BasicTable tableData={coronaStats}/>

             </div>
         ) }
     </div>
    )
}

export default Corona
