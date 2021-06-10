const express = require("express");
const nodeHtmlToImage = require("node-html-to-image");
const app = express();
const port = process.env.PORT || 3000;

app.get("/stewie", async (req, res) => {
  const name = req.query.name
  const image = await nodeHtmlToImage({
    html: 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Casper Stock</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap" rel="stylesheet"> 
</head>
<body>
    <style>

        body {
            width: 1200px;
            height: 720px;
        }
        #imageDiv {
          background-image: url('http://i.imgur.com/6uWc0DE.png');
          width: 1200px;
          height: 720px;
          background-repeat: no-repeat;
          position: relative;
        }

        #name {
         position: absolute;
         width: 100%;
         top: 220px;
         text-align: center;
         font-size: 50px;
         font-family: 'Raleway', sans-serif;
         background: #f12711; /* fallback for old browsers */
         background: -webkit-linear-gradient(to right, #f12711, #f5af19); /* Chrome 10-25, Safari 5.1-6 */
         background: linear-gradient(to right, #f12711, #f5af19); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
        }
      </style>
    <div id="imageDiv">
         <h1 id="name">${name}</h1>
    </div>

</body>
</html>
    `,
  });
  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(image, "binary");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
