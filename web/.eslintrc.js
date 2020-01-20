const { resolve } = require('path')

module.exports = {
  extends: '@r0skar/eslint-config-prettier',
  parserOptions: {
    project: [resolve(__dirname, 'tsconfig.json')]
  }
}
