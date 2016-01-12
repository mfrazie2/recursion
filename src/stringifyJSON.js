// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    if (Array.isArray(obj)) {
        var arrString = [];
        for (var i = 0; i < obj.length; i++) {
            arrString.push(stringifyJSON(obj[i]));
        }
        return '[' + arrString.join(',') + ']';
    }
    if (obj && typeof obj === 'object') {
      var objString = [];
      for ( var key in obj ) {
        if ( obj[key] === undefined || typeof obj[key] === 'function') {
          continue;
        } else {
            objString.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));}
      }
      return '{' + objString.join(',') + '}';
    }
    if (typeof obj === 'string') {
        return '"' + obj + '"';
    }
    return '' + obj;
};
