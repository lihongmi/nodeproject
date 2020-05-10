export class User {
    login:string;
    avatar:string;
    bio:string;
    reposNum:number;
    constructor(params:any) {
        this.login=params.login;
        this.avatar=params.avatar_url;
        this.bio=params.bio;
        this.reposNum=params.public_repos;
    }
}