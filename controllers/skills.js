const Skills = require('../models/skills')

module.exports = {
    index,
    getOne: show
}

function index(req, res) {
    const contextObject = {
        title: "Status of Skills (Learned/Not Yet Learned)",
        skills: Skills.getAll()
    }
res.render('skills/index', contextObject)
}


function show(req, res) {

    const id = req.params.id
    const contextObject = {
        title: 'Skill:',
        skill: Skills.getOne(id)
    }

    res.render('skills/show', contextObject)
}


