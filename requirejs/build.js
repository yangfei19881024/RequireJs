var child_process = require("child_process"),
    exec = child_process.exec;

process.chdir("./build/");

exec("sh build.sh",function(err,stdout,stderr){

    if( err ){
        console.log( err.message )
        console.log("执行命令出错");
        return;
    }

    process.stdout.write("命令执行成功!<br/>");

});