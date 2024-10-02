const http= require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server =http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover</title>
    <style>
        .container{
            border: 2px solid red;
            background-color:  rgb(140, 233, 140);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
            color: rgb(5,0,0);
            background-color: rgb(221,166,38);
        }
        a:visited{
            background-color: yellow;
        }
        a:active{
            background-color: darkblue;
        }
        .btn{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            background-color: crimson;
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn:hover{
            color: darkgoldenrod;
            background-color: rgb(223,245,201);
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h2>This is my heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
             explicabo! Ducimus labore, enim cum officiis explicabo blanditiis optio,
              tempore harum non eaque debitis fugiat minus? 
            Facilis mollitia temporibus suscipit cumque.</p>
            <a href="https://instagram.com" class="btn">Read More</a>
            <button class="btn">Contact us</button>

    </div>
</body>
</html>`);
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});