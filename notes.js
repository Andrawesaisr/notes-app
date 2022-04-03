const fs=require('fs')
const chalk=require('chalk')
const getNotes =function(){
    return'Your notes. . .'
}
// add 
const addNotes=(title,body)=>{
    const notes =loadNotes()
     const duplicateNote=notes.find((notes)=> notes.title===title)
  

     if(duplicateNote===undefined){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added') 
    }
    else{
        console.log('Note title take!')
    }
    }

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('note.json',dataJSON)
}
//loadnotes
const loadNotes=()=>{
    try{
        const noteBuffer=fs.readFileSync('note.json')
        const noteJSON=noteBuffer.toString()
        return JSON.parse(noteJSON)
    }
    catch(e){
         return []
    }
    
}
//remove
const removeNote =(title)=>{
const notes=loadNotes()
const notesToKeep=notes.filter(function(notes){
    return notes.title!==title
})

if(notes.length>notesToKeep.length){
console.log(chalk.green.inverse('note removed!'))
saveNotes(notesToKeep)
}

else{
console.log(chalk.red.inverse('no note found!'))
}
}
//list 
const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((notes)=>console.log(chalk.inverse.blue('your note')+' '+notes.title))
   
}

//read 
const readNote=(title)=>{
const note = loadNotes()
 
 const noteBody=note.find((notes)=> notes.title===title)

 
    if(noteBody){

     console.log(chalk.inverse("note title:")+' '+chalk.green(noteBody.title)+' '+chalk.inverse("note body:")+' '+ noteBody.body )
    }
 else{
     console.log(chalk.inverse.red('no not found?'))
 } 
 

}



module.exports = {
getNotes: getNotes,
addNote: addNotes,
removeNote:removeNote,
listNotes:listNotes,
readNote: readNote
}