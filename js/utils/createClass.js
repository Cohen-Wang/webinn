/*
 * Button.js created by Cohen_Wang in 2018/3/14 
 */

window.cyber = window.cyber || {};

(function(){
	
	/*
	* Clone the attribute
	* @param attribute
	*/
	
	//执行深拷贝，主要是针对那些属于对象类型的属性，进行克隆
	var cloneAttribute = function( attribute ) {
		switch( Object.prototype.toString.call( attribute ) ) {
		// Null
		case '[object Null]':
		　　return null;
		break;
		// Array
		case '[object Array]':
		　　return attribute.slice( 0 );
		break;
		//String or Number
		case '[object String]':
		case '[object Number]':
		　　return attribute.toString();
		break;
		// Object
		case '[object Object]':
		　　// Null
		　　if ( attribute === null ) {
		　　　　return null;
		　　}
		　　// Element node
		　　else if ( attribute.nodeType === 1 ) {
		　　　　return document.createElement( attribute.nodeName );
		　　}
		　　// Others
		　　else {
		　　　　return attribute;
		　　}
		break;
		// Others
		default:
		　　return attribute;
		break;
		}
	};
	
	/*
	 *	创建   类   的方法
	 */
	
	var classFactory = function( name, superClasss, implement, property ) {
		
	　　	var attributes = {}, // To store all the attributes for new class
	　　	prototype = {}; // The prototype of new class
	
	　　	//The parent class prototype
	　　	var parentPrototype = {};
	
	　　	// If the superClasss param is defined, means new class will inherited from the superClasss param
	　　	if ( typeof superClasss === 'function' ) {
	　　　　	var F = function(){};
	　　　　	parentPrototype = F.prototype = superClasss.prototype;
	　　　　	prototype = new F();
	　　	}
	
	　　	// Push the implement and property together
	　　	var _tmpArr = [];
	　　	if ( implement ) {
	　　　　	if ( !Array.isArray( implement ) ) {
	　　　　　　　　_tmpArr.push( implement );
	　　　　	}
	　　　　	else {
	　　　　　　	_tmpArr = implement;
	　　　　	}
	　　	}
	　　	if ( property ) {
	　　　　	_tmpArr.push( property );
	　　	}
	
	　　	// Deal with the interfaces and property
	　　	for ( var i = 0, len = _tmpArr.length; i < len; i++ ) {
	　　　　	var _interface = _tmpArr[ i ];
	　　　　	for( var index in _interface ) {
	　　　　　　	prop = _interface[ index ];
	
	　　　　	// Function
	　　　　	if ( typeof prop === 'function' ) {
	　　　　　　	prototype[ index ] = !parentPrototype[ index ] ? prop : ( function() {
	　　　　　　　　	var _parentFunction = parentPrototype[ index ],
	　　　　　　　　	_ownerFunction = prop;
	
	　　　　　　　　	return function() {
	　　　　　　　　　　		this._parent = _parentFunction;
	　　　　　　　　　　		_ownerFunction.apply( this, arguments );
	　　　　　　　　　　		delete this._parent;
	　　　　　　　　	}
	　　　　　　	})();
	　　　　	}
	　　　　	// Attribute
	　　　　	else {
	　　　　　　	attributes[ index ] = prop;
	　　　　	}
	　　	}
	}
	
	/*
	 * Create class
	 */
	function Class( flag ) {
	　　	// Init the inherited attributes
	　　	if ( typeof superClasss === 'function' ) {
	　　　　	superClasss.call( this, false );
	　　	}
	
	　　	// Init the owner attributes
	　　	for ( var index in attributes ) {
	　　　　	this[ index ] = cloneAttribute( attributes[ index ] );
	　　	}
	
	　　	this.className = name;
	
	　　	// Call the constructor
	　　	if ( flag !== false && this._init ) {
	　　　　	this._init.apply( this, arguments );
	　　	}
	}
	
	Class.prototype = prototype;
	
	// Inherit the static property
	var hasOwnProp = Object.prototype.hasOwnProperty;
	
	for ( var index in superClasss ) {
	　　	if ( hasOwnProp.call( superClasss, index ) ) {
	　　　　	Class[ index ] = superClasss[ index ];
	　　	}
	}
	
	return Class;
	};
	
	window.cyber.classFactory = classFactory;
	
})()

