const express = require('express')
const router = express.Router()


const Book =require('../models/Books.model')
const {generateCrudMethods} = require('../services')
const libraryCrud = generateCrudMethods(Book)
const { validateDbId, raiseRecord404Error } = require('../middlewares');

router.get('/test',
(req,res,next)=>{next()},
(req,res)=>{res.send('foo')}
)

router.get('/', (req, res, next) => {
    libraryCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', validateDbId,(req, res, next) => {
    libraryCrud.getById(req.params.id)
            .then(data => {
                if (data)
                    res.send(data)
                else
                    raiseRecord404Error(req,res)
                })
                .catch(err => next(err))

})
        

router.post('/', (req, res, next) => {
    libraryCrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateDbId, (req, res) => {
    libraryCrud.update(req.params.id, req.body)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res) => {
    libraryCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})








module.exports = router