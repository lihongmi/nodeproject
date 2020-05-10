import { GithubService } from './GithubService'
import { User } from './User'
let service = new GithubService()



if (process.argv.length < 3) {
    console.log("请输入github用户名")
} else {

    let userName: string = process.argv[2];
    service.getUserInfo(userName).then((user) => {
        console.log(user)
    })

    //facebook
    service.getUserRepos(userName).then((repos) => {
        console.log(repos)
    })
}