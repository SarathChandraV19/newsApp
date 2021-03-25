export interface ResponceData {
        source?: {
            id: string,
            name: string
        },
        author: string,
        title:string,
        discription?:string,
        url:string,
        urlToImage?:string,
        content?:string,
        publishedAt?: string,
        description?: string,
        image?: string,
        category?: string,
        language?: string,
        country?: string,
        published_at?: string
}

export  interface formInputModel {
    country:string,
    fromDate:string,
    toDate:string
}
