
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, resource: 'Fire pit', resource_description: 'wood,gas, or matches to build fire', resource_id: 1},
        {id: 2, resource: 'Grocery Store', resource_description: 'lighter fluid, smores, skewers', resource_id: 1},
        {id: 3, resource: 'Computer', resource_description: 'Monitor, mouse, software', resource_id: 2},
        {id: 4, resource: 'Resume', resource_description: 'Job history', resource_id: 2},
        {id: 5, resource: 'Containers', resource_description: 'containers and labels', resource_id: 3},
        {id: 6, resource: 'Boxes', resource_description: 'For canned goods and storage', resource_id: 3},
      ]);
    });
};
