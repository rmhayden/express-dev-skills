const Skills = require('../models/skills')

module.exports = {
    index,
    getOne: show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: makeLearned
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
    res.redirect('/skills');
}

function deleteSkill (req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
}


function makeLearned(req, res) {
    // Skills.getOne;

    // const id = req.params.id

    // res.send(Skills.getAll()) // test to see if we are finding the data)
    // req.body.done;

    console.log(Boolean(req.body.learned)) // this shows that as i update the checkbox, it stores the value
    console.log(("and now", req.body.learned))
    console.log(req.params.id)

    // maybe we should export the status and the id:

    Skills.makeLearned(req.body.learned, req.params.id) // now we have to update the actual skill info with models
    
    res.redirect('/skills');

}