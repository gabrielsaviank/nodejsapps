const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//const command = process.argv[2]

// Customise yargs version 
yargs.version('1.1.0')

// ADD, REMOVE, READ, LIST 

// ADD
yargs.command({
    command: 'add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)

    }
})
 
// REMOVE
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// LIST
yargs.command({
    command: 'list', 
    describe: 'List your Notes', 
    handler: function() {
        console.log('Placeholder message for now')
    }
})

// READ
yargs.command({
    command: 'read',
    describe: 'Read Notes', 
    handler: function() {
        console.log('Reading a note')
    }
})

//Printing
yargs.parse()
//console.log(yargs.argv)