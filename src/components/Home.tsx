import React, { useEffect, useState } from "react";
import ApiService from "../api/ApiService";
import ResponceData from "../util/DataModel";
import NewsModels from "../util/NewsModel";
import NewsCard from "./NewsCard";


function Home() {
    const [headlines, setHeadlines] = useState<ResponceData[] | undefined>([]);
    const APIendpoint = 'http://api.mediastack.com/v1/news?access_key=c11be505af2d867268d77d48302aab0f&date=2021-03-15&countries=in';

    useEffect(() => {
        let api = new ApiService();
        api.getNews(APIendpoint, (resp:NewsModels)=>{ setHeadlines(resp.responce) });
        
    }, []);
    return (
        <NewsCard news={headlines}/>
    )
}

export default Home
