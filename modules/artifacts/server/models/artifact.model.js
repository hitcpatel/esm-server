'use strict';
// =========================================================================
//
// model for ProjectType
//
// =========================================================================
module.exports = require ('../../../core/server/controllers/core.models.controller')
.generateModel ('Artifact', {
	//
	// who did what when
	//
	__audit               : true,
	//
	// who has access to this thing
	//
	__access              : true,
	//
	// what type of artifcat is this? i.e. project description, etc
	//
	type            : { type:'ObjectId', ref:'ArtifactType', index:true },
	typeName        : { type:String, default:'',  index:true},
	//
	// a name for this artifact that is unique in the project and will be used
	// to group all the various versions of this artifact together over time
	//
	name     : { type:String, default:'' },
	//
	// what stage is this particular example of the document at? and what
	// is the current version number? We will only edit the most current version
	//
	stage   : { type:String, default:'' },
	version : { type:String, default:'' },
	versionNumber : { type:Number, default:0, index:true },
	published : { type:Boolean, default:false, index:true },
	//
	// the phase during which this was added or edited
	// the milestone this artifact is attached to
	// each actual activity that was created to service this artifact
	//
	project: { type:'ObjectId', ref:'Project'},
	phase: { type:'ObjectId', ref:'Phase'},
	milestone: { type:'ObjectId', ref:'Milestone'},
	stages          : [{
		name: { type:String },
		activity: { type:'ObjectId', ref:'Activity' }
	}],
	//
	// if it is built fmor a template, here is that reference, plus its data
	// plus if there are documents attached to sections those are here too
	//
	isTemplate       : { type:Boolean, default:false },
	template         : { type:'ObjectId', ref:'Template', default:null },
	templateData     : {},
	sectionDocuments : [{
		sectionName : { type:String, default: '' },
		documents   : [{ type:'ObjectId', ref:'Document' }],
	}],
	//
	// if this is an uploaded document then here it is along with whatever
	// supporting documents there are
	//
	document            : { type:'ObjectId', ref:'Document', default:null },
	supportingDocuments : [{ type:'ObjectId', ref:'Document' }],
	//
	// this artifact may be tagged with various vcs, these need to be copied
	// forward through all iterations
	//
	valuedComponents : [{ type:'ObjectId', ref:'ValuedComponent'}],
	//
	// reviews, comments, public comments, acceptance / rejection comments
	//
	commentPeriods: [{ type:'ObjectId', ref:'CommentPeriod' }],
	publicCommentPeriods: [{ type:'ObjectId', ref:'CommentPeriod' }],
	reviewNotes: [{
		username: { type:String, default:'' },
		note: { type:String, default:'' },
		date: { type: Date , default:null }
	}],
	rejectionNotes: [{
		username: { type:String, default:'' },
		note: { type:String, default:'' },
		date: { type: Date , default:null }
	}],
	approvalNotes: [{
		username: { type:String, default:'' },
		note: { type:String, default:'' },
		date: { type: Date , default:null }
	}],

},
{
	type : 1
}
);


