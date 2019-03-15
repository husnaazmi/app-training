angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page13',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page12',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page16',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page21',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page34',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page35',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page36',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page17',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/page18',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page19',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page11',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page10',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page14', {
    url: '/page20',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page23',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page24',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page17', {
    url: '/page25',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page18', {
    url: '/page22',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page19', {
    url: '/page26',
    templateUrl: 'templates/page19.html',
    controller: 'page19Ctrl'
  })

  .state('page20', {
    url: '/page27',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

  .state('pisang', {
    url: '/page46',
    templateUrl: 'templates/pisang.html',
    controller: 'pisangCtrl'
  })

  .state('yeay', {
    url: '/page28',
    templateUrl: 'templates/yeay.html',
    controller: 'yeayCtrl'
  })

  .state('wrong', {
    url: '/page29',
    templateUrl: 'templates/wrong.html',
    controller: 'wrongCtrl'
  })

  .state('tahniah', {
    url: '/page31',
    templateUrl: 'templates/tahniah.html',
    controller: 'tahniahCtrl'
  })

  .state('tahniah2', {
    url: '/page43',
    templateUrl: 'templates/tahniah2.html',
    controller: 'tahniah2Ctrl'
  })

  .state('tahniah3', {
    url: '/page44',
    templateUrl: 'templates/tahniah3.html',
    controller: 'tahniah3Ctrl'
  })

  .state('tahniah4', {
    url: '/page45',
    templateUrl: 'templates/tahniah4.html',
    controller: 'tahniah4Ctrl'
  })

  .state('tahniah5', {
    url: '/page47',
    templateUrl: 'templates/tahniah5.html',
    controller: 'tahniah5Ctrl'
  })

  .state('tahniah6', {
    url: '/page48',
    templateUrl: 'templates/tahniah6.html',
    controller: 'tahniah6Ctrl'
  })

  .state('tahniah7', {
    url: '/page49',
    templateUrl: 'templates/tahniah7.html',
    controller: 'tahniah7Ctrl'
  })

  .state('tahniah8', {
    url: '/page56',
    templateUrl: 'templates/tahniah8.html',
    controller: 'tahniah8Ctrl'
  })

  .state('tahniah9', {
    url: '/page57',
    templateUrl: 'templates/tahniah9.html',
    controller: 'tahniah9Ctrl'
  })

  .state('tahniah10', {
    url: '/page58',
    templateUrl: 'templates/tahniah10.html',
    controller: 'tahniah10Ctrl'
  })

  .state('qUIZ21', {
    url: '/',
    templateUrl: 'templates/qUIZ21.html',
    controller: 'qUIZ21Ctrl'
  })

  .state('page21', {
    url: '/page33',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page22', {
    url: '/page50',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('theEnd', {
    url: '/page30',
    templateUrl: 'templates/theEnd.html',
    controller: 'theEndCtrl'
  })

  .state('page23', {
    url: '/page37',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page24', {
    url: '/page38',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page25', {
    url: '/page39',
    templateUrl: 'templates/page25.html',
    controller: 'page25Ctrl'
  })

  .state('qUIZ31', {
    url: '/page40',
    templateUrl: 'templates/qUIZ31.html',
    controller: 'qUIZ31Ctrl'
  })

  .state('qUIZ32', {
    url: '/page52',
    templateUrl: 'templates/qUIZ32.html',
    controller: 'qUIZ32Ctrl'
  })

  .state('qUIZ33', {
    url: '/page53',
    templateUrl: 'templates/qUIZ33.html',
    controller: 'qUIZ33Ctrl'
  })

  .state('vIDEO', {
    url: '/page42',
    templateUrl: 'templates/vIDEO.html',
    controller: 'vIDEOCtrl'
  })

  .state('yeayYeay', {
    url: '/page51',
    templateUrl: 'templates/yeayYeay.html',
    controller: 'yeayYeayCtrl'
  })

  .state('yeayYeayYay', {
    url: '/page59',
    templateUrl: 'templates/yeayYeayYay.html',
    controller: 'yeayYeayYayCtrl'
  })

  .state('qUIZ3', {
    url: '/page54',
    templateUrl: 'templates/qUIZ3.html',
    controller: 'qUIZ3Ctrl'
  })

  .state('qUIZ2', {
    url: '/page60',
    templateUrl: 'templates/qUIZ2.html',
    controller: 'qUIZ2Ctrl'
  })

  .state('qUIZ1', {
    url: '/page61',
    templateUrl: 'templates/qUIZ1.html',
    controller: 'qUIZ1Ctrl'
  })

  .state('page26', {
    url: '/page55',
    templateUrl: 'templates/page26.html',
    controller: 'page26Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});