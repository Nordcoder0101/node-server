const http = require('http')
const fs = require('fs')
const server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);

  if (request.url === '/cars') {
    fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' })
      response.write(contents)
      response.end()
    });
  }

  else if (request.url === '/cars/new') {
    fs.readFile('views/carform.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' })
      response.write(contents)
      response.end()
    });
  }
  else if (request.url === '/images/blue.jpeg'){
    fs.readFile('images/blue.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpeg'})
      response.write(contents)
      response.end()
    
    })
  }
  else if (request.url === '/images/red.jpeg') {
    fs.readFile('images/red.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpeg' })
      response.write(contents)
      response.end()

    })
  }
  else if (request.url === '/images/suicide.jpeg') {
    fs.readFile('images/suicide.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpeg' })
      response.write(contents)
      response.end()

    })
  }
  else if (request.url === '/cats') {
    fs.readFile('views/cats.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' })
      response.write(contents)
      response.end()

    })
  }
  else if (request.url === '/images/hairless.jpeg') {
    fs.readFile('images/hairless.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpeg' })
      response.write(contents)
      response.end()

    })
  }
  else if (request.url === '/images/catmoney.jpeg') {
    fs.readFile('images/catmoney.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpeg' })
      response.write(contents)
      response.end()

    })
  }
  else if (request.url === '/stylesheets/stylesheet.css') {
    fs.readFile('stylesheets/stylesheet.css', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/css' })
      response.write(contents)
      response.end()

    })
  }
})  

 

server.listen(8000)
console.log('Running in localhost at port 8000')