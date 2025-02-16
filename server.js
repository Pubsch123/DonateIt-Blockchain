const {createServer}=require('http');
const next=require('next');
const routes=require('./routes');

const app=next({
  dev: process.env.NODE_ENV !== 'production'
});

//console.log("Just logging to check if push is working for anmol's mac");
// Hello world

const handler=routes.getRequestHandler(app);
app.prepare().then(()=>{
  createServer(handler).listen(3000,(err)=>{
    if(err) throw err;
    console.log('Ready on localhost: 3000');
  });
});
