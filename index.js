const express = require('express')
const app = express()

require('./startup/logging')()
require('./startup/process_error')()
require('./startup/db')()
require('./startup/router')(app)

const schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();

const scheduledTask = schedule.scheduleJob('*/1 * * * *', () => {
    console.log('Task executed every minute:', new Date().toLocaleTimeString());
  });


let server = app.listen(8080, err => {
    if(err)
        console.error(err);
    else
        console.log(`8080 portni tinglash boshlandi!!!`);
})

module.exports.server = server