'use strict';
app.controller('loginCtrl', loginCtrl);

function loginCtrl($rootScope,$scope,LayouHomeService2,LayoutLoginService,AuthSharedService,$state){

	var layout = LayouHomeService2.getLayout();
	$scope.logoOficial = layout.logoOficial;

	var layoutLogin = LayoutLoginService.getLayout();
	

	$scope.title=layoutLogin.title;
	$scope.usuario=layoutLogin.usuario;
	$scope.password=layoutLogin.password;
	$scope.tituloLogin=layoutLogin.tituloLogin;
	$scope.recuerdame=layoutLogin.recuerdame;
	$scope.entrar=layoutLogin.entrar;
	$scope.perdistepassword=layoutLogin.perdistepassword;
	$scope.crearcuenta=layoutLogin.crearcuenta;

	$scope.login = function(){

		   //$state.go('home'); 
		
		/*var data = {
                "username": $scope.usuario,
                "password": $scope.password,
                "rememberme": false,
                "tipoLogin": 1
            };
		AuthSharedService.login(data,
			function (response){
				console.debug(response);
			},
			function (e){
				console.debug("Error de autentificacion");
				console.debug(e);
				//$location.path("/home");
			}
		);*/
	}
}