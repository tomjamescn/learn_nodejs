buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
var str = buf.toString('utf8', 0, len);
console.log(len + " bytes: " + str);
console.log('chars written:'+Buffer._charsWritten);