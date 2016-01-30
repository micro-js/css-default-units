/**
 * Imports
 */

var defaultUnits = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(defaultUnits('height', 50), '50px')
  t.equal(defaultUnits('opacity', 1), 1)
  
  t.end()
})
