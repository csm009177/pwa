const http = require('http')
const server = http.createServer((req,res) => {
});
server.listen(8080, (err) => {
  if(err) {
    console.error('server not working');
  } else {
    console.log('8080 server working http://localhost:8080');
  }
})