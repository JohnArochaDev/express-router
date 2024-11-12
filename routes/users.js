const express = require('express')
const User = require('./User')

const userRouter = express.Router()

userRouter.use(express.json())

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk({where: {id: id}})
    res.status(200).json(user)
})

userRouter.get('/', async (req, res) => {
    const users = await User.findAll()
    res.status(200).json(users)
})

userRouter.post('/', async (req, res) => {
    const newUser = req.body
    const allUsers = await User.create(newUser)
    const users = await User.findAll()
    res.status(201).json(users)
})