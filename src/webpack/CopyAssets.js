"use strict";

const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const PROJECT_ROOT_PATH = path.resolve(__dirname, '../../');

/**
 * @return {[*,*]}
 */
function getCopyCommands(destination)
{
    if (-1 === ['dist','target'].indexOf(destination)) {
        throw new Error('destination must one of: dist, target');
    }

    return [
        {
            from: path.resolve(PROJECT_ROOT_PATH, 'src', 'main', 'html'),
            to: path.join(PROJECT_ROOT_PATH, destination, 'html'),
            force: true
        },
        {
            from: path.resolve(PROJECT_ROOT_PATH, 'src', 'main', 'resources'),
            to: path.join(PROJECT_ROOT_PATH, destination, 'assets'),
            force: true
        }
    ];
}

/**
 * @param {String} content
 * @param {String} path
 * @return {String}
 */
function transformHtml(content, path) {
    console.log('null transform');
    return content;
}

/**
 * @param {Array|String} copyCommands
 */
function createPlugin(copyCommands)
{
    let commands;
    if (typeof copyCommands === 'string') {
      commands = getCopyCommands(copyCommands);
    } else if (copyCommands instanceof Array && copyCommands.length) {
        commands = copyCommands;
    } else {
        throw new Error('unexpected argument. Expecting either a destination or an array of copy commands');
    }

    const options = { debug: true, force: true };
    return new CopyWebpackPlugin(commands, options);
}



module.exports = {
    getCopyCommands: getCopyCommands,
    copyWebpackPlugin: createPlugin
};