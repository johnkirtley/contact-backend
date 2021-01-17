
exports.up = function(knex) {
  return knex.schema
  .createTable('contact_list', tbl => {
      tbl.increments()
      tbl.string('name')
      tbl.string('phone')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contact_list')
};
