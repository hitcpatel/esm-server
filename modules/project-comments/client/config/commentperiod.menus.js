'use strict';

angular.module('comment').run(['Menus',
	function (Menus) {
		Menus.addMenuItem('projectMenu', {
			title: 'Comment Periods',
			state: 'p.commentperiod.list',
			roles: ['user']
		});
	}
]);