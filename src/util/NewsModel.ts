import ResponceData from "./DataModel";

export default class NewsModels{
    responce?: ResponceData[];
    pagination?:{
        limit: number;
        offset: number;
        count: number;
        total: number;
    }

    constructor(responceData: any){
        console.log(responceData)
        if(responceData.data){
            this.responce = responceData.data;
            this.pagination = responceData.pagination;
        }
        if(responceData.articles){
            this.responce = responceData.articles;
        }
            
    }
}
