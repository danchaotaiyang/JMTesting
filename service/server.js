const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'html');
app.set('views', path.resolve('../dist'));
app.engine('html', require('ejs').__express);
app.use(express.static(path.resolve('../dist')));

const index = require('./router/index');

app.use('*', index);

app.listen(8091);
