import { useState, useEffect } from 'react';
import '../css/IndiaTab.css'
import ResponceData from '../util/DataModel';
import SearchBar from './SearchBar';
import NewsCard from './NewsCard';
import ApiService from '../api/ApiService';
import NewsModels from '../util/NewsModel';




function Url(i: number) {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=3&apiKey=288f7fa71b5a4781a23a59a3f82a80fa';
    return url
}

function IndiaTab() {
    const [headlines, setHeadlines] = useState<ResponceData[] | undefined>([]);
    const url = Url(10);

    useEffect(() => {
        let api = new ApiService();
        api.getNews(url, (resp:NewsModels)=>{ setHeadlines(resp.responce) });
        
    }, []);

    console.log(headlines)
    return (
        <div>
            <SearchBar/>
            <NewsCard news={headlines}/>
        </div>
    )
}

export default IndiaTab;


