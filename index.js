/*
 * Module dependency
 */
var merge = require('utils-merge');

exports = module.exports = createConfig;

/*
 * Simple config function
 */

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
