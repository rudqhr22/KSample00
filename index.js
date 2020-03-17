const express = require('express'); //설치한 모듈을 변수로 담음
const app = express();              //초기화 실행함 //declare function e(): core.Express;
  
app.get('/', (req, res)=> {         // '/' 위치에 get요청을 받을떄 실행
  res.send('Hello World! kkb');
  console.log("in get")  
});
  

let port = 7000;
let server = app.listen(port, ()=> {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
  console.log("host :" +host+ "-----"+ "port :"+ port);  
});


