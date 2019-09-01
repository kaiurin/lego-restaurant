const koa = require('koa');
const app = new koa();
const Route = require('e.router')();
const render = require('koa-ejs');
const IO = require('koa-socket-2');
const serve = require('koa-static');
const io = new IO();

app.use(serve('./s/'));

render(app, {
	root: __dirname,
	layout: false,
	viewExt: 'html',
	cache: false,
	debug: false
});

io.attach(app);

io.on('connection', function (socket) {
	console.error('connection');
	socket.on('search', (msg) => {

	});
});

Route.get('/', async (ctx, next) => {
	await ctx.render('index', {message: 'hey'})
});


app.use(Route.R());
app.listen(3000);