const jsonServer = require('json-server')
const db = require('./db.js')
const server = jsonServer.create()
const router = jsonServer.router(db())

server.use((req, res, next) => {
 /*if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }*/
 console.log('here will be authorize logic');
 next()
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})