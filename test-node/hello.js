/*загрузим модуль http*/
const http = require("http");

const host = 'localhost';
const port = 8000;

/* для обработки входящих запросов HTTP и возврата ответа HTTP. */
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

/*создать сервер и использовать прослушиватель запросов:*/
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});