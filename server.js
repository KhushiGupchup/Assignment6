//import http
const http =require('http');

//create server
const server = http.createServer((req,res)=>{
    
res.setHeader('Content-type','text/html');
    if(req.url === '/'){
        res.statusCode = 200;
          //CSS and HTML code
         res.write(`
        
        <html>
            <head>
    
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        text-align:center;
                    }
                    h1 {
                        color: #007BFF;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>

    
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home route of our Node.js server.</p>
            </body>
        </html>

        `);
        res.end();
    }
    else if(req.url.toLowerCase() === '/about'){
        res.statusCode = 200;
          //CSS and HTML code
         res.write(`
        
        <html>
            <head>
    
                <title>About</title>
                 <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        text-align:center;
                       
                    }
                    h1 {
                        color: #fa5260ff;
                       
                    }
                    p {
                        font-size: 16px;
                         
                    }
                </style>

    
    
            </head>
            <body>
                <h1>Welcome to the About Page</h1>
                <p>This is the About route of our Node.js server.</p>
            </body>
        </html>

        `);
        res.end();
    }
    else if(req.url.toLowerCase() === '/contact'){
        res.statusCode = 200;
          //CSS and HTML code
         res.write(`
        
        <html>
            <head>
    
                <title>Contact</title>
                 <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        text-align:center;
                    }
                    h1 {
                        color: #4ae118ff;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>

    
    
            </head>
            <body>
                <h1>Welcome to the Contact Page</h1>
                <p>This is the Contact route of our Node.js server.</p>
            </body>
        </html>

        `);
        res.end();
    }
    else{
        res.statusCode = 404;
        //CSS and HTML code
         res.write(`
        
        <html>
            <head>
    
                <title>404 page</title>
                 <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        color: #333;
                        text-align:center;
                    }
                    h1 {
                        color: #ff1e00ff;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>

    
    
            </head>
            <body>
                <h1>404 Page</h1>
                <p>Sorry Page not Found</p>
            </body>
        </html>

        `);
        res.end();
    
    }
   

});

//port number
const PORT = 4000;

//server running on port 4000
server.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}` );
})