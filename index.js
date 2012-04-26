var activeRegex = /^Active connections:\s+(\d+)/;
var readingWritingRegex = /^Reading:\s+(\d+).*Writing:\s+(\d+).*Waiting:\s+(\d+)/;
var handledRegex = /^\s+(\d+)\s+(\d+)\s+(\d+)/;

exports.parse = function(nginxStr) {
	var result = {};
	var lines = nginxStr.split(/\n/);
	lines.forEach(function(line) {
		var matches;
		if (activeRegex.test(line)) {
			matches = activeRegex.exec(line);
			result.active = matches[1];
		} else if (readingWritingRegex.test(line)) {
			matches = readingWritingRegex.exec(line);
			result.reading = matches[1];
			result.writing = matches[2];
			result.waiting = matches[3];
		} else if (handledRegex.test(line)) {
			matches = handledRegex.exec(line);
			result.accepted = matches[1];
			result.handled = matches[2];
			result.handles = matches[3];
		}
	});
	return result;
}
