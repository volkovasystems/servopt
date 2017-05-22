const assert = require( "assert" );
const servopt = require( "./servopt.js" );

assert.ok( servopt( { "production": { "server": { "protocol": "https" } } } ), { "showHidden": true, "depth": Infinity } );

console.log( "ok" );
