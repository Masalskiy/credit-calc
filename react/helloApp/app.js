//модули - http и fs, необходимы соответственно для обработки
//http-запросов и для работы с файлами
const http = require("http");
const fs = require("fs");
   //создание сервера
http.createServer(function(request, response){
       
    let filePath = "index.html";
    if(request.url !== "/"){
        // получаем путь после слеша
        filePath = request.url.substring(1);
    }
    /*else if (url === "/close") {
        console.log("Exiting NodeJS server");
        process.exit();
      }
      */
    fs.readFile(filePath, function(error, data){
               
        if(error){
                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
     
}).listen(3000, function(){
    console.log("Server started at 3000");
});