export interface Service {
        id:number
        images:Blob
        description:string
        posts:PostsService[]
}

export interface PostsService{
    images:Blob
    quotes:string
}

export interface journey{
    id:number
    images:Blob
    description:string
    posts:PostsJourney[]
}
export interface Positivity{
    id:number
    images:Blob
    description:string
    posts:PostsPositvity[]
}
export interface UStory{
    id:number
    images:Blob
    description:string
    posts:PostsUStory[]
}
export interface Arts{
    id:number
    images:Blob
    description:string
    posts:PostsArts[]

}
export interface Music{
    id:number
    images:Blob
    description:string
    posts:PostsMusic[]

}
export interface Travel{
    id:number
    images:Blob
    description:string
    posts:PostsTravel[]

}
export interface Volunteer{
    id:number
    images:Blob
    description:string
    posts:PostsVolunteer[]

}
export interface Work{
    id:number
    images:Blob
    description:string
    posts:PostsWork[]
}

export interface About{
    id:number
    title:string
    image:Blob
    details:string
    posts:AboutPosts[]
}

export interface AboutPosts{
    title:string
    image:Blob
    details:string
}

//Interface For Posts 

export interface PostsJourney{
    id:number,
    photo:Blob
    description:string
}
export interface PostsPositvity{
    id:number,
    photo:Blob
    description:string
}
export interface PostsUStory{
    id:number,
    photo:Blob
    description:string
}
export interface PostsArts{
    id:number,
    photo:Blob
    description:string
}
export interface PostsMusic{
    id:number,
    photo:Blob
    description:string
}   
export interface PostsTravel{
    id:number,
    photo:Blob
    description:string
}
export interface PostsVolunteer{
    id:number,
    photo:Blob
    description:string
}
export interface PostsWork{
    id:number,
    photo:Blob
    description:string
}