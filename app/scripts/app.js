'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'regdevice', state: { url: '/regdevice', parent: 'base', templateUrl: 'views/regdevice.html', controller: 'RegDeviceCtrl', data: {text: "Register Device", visible: false } } },
        { name: 'track', state: { url: '/track', parent: 'base', templateUrl: 'views/track.html', controller: 'TrackCtrl', data: {text: "Track", visible: false } } },
        { name: 'sign-up', state: { url: '/sign-up', parent: 'base', templateUrl: 'views/sign-up.html', controller: 'SignUpCtrl', data: {text: "SignUp", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Home", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },
        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
    ];
   
angular.module('yapp', [
                'ui.router',
                'snap',
                'ngAnimate'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/dashboard', '/dashboard/overview');
            $urlRouterProvider.otherwise('/login');
            
            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        });
