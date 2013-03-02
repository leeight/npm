module.exports = whoami

var npm = require("./npm.js")

whoami.usage = "edp whoami\n(just prints the 'username' config)"

function whoami (args, silent, cb) {
  if (typeof cb !== "function") cb = silent, silent = false
  var me = npm.config.get("username")
  msg = me ? me : "Not authed.  Run 'edp adduser'"
  if (!silent) console.log(msg)
  process.nextTick(cb.bind(this, null, me))
}
