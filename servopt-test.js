
const servopt = require( "./servopt.js" );

console.log( require( "util" ).inspect( servopt( { "production": { "server": { "protocol": "https" } } } ), { "showHidden": true, "depth": Infinity } ) );
