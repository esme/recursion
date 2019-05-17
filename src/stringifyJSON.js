// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof(obj) === 'number') {
    return '' + obj;
  }
  if(obj === null) {
    return 'null';
  };
  if(typeof(obj) === 'boolean') {
    if(obj === true) {
      return 'true';
    } else return 'false';
  }
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if(typeof obj === 'object' && obj.length === undefined) {
    var str1 = '{'
    var i = 0
    for(var key in obj) {
      if(i>0) {
        str1 += ',';
      }
      if(typeof obj[key] === 'string') {
        str1 += '"' + key + '":"' + obj[key] + '"';
      }
      if(typeof obj[key] === 'boolean') {
        str1 += '"' + key + '":' + obj[key];
      }
      if(obj[key] === null) {
        str1 += '"' + key + '":' + obj[key];
      }
      else if(typeof obj[key] === 'object') {
        return str1 += '"' + key + '":' + stringifyJSON(obj[key]) + '}';
      }
      i++;
    }
    str1 += '}';
    return str1;
  }
  else {
    var str = '[';
    for(var i=0; i<obj.length; i++) {
      if(i>0) {
        str += ',';
      }
      if(typeof obj[i] === 'number') {
        str += obj[i];
      }
      if(typeof obj[i] === 'string') {
        str += '"';
        str += obj[i];
        str += '"';
      }
      if(typeof obj[i] === 'object' && obj[i].length === 0 && obj[i].constructor === Array) {
        // console.log(obj[i].constructor === Array);
        // console.log(obj[i]);
        // console.log('array')
        str += '[]';
      }
      if(typeof obj[i] === 'object' && obj[i].length > 0) {
        return str += stringifyJSON(obj[i]) + ']';
      }
      if(typeof obj[i] === 'object' && obj[i].length === undefined) {
        console.log('object')
        return str += stringifyJSON(obj[i]);
      }
    }
    str += ']';
    return str;
  };
};
