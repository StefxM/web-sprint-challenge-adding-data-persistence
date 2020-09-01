
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Bonfire', description: "Gather supplies to have a successful bonfire!", completed: false },
        {id: 2, project_name: 'Job Search', description: "Apply to jobs with my new title ", completed: false },
        {id: 3, project_name: 'Pantry', description: "Organize and take inventory of pantry items", completed: false }
      ]);
    });
};
