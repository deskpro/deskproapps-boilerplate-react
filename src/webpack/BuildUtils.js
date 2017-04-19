const PACKAGE_NAMES = require('../../package.json').name;

function artifactName(baseName) {
  const nameParts = PACKAGE_NAMES.replace(/\+/, '').split(' ');
  if (baseName && baseName.charAt(0) !== '.') {
    nameParts.push(baseName);
  }
  const name = nameParts.join('-');

  if (baseName && baseName.charAt(0) === '.') {
    return name + baseName;
  }
  return name;
}

module.exports = {
  artifactName: artifactName
};