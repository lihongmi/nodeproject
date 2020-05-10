"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    GithubService.prototype.getUserInfo = function (userName) {
        var url = "https://api.github.com/users/" + userName;
        return new Promise(function (resovle) {
            request.get(url, {
                headers: {
                    'User-Agent': 'request'
                },
                json: true
            }, function (err, response, body) {
                if (err)
                    console.log('请求错误', err);
                // console.log(body)
                var user = new User_1.User(body);
                resovle(user);
            });
        });
    };
    GithubService.prototype.getUserRepos = function (userName) {
        var url = "https://api.github.com/users/" + userName + "/repos";
        return new Promise(function (resovle) {
            request.get(url, {
                headers: {
                    'User-Agent': 'request'
                },
                json: true
            }, function (err, response, body) {
                if (err)
                    console.log('请求错误', err);
                // console.log(body)
                var repos = body.map(function (item) { return new Repo_1.Repo(item); })
                    .sort(function (a, b) { return b.forksCount - a.forksCount; })
                    .filter(function (a) { return a.forksCount > 2000; });
                resovle(repos);
            });
        });
    };
    return GithubService;
}());
exports.GithubService = GithubService;
