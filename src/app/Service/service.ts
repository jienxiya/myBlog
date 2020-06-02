export interface Service {

}

export interface journey{
    id:number
    image:Blob
    description:string
    posts:PostsJourney
}

export interface PostsJourney{
    photo:Blob
    description:string
}