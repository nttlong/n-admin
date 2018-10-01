var q = require("quicky");
var cnn = "mongodb://root:123456@localhost/hrm";
q.language.setConfig(cnn,"sys_language");
q.mongo.connect(cnn);
var app = q.apps;
app.setSecretKey("sas03udh74327%$63283");
app.setCacheMode(true);
app.setCompressMode(false);
app.sessionCacheUseMemCache(true);
app.sessionCacheUseMemCache(false);
app.load(
    {
        name:"admin",
        hostDir:"",
        dir:"apps/admin"
    }
).listen(4000,function(){
    console.log("app start  at port 4000");
});