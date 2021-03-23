import axios from "axios";
import { fromFetch } from "rxjs/fetch";
import NewsModels from "../util/NewsModel";

// export default function getNewsHeadLines(url:string){
//    var data = axios.get(url).then((responce) => responce )
//    return data
// };

export default class ApiService {

    getNews(url: string, callback:(resp:NewsModels) => any ){
        fromFetch(url)
            .subscribe(response =>
                response.json().then(resp => { 
                    let body = new NewsModels(resp);
                    callback(body);
                })
            );
        // axios.get(url).then((resp) => {
        //     let body = new NewsModels(resp);
        //     callback(body);
        // });
    }
    getCoronaNews(url:string, callback:(resp:any) => any ){
        fromFetch(url)
            .subscribe(response =>
                response.json().then(resp => { 
                    callback(resp);
                })
            );
    }
}
