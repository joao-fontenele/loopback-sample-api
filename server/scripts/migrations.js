/* eslint-disable no-console */
const _ = require('lodash');

const server = require('../server');
const modelConfig = require('../model-config.json');

const DATASOURCE = 'mysql';

function migrate(dataSource = DATASOURCE) {
  console.log('automigrating tables');

  const ds = server.dataSources[dataSource];
  const tables = Object.keys(_.omit(modelConfig, ['_meta']));

  ds.autoupdate(tables, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Loopback tables [${tables}] migrated in ${ds.adapter.name}`);

    ds.disconnect();
  });
}

if (require.main === module) {
  migrate();
}

module.exports = {
  migrate,
};
