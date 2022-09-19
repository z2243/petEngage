// 引入express
const express = require('express')
const app = express()

// 创建一给/的路由 用户访问/localhost:8080/的时候服务端会输出"请求走了app.use中间件"
// 并不会输出"请求走了app.use/list中间件"第二个是固定的请求地址，第一个接受所有的请求
app.get('/', async(req, res) => {
    res.send('index')
})

// 跨域
app.use(require('cors')())
// 把传过来的数据转为json格式
app.use(express.json())

// 引入mongoose
const mongoose = require('mongoose')
// 连接mongoose的数据库
mongoose.connect('mongodb://localhost:27017/element-admin')
// 建立数据模型对象
const Pet = mongoose.model('Pet', new mongoose.Schema({
    name: {type: String},
    breed: {type: String},
    date: {type: Date},
    reserve: {type: Boolean},
    hobby: {type: Array},
    health: {type: String},
    desc: {type: String}
}))

// 新增宠物信息
app.post('/api/pets', async(req, res) => {
    // 前端发请求就要把body发过来
    const pet = await Pet.create(req.body)
    // 返回pet数据
    res.send(pet)
})
// 显示宠物信息
app.get('/api/pets', async(req, res) => {
    const pets = await Pet.find()
    // 返回pets数据
    res.send(pets)
})
// 删除宠物信息
app.delete('/api/pets/:id', async(req, res) => {
    await Pet.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})
// 显示要编辑的宠物信息
app.get('/api/pet/:id/', async(req, res) => {
    const pet = await Pet.findById(req.params.id)
    // 返回pets数据
    res.send(pet)
})
// 编辑宠物信息
app.put('/api/:id/edit', async(req, res) => {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body)
    res.send(pet)
})

app.listen(3000, () => {
    console.log('服务器运行了')
})