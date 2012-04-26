var assert = require("assert");

var stubStatus = require("./index");

var result = stubStatus.parse("Active connections: 291\n"
				+ "server accepts handled requests\n"
				+ "  16630948 16630948 31070465\n"
				+ "Reading: 6 Writing: 179 Waiting: 106");

assert.equal(result.active, 291);
assert.equal(result.accepted, 16630948);
assert.equal(result.handled, 16630948);
assert.equal(result.handles, 31070465);
assert.equal(result.reading, 6);
assert.equal(result.writing, 179);
assert.equal(result.waiting, 106);
