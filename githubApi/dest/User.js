"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(params) {
        this.login = params.login;
        this.avatar = params.avatar_url;
        this.bio = params.bio;
        this.reposNum = params.public_repos;
    }
    return User;
}());
exports.User = User;
