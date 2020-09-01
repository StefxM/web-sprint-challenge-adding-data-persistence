
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, task_description: 'Build firepit', task_note: 'Put together the wood and lighter fluid to build the fire', task_complete:false , task_id: 1},
        {id: 2, task_description: 'Build skewers', task_note: 'Put together the marshmellows, chocolate, and graham crackers for smores', task_complete: false , task_id: 1},
        {id: 3, task_description: 'Network', task_note: 'Need to make a list of events to attend to start networking', task_complete: false, task_id: 2},
        {id: 4, task_description: 'Resume workshop', task_note: 'Attend resume workshops for effective resume building', task_complete: false, task_id: 2},
        {id: 5, task_description: 'Seperate', task_note: 'Seperate cans that are needed during the week and for storage', task_complete: false, task_id: 3},
        {id: 6, task_description: 'Labels', task_note: 'Troubleshoot the label maker', task_complete: false, task_id: 3},
      ]);
    });
};
