// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // console.log(obj, typeof obj);
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else if(typeof obj === 'object') {
    // array
    if(Array.isArray(obj)){
      var arr = [];
      for(var i=0; i<obj.length; i++) {
        arr.push(stringifyJSON(obj[i]))
      }
      return '[' + arr.join(',') + ']';
    } else {
      // object
      console.log('an object')
      var objs = [];
      for(var key in obj) {
        if(key !== 'undefined' && key !== 'functions') {
          var keyValPair = [];
          keyValPair.push('"' + key + '"');
          keyValPair.push(stringifyJSON(obj[key]));
          objs.push(keyValPair.join(":"));
        }
      }
      return '{' + objs.join(',') + '}';
    }
  }
};
