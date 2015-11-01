var views = require('co-views');
var koa = require('koa');
var serve = require('koa-static');
var app = module.exports = koa();

// setup views, appending .ejs
// when no extname is given to render()

var render = views(__dirname + '/views', { ext: 'ejs' });

// serve static content
app.use(serve(__dirname + '/public'));

app.use(function *(){
  this.body = yield render('index');
});

if (!module.parent) app.listen(3000);
