const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDb = require('./config/db');
const citizenRoutes = require('./routes/citizen-route');
const noticesRoutes = require('./routes/notices-route');
const birthRecordRoutes = require('./routes/birth-record-routes');
const deathRecordRoutes = require('./routes/death-record-routes');
const marriageRecordRoutes = require('./routes/marriage-record-routes');
const complainRecordRoutes = require('./routes/complain-record-routes');

dotenv.config();

connectDb();

let PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const _dirname = path.resolve();
app.use('/uploads', express.static(path.join(_dirname, '/uploads')));

app.use('/api/citizen', citizenRoutes);
app.use('/api/notice', noticesRoutes);
app.use('/api/birth-record', birthRecordRoutes);
app.use('/api/death-record', deathRecordRoutes);
app.use('/api/marriage-record', marriageRecordRoutes);
app.use('/api/complain-record', complainRecordRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

module.exports = app;
