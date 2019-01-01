/* eslint-disable no-console */
const _ = require('lodash');

const server = require('../server');
const modelConfig = require('../model-config.json');

const DATASOURCE = 'mysql';

async function migrate({ dataSource = DATASOURCE, force = false }) {
  console.log('migrating tables');
  const ds = server.dataSources[dataSource];
  const tables = Object.keys(_.omit(modelConfig, ['_meta']));

  let migrationStrategy = ds.autoupdate;

  if (force) {
    console.log('WARNING: recreating tables');
    migrationStrategy = ds.automigrate;
  }

  try {
    migrationStrategy = migrationStrategy.bind(ds);
    await migrationStrategy(tables);
    console.log(`Loopback tables [${tables}] migrated in ${ds.adapter.name}`);
  } catch (err) {
    console.log(err);
  } finally {
    ds.disconnect();
  }
}

if (require.main === module) {
  let force = false;
  if (process.argv.indexOf('-f') > -1) {
    force = true;
  }

  migrate({ force });
}

module.exports = {
  migrate,
};
