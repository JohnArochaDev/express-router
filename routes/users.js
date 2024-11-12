const express = require('express')
const User = require('../models/User.js')

const userRouter = express.Router()

userRouter.use(express.json())

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
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
    res.status(201).json(allUsers)
})

userRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const update = req.body
    const updatedUser = await User.update(update, { where :{id: id}})
    res.status(202).json(update)
})

userRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({where: {id: id}})
    res.status(203).send()
})

module.exports = userRouter