"use strict";
app.controller("mainController", function($scope){

	$scope.app = basel.config;
	$scope.menus = basel.database.run("SELECT * FROM crud WHERE ativo = 1 AND show_menu = 1");

	for(var i = 0 ; i < $scope.menus.length; i++){
		$scope.menus[i].active = true;
	}

	$scope.tabs = [
	{
		name:'Home',
		view:'home.html',
		active: true
	}
	];

	$scope.addTab = function(options){
		if($scope.tabs.indexOf(options) < 0){
			if(options.active){
				for(i in $scope.tabs){
					$scope.tabs[i].active = false;
				}
			}
			$scope.tabs.push(options);	
		}else{
			for(i in $scope.tabs){
				$scope.tabs[i].active = false;
			}
			$scope.tabs[$scope.tabs.indexOf(options)].active = true;
		}
		
	}

	$scope.activeMe = function(data){
		for(i in $scope.tabs){
			$scope.tabs[i].active = false;
		}
		data.active = true;
	}

	$scope.close = function(data){
		$scope.tabs.splice( $scope.tabs.indexOf(data), 1 );
		if(data.active && $scope.tabs.length>0){
			$scope.tabs[0].active = true;
		}
	}
});