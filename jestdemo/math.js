function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}

let getMsg=(name, cb) => setTimeout(() => cb(`hey ${name}`), 1000)

module.exports={add,minus,getMsg}