var q=require("quicky");
function login(username,password){
    var ret=q.sys.login(username,password);
    return ret;
}