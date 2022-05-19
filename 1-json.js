const fs = require('fs')

const dataJSON = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJSON)

data.age = 55
data.name = "Hery"

const dataWrite = JSON.stringify(data)

fs.writeFileSync('1-json.json', dataWrite)