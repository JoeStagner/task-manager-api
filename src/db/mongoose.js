const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',  { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: false
  //  userCreateIntex: true 
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })



// const me = new User({
//     name: 'Sandy',
//     email: 'Joe@',
//     age: 33
// })

// me.save().then(() => {
//     console.log(me)
// }).catch ((error) => {
//     console.log('ERROR: ', error)
// })

// const task = new Task({
//     description: '  Eat lunch'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
