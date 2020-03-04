// Function Service
const fs = require('fs')
const chalk = require('chalk')

// Get notes
const getNotes = function () {
    return 'Your notes...'
}
// Add a new note
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

// Save notes using JSON Stringify 
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load the notes transforming databuffer to a string. 
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Remove Notes 
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

// Exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}