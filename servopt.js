"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "servopt",
			"path": "servopt/servopt.js",
			"file": "servopt.js",
			"module": "servopt",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/servopt.git",``
			"test": "servopt-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Server based option configuration

		The option is leveled in 3 hierarchies.
		1. Deployment level
		2. Default option level
		3. Service option level

		Note that this will always change based on convention.

		All values here are conventional common values used as defaults only.
	@end-module-documentation

	@include:
		{
			"raze": "raze",
			"redupe": "redupe",
			"truu": "truu"
		}
	@end-include
*/

const raze = require( "raze" );
const redupe = require( "redupe" );
const truu = require( "truu" );

const option = require( "./option.json" );

const servopt = function servopt( source ){
	/*;
		@meta-configuration:
			{
				"source:required": [
					"object",
					"..."
				]
			}
		@end-meta-configuration
	*/

	source = raze( arguments ).filter( truu );

	let local = source.map( ( source ) => { return source.local || { }; } );
	let staging = source.map( ( source ) => { return source.staging || { }; } );
	let production = source.map( ( source ) => { return source.production || { }; } );

	return {
		"local": redupe.apply( null, [ option ].concat( local ) ),
		"staging": redupe.apply( null, [ option ].concat( staging ) ),
		"production": redupe.apply( null, [ option ].concat( production ) )
	};
};

module.exports = servopt;
