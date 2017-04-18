"use strict";

const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const PROJECT_ROOT_PATH = path.resolve(__dirname, '../../');

/**
 * @return {[*,*]}
 */
function getCopyCommands()
{
    return [
        {
            from: path.resolve(PROJECT_ROOT_PATH, 'src/main/html'),
            to: path.join(PROJECT_ROOT_PATH, 'target/html'),
            force: true
        },
        {
            from: path.resolve(PROJECT_ROOT_PATH, 'src/main/resources'),
            to: path.join(PROJECT_ROOT_PATH, 'target/assets'),
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
    return content;
}

/**
 * @param {Array} copyCommands
 */
function createPlugin(copyCommands)
{
    const commands = copyCommands instanceof Array ? copyCommands : getCopyCommands();
    const options = { debug: true, force: true };

    return new CopyWebpackPlugin(commands, options);
}

module.exports = {
    getCopyCommands: getCopyCommands,
    copyWebpackPlugin: createPlugin
};