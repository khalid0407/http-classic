require('dotenv').config();
const app = require('./app.js');
const favicon = require('serve-favicon');
const path = require('path');

const PORT = process.env.PORT || 3000
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
}); 

