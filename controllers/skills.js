const Skills = require('../models/skills')

module.exports = {
    index,
    getOne: show,
    new: newSkill,
    create,
    delete: deleteSkill
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

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}

function create(req, res) {
    Skills.create(req.body) // key step
    res.redirect('/skills')
}

function deleteSkill (req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
}