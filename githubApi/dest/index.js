"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubService_1 = require("./GithubService");
var service = new GithubService_1.GithubService();
if (process.argv.length < 3) {
    console.log("请输入用户名");
}
else {
    var userName = process.argv[2];
    service.getUserInfo(userName).then(function (user) {
        console.log(user);
    });
    //facebook
    service.getUserRepos(userName).then(function (repos) {
        console.log(repos);
    });
}
