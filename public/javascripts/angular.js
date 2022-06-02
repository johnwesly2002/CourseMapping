var app=angular.module('Myapp',[]);
app.controller('myCtrl',function($scope,$http){
	//document format if square brakects are represented as array
	$scope.student={}
	$scope.studentdata=[]
	$scope.upd={}
	$scope.loginform=function(val){
		$http({
			method:'post',
			url:'/login',
			data:val
		}).then(function(success){
			console.log(success);
			alert("successfully submitted");
		}),function(err){
			console.log(err);
		}
	}
	$scope.registration=function(val){
		$http({
			method:'post',
			url:'/senddata',
			data: val
		}).then(function(success){
			console.log(success);
			alert("successfully submitted");
			},function(err){
				console.log(err);
			})
	}
	$scope.get=function(){
		$http({
			method:'get',
			url:'/getdata',
		}).then(function(success){
			console.log(sucess);
		},function(err){
			console.log(err);
		})
	}
	$scope.Update=function(val){
		$http({
			method:'post',
			url:'/post1',
			data:val
		}).then(function(sucess){
			console.log(success);
		},function(err){
			console.log(err);
		})
	}

});
