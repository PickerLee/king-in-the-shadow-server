// import logger from 'koa-logger';
import log4js from 'koa-log4';
// const logger = log4js.getLogger();
module.exports = {
	PORT: 8099,
	middlewares: function(app) {
		app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }));
	}
};
