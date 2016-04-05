'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function ($stateProvider) {
		// Users state routing
		$stateProvider
			.state('settings', {
				abstract: true,
				url: '/settings',
				templateUrl: 'modules/users/client/views/settings/settings.client.view.html',
				data: {
					roles: ['user', 'admin']
				}
			})
			.state('settings.profile', {
				url: '/profile',
				templateUrl: 'modules/users/client/views/settings/edit-profile.client.view.html'
			})
			.state('settings.password', {
				url: '/password',
				templateUrl: 'modules/users/client/views/settings/change-password.client.view.html'
			})
			/*
				deleted these templates, too.
			.state('settings.accounts', {
				url: '/accounts',
				templateUrl: 'modules/users/client/views/settings/manage-social-accounts.client.view.html'
			})
			.state('settings.picture', {
				url: '/picture',
				templateUrl: 'modules/users/client/views/settings/change-profile-picture.client.view.html'
			})
			*/
			.state('authentication', {
				abstract: true,
				url: '/authentication',
				templateUrl: 'modules/users/client/views/authentication/authentication.client.view.html'
			})
			.state('settings.invite', {
				url: '/invite',
				templateUrl: 'modules/users/client/views/settings/invite.client.view.html',
				/*data: {
					roles: ['user', 'admin']
				}*/
			})
			.state('authentication.signin', {
				url: '/signin?err',
				template: '<tmpl-login></tmpl-login>'
			})
			.state('password', {
				abstract: true,
				url: '/password',
				template: '<ui-view/>'
			})
			.state('password.forgot', {
				url: '/forgot',
				templateUrl: 'modules/users/client/views/password/forgot-password.client.view.html'
			})
			.state('password.reset', {
				abstract: true,
				url: '/reset',
				template: '<ui-view/>'
			})
			.state('password.reset.invalid', {
				url: '/invalid',
				templateUrl: 'modules/users/client/views/password/reset-password-invalid.client.view.html'
			})
			.state('password.reset.success', {
				url: '/success',
				templateUrl: 'modules/users/client/views/password/reset-password-success.client.view.html'
			})
			.state('password.reset.form', {
				url: '/:token',
				templateUrl: 'modules/users/client/views/password/reset-password.client.view.html'
			})
			.state('activities', {
				url: '/activities',
				templateUrl: 'modules/users/client/views/user-partials/user-activities.html',
				resolve: {
					activities: function(ActivityModel) {
						return ActivityModel.userActivities (null, 'write');
					},
					projects: function(ProjectModel) {
						return ProjectModel.mine ();
					},
					lookup: function(ProjectModel) {
						return ProjectModel.lookup ();
					}
				},
				controller: function ($scope, $state, $stateParams, lookup, activities, projects, NgTableParams, _) {
					// console.log (projects);
					// console.log (activities);

					$scope.projects = projects;

					$scope.projectParams = new NgTableParams ({count:50}, {dataset: projects});

					_.each(activities, function(item) {
						if (lookup[item.project]) {
							item.project = lookup[item.project].name;
						}
					});
					$scope.tableParams = new NgTableParams ({count:50}, {dataset: activities});

					$scope.getLinkUrl = function (state, params) {
						$state.go(state, params);
						// return $state.href (state, params);
					};
				},
				data: {
					roles: ['admin', 'user']
				}
			});
	}
]);
