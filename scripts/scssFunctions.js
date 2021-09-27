const { types } = require('sass'); /* eslint-disable-line import/no-extraneous-dependencies */

// const getBuildData = require('./getBuildData');
const getFileAsDataURI = require('./getFileAsDataURI');

module.exports = {
  // 'build-data()': () => types.String(getBuildData(true)),
  // eslint-disable-next-line func-names
  'get-file-as-data-uri($filepath)': function (filepath, done) {
    done(new types.String(getFileAsDataURI(filepath)));
  },
};
