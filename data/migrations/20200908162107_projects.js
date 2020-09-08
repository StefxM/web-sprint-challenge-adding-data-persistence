exports.up = function(knex) {
    return knex.schema
      .createTable('projects', table => {
          table.increments('id');
          table.text('project_name')
              .unique()
              .notNullable();
          table.text('description');
          table.boolean('completed')
              .notNullable()
              .defaultTo(false);
      })
      .createTable('resource', table => {
          table.increments('id');
          table.text('resource_name')
              .notNullable()
              .unique();
          table.text('resource_description');
         
      })
      .createTable('task', table => {
          table.increments('id')
              .notNullable();
          table.text('task_description')
              .notNullable();
          table.text('task_note')
          table.boolean('task_complete')
              .defaultTo(false);
      })
      .createTable('project_items', (table) => {
          table.integer('project_id').references('projects.id').onUpdate('CASCADE').onDelete('CASCADE');
          table.integer('resource_id').references('resource.id').onUpdate('CASCADE').onUpdate('CASCADE');
          table.integer('task_id').references('task.id').onUpdate('CASCADE').onDelete('CASCADE');
          table.primary(['project_id','resource_id','task_id'])
      })
  
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_items')
      .dropTableIfExists('task')
      .dropTableIfExists('resource')
      .dropTableIfExists('projects');
  };
  