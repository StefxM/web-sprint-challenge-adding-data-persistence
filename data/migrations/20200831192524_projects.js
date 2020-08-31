
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.string('project_name')
            .unique()
            .notNullable()
        table.string('description')
            .notNullable()
        table.boolean('completed')
    })
};

exports.down = function(knex) {
  
};
