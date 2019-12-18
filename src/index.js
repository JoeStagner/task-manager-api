const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT 


// const multer = require('multer')

// const upload = multer({
//     // Options
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//        // if (!file.originalname.endsWith('.pdf')) {
//            // \.(doc|docx)$
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('File must be a WORD document'))
//         }

//         cb(undefined, true)
//         // cb(new error('File must be a PDF'))
      
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middle ware')
// }
 
//  app.post('/upload', upload.single('upload'), (req, res) => {
// //    app.post('/upload', errorMiddleware, (req, res) => {
    
//     res.send('')
// }, (error, req, res, next) => {
//     res.status(400).send( {error: error.message} )
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5df7ee660ce1c54b343e15ad')
//     // await task.populate('owner').execPopulate()
//     // console.log("TASK OWNER : " + task.owner.name)

//     const user = await User.findById('5df7e8ffbcf9d03e2c2941f1')
//     await user.populate('tasks').execPopulate()
//     console.log("USER TASKS : " + user.tasks)
// } 

// main()
// const pet = {
//         name: 'Hal'
// }

// pet.toJSON = function () {

//     return { nope: 'nope'}
// }

// console.log(JSON.stringify(pet))

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET Requests are not supported.')
//     }
//     else {
//         next()
//     }
    
// })

// const myFunction = async () => {
//     const token =jwt.sign({ _id: '12345' }, 'This is a secret signing key', { expiresIn: '30 seconds' })
//     const data = jwt.verify(token, 'This is a secret signing key')
//     console.log(data)
// }

// myFunction()


// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'P@ssw0rd'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = "P@ssw0rd"
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('P@ssw0rd2', hashedPassword)

//     console.log("RESULT : ", isMatch)
// }

// myFunction()