export type localGithubUser = {
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    followers: number,
    following: number,
    created: string,
}


export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    followers: number,
    following: number,
    created_at: string,
}

export type GithubError = {
    message: string,
    documentation_url: string,
}