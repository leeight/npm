
module.exports = get

get.usage = "edp get <key> <value> (See `edp config`)"

var npm = require("./npm.js")

get.completion = npm.commands.config.completion

function get (args, cb) {
  npm.commands.config(["get"].concat(args), cb)
}
