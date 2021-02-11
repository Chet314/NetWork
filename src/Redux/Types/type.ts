export type FriendsType = {
    id: number
    avatar: string
    name: string

}

export type MessageType = {
    time: number
    senderId: number
    recipientId: number
    avatar: string
    message: string
}

export type ImagesType = {
    _id: number
    image: string
}

export type PostType = {
    id: number
    time: number
    name: string
    avatar: string
    post: string
    photo: string
    likes: number
}

export type UserType = {
    _id: number
    onLine?: boolean
    followed?: boolean
    status?: string
    name: string
    avatar: string
    country?: string
    about?: string
    myPhoto?: string
}

export type FollowerType = {
    id: number
}
