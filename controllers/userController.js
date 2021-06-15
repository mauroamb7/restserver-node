const { response, request } = require('express')

const userGet = (req = request, res = response) => {

    const { nombre = 'No name', apikey, page = '1', limit } = req.query

    res.json({
        msg: 'get API - controlador',
        nombre,
        apikey,
        page,
        limit
    })
}

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}

const userPut = (req, res = response) => {

    const id = req.params.id

    res.status(400).json({
        msg: 'put API',
        id
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
}

module.exports = { userGet, userPost, userDelete, userPatch, userPut }