const skills = [
    {id: 11223344, skill: 'Javascript', learned: true},
    {id: 22334455, skill: 'HTML', learned: true},
    {id: 33445566, skill: 'CSS', learned: true},
    {id: 44556677, skill: 'Express', learned: false}
  ];

  module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    makeLearned
  };

  function getAll() {
    return skills;
  };

  function getOne(id) {
    id = Number(id)
    return skills.find(skill=>skill.id === id)
};

function create(data) {

  const newSkill = {...data}

  newSkill.learned = data.learned ? true : false
  newSkill.id = Date.now() % 1000000;

  skills.push(newSkill)

}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill=>skill.id === id);
  skills.splice(idx, 1);
}


function makeLearned(status, id) {

  console.log("running makelearned")

   console.log("here is the status: ", status)

   id = Number(id)
   let specificSkill = skills.find(skill=>skill.id === id)

    console.log("this is the specific skill, returns the whole object!", specificSkill)

    specificSkill.learned = status

    console.log("final status:", status)

}