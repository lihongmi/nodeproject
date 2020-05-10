export class Repo{
    name:string;
    desc:string;
    url:string;
    forksCount:number;
    constructor(params:any){
     
        this.name=params.name;
        this.desc=params.description;
        this.url=params.html_url;
        this.forksCount=params.forks_count;
    }
}