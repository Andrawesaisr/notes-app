/*const andrew = require('./utils.js')
 f
const sum =andrew(3,2)

console.log(sum)*/
const chalk =require('chalk')

const yargs = require('yargs')

const notes =require('./notes.js')


//creat add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
     title:{
         describe: 'note title',
         demandOption: true,
         type: 'string'
     }, 
     body:{
         describe: 'note body',
         demandOption: true,
         type: 'string'
     }
    },
    handler(argv){
      notes.addNote(argv.title,argv.body)
    }
})
//creat remove command
yargs.command({
    command:'remove',
    descirbe: 'remove a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//creat list command
yargs.command({
    command:'list',
    descirbe: 'list a note',
    handler(){
        notes.listNotes()
    }
})
//creat read command
yargs.command({
    command:'read',
    descirbe: 'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//add, remove, read, list


yargs.parse()
//console.log(yargs.argv)