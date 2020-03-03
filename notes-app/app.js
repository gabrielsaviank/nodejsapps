const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(process.argv)

if (command == 'add') {
    console.log('Note Added!')
} else if (command == 'remove') {
    console.log('Note removed!')
}