const Koa  = require('koa');
require('./database');

const bodyParser = require('koa-bodyparser');
const student = require('./routes/students.routes')

const app = new Koa();

const PORT = 3000;

app.use(bodyParser());

app.use(student.routes()).use(student.allowedMethods());

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});