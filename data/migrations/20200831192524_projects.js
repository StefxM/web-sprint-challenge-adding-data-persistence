
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments()
            .unique();
        table.string('project_name')
            .unique()
            .notNullable();
        table.string('description')
        table.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resource', table => {
        table.increments()
            .unique();
        table.string('resource')
            .notNullable()
            .unique()
        table.string('resource_description')
            .unique()
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('task', table => {
        table.increments()
            .unique();
        table.string('task_description')
            .notNullable()
        table.string('task_note')
            .notNullable()
        table.boolean('task_complete')
            .defaultTo(false)
        table.integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects');
};
