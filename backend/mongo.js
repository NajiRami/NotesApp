const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URL, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})


const Note = mongoose.model('Note', noteSchema)

const note1 = new Note({
  content: 'Mongoose makes use of mongo easy',
  important: true,
})

note1.save().then(result => {
  console.log('note saved')
})

const note2 = new Note({
  content: 'HTML is easy',
  important: true,
})

note2.save().then(result => {
  console.log('note saved')
  mongoose.connection.close()
})


// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })