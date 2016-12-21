/**
 * Module Dependencies
 */

var assign = require('object-assign')
var preact = require('preact')

/**
 * Export `RC`
 */

module.exports = RC

/**
 * Create a Preact class
 */

function createClass (obj) {
  function C () {
    preact.Component.apply(this, arguments)
    if (obj.construct) obj.construct.call(this)
  }
  C.prototype = new preact.Component()
  for (var i in obj) C.prototype[i] = obj[i]
  C.prototype.constructor = C
  return C
}

/**
 * RC
 */

function RC (fn) {
  var channel = {
    publish: function (data) { this.fn(data) },
    subscribe: function (fn) { this.fn = fn },
    fn: function () {}
  }

  var rc = createClass({
    construct: function () {
      var self = this
      channel.subscribe(function (state) { self.setState(state) })
    },
    render: function (props, state) {
      return fn(assign({}, props, state || {}))
    }
  })

  rc.setState = function (state) {
    channel.publish(state)
  }

  return rc
}
