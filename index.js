<<<<<<< HEAD

/*
 * Module dependency
 */
var merge = require('utils-merge');

/*
 * Simple config function
 */

exports = module.exports = createConfig;

function createConfig(options){

  var config = options || { };

  return function (obj, value){

    var copy;

    if( obj === void 0 ){
      copy = merge({ }, config);
      return copy;
    }

    if( obj.clone ){
      delete obj.clone;
      copy = merge(config, obj);
      copy = merge({ }, copy);
      return createConfig(copy);
    } else if( obj.fork ){
      delete obj.fork;
      return createConfig(merge(config, obj));
    }

    if( config[obj] ){
      return value ? config[obj] = value : config[obj];
    } else
      merge(config, obj);

    return this;
  };
}
=======
/**
 * Merge object b with object a.
 *
 *     var a = { foo: 'bar' }
 *       , b = { bar: 'baz' };
 *
 *     merge(a, b);
 *     // => { foo: 'bar', bar: 'baz' }
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
 * @api public
 */

exports = module.exports = function(a, b){
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
};
>>>>>>> c8b621dc89aeac076af83e417b69fe4f9ee88a8d
