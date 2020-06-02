export interface Service {

}

export interface journey{
    id:number
    images:Blob
    description:string
    posts:PostsJourney[]
}

export interface PostsJourney{
    photo:Blob
    description:string
}