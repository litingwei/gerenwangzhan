var app=angular.module('myApp',['ui.bootstrap','ui.router']);   
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'home1.htm'
            //template:'This'
       })
        .state('guanyu',{
            url:'/guanyu',
            templateUrl:'guanyu.htm'
             })
        .state('guanyu.gongsi',{
            url:'/gongsi',
            templateUrl:'guanyu-gongsi.htm'
        })
        .state('guanyu.zhaomu',{
            url:'/zhaomu',
            templateUrl:'guanyu-zhaomu.htm'
        })
        .state('guanyu.lianxi',{
            url:'/lianxi',
            templateUrl:'guanyu-lianxi.htm'
        })
        .state('denglu',{
            url:'/denglu',
            templateUrl:'denglu.htm'
        })
        .state('zuce',{
            url:'/zuce',
            templateUrl:'zuce.htm'
        })
     }]) 
    app.controller('nav1',['$scope',function($scope){
      $scope.change01=function(arg1,arg2){
        var ele=document.getElementById(arg1);
        ele.classList.add('displayBlock');
        var ele2=document.getElementById(arg2);
        ele2.style.backgroundColor="rgba(255,255,255,0.2)"
      }
      $scope.change02=function(arg1,arg2){
        var ele=document.getElementById(arg1);
        ele.classList.remove('displayBlock');
        var ele2=document.getElementById(arg2);
         ele2.style.backgroundColor="#468fae";
      }
    }])
    app.controller('zhaomu',['$scope',function($scope){
      $scope.toggle=false;
      $scope.activeButton=function(){
        $scope.toggle=!$scope.toggle;
      };
       $scope.toggle2=false;
      $scope.activeButton2=function(){
        $scope.toggle2=!$scope.toggle2;
      }
    }]) 
    app.controller('Aaa',['$scope',function($scope){
      $scope.tip= " " ;
      $scope.change=function(err1,err2){
      console.log(err1);
      if(err1.hasOwnProperty("required")&&err1["required"]==true){
        return $scope.tip="请输入用户名";
      }else if(err2.hasOwnProperty("required")&&err2["required"]==true){
        return $scope.tip="请输入密码";
      }   
    }
    }]) 
    app.controller('Bdd',['$scope',function($scope){
    $scope.regText={
      regVal:'default',
      //bool:false,
      regList:[
      {name:'default',tips:'提示：支持中文、数字、字母、”_”、”-”的组合',bool:''},
      {name:'required',tips:'请输入用户名',bool:''},
      {name:'pattern',tips:'长度只能在4-20个字符之间',bool:''},
      {name:'pass',tips:'',bool:'√'}
      ]
    }
    $scope.regPassword={
      regVal:'default',
      //bool:false,
      regList:[
      {name:'default',tips:'提示：字母、数字、符号两种及以上的组合，6-20位',bool:''},
      {name:'required',tips:'请输入密码',bool:''},
      {name:'pattern',tips:'长度只能在6-20个字符之间且必须为字母、数字、符号两种及以上的组合',bool:''},
      {name:'pass',tips:'',bool:'√'}
      ]
    }
    $scope.regPassword2={
      bool:false
    };
    $scope.regPhone={
      regVal:'default',
      //bool:false,
      regList:[
      {name:'default',tips:'提示：完成验证后,你可以用该手机登录和找回密码',bool:''},
      {name:'required',tips:'提示：请输入手机号',bool:''},
      {name:'pattern',tips:'格式有误',bool:''},
      {name:'pass',tips:'',bool:'√'}
      ]
    }
    $scope.change=function(reg,err){
      for(var attr in err){
        if(err[attr]===true){
          $scope[reg].regVal=attr;
          return;
        }
      }
      $scope[reg].regVal="pass";
      $scope[reg].bool=true;
    }
    $scope.confirm=function(val1,val2,err){
      for(var attr in err){
        if(err[attr]===true){
          return;
        }
      }
      return $scope.regPassword2.bool=(val1===val2);
    }
  }])
    //轮播插件     
   app.controller('CarouselDemoCtrl', function ($scope) {
     $scope.myInterval = 4000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function() {
        //var newWidth = 600 + slides.length + 1;
        slides.push({
          //image: '//unsplash.it/' + newWidth + '/300',
          image:['img/42.png','img/43.png','img/21.png','img/44.png'][slides.length%4],
          text: ['天空很大，尽在掌握','高精度差分基站定位解决方案','',''][slides.length % 4],
          id: currIndex++
        });
      };
        for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }
      // http://stackoverflow.com/questions/962802#962890
      function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }
        return array;
      }
    });