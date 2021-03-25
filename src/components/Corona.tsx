import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
//import { defer } from "rxjs";
import BasicTable from "./BasicTable";
import ApiService from "../api/ApiService";
import CircularProgress from '@material-ui/core/CircularProgress';
import { INITIAL_FORM_VALUES } from "../util/Constants";
import { formInputModel } from "../util/DataModel";

function Corona(props: any) {
    const [coronaStats, setCoronaStats] = useState<any>([]);
    const [inputDataValues, setInputDataValues] = useState<formInputModel>(INITIAL_FORM_VALUES);
    const APIEndPoint = `https://api.covid19api.com/live/country/${inputDataValues?.country}/status/confirmed?from=${inputDataValues?.fromDate}T00:00:00Z&to=${inputDataValues?.toDate}T00:00:00Z`;

    function handleGetInputData(inputData:formInputModel){
        setInputDataValues(inputData)
    }

    useEffect(() => {
       // getCoronaStatData();
       let api = new ApiService();
       api.getCoronaNews(APIEndPoint, (resp:any)=>{ setCoronaStats(resp) })
    }, []);
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
