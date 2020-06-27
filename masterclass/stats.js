const os = require('os')
const log = require('./logger')

setInterval(() => {
  const { totalmem, freemem } = os

  const total = parseInt(totalmem() / 1024 / 1024)
  const mem = parseInt(freemem() / 1024 / 1024)
  const percents = parseInt((mem / total) * 100)

  const stats = {
    total: `${total} MB`,
    free: `${mem} MB`,
    usage: `${percents}%`
  }

  console.clear()
  console.log('---- Show Memory ----')
  console.table(stats)  

  log(`${JSON.stringify(stats)} \n`)

}, 1000);

