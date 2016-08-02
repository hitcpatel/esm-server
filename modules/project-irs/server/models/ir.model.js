'use strict';
// =========================================================================
//
// Model for irs
//
// =========================================================================
module.exports = require ('../../../core/server/controllers/core.schema.controller')('Ir', {
	__audit     : true,
	__access    : ['setPermissions'],
	__tracking  : true,
	project     : { type:'ObjectId', ref:'Project', default:null, index:true },
	stage       : { type:String, enum:['Pre-Construction', 'Construction', 'Operations', 'Decommissioning'], default:'Operations' },
	ir   : { type:String, default: ''},
	complainant : { type:String, default: '' },
	vcs         : [ { type:String } ]
});

