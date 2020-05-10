"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(params) {
        this.name = params.name;
        this.desc = params.description;
        this.url = params.html_url;
        this.forksCount = params.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
