'use strict';
app.controller('misDatosCtrl', misDatosCtrl);

function misDatosCtrl($rootScope,$scope,factoryTest,sessionService,LayouHomeService,LayoutDatosService,Session,MisDatosService){

	var layout = LayoutDatosService.getLayout();
    //console.debug(layout);

	$scope.titulo1=layout.titulo1;
	$scope.nombres=layout.nombres;
	$scope.apellidos=layout.apellidos;
	$scope.rut=layout.rut;
	$scope.celular=layout.celular;
	$scope.email=layout.email;
	$scope.guardar=layout.guardar;
	$scope.titulo2=layout.titulo2;
	$scope.calle=layout.calle;
	$scope.numero=layout.numero;
	$scope.region=layout.region;
	$scope.comuna=layout.comuna;
	$scope.editar=layout.editar;
	$scope.clave=layout.clave;
	$scope.enviarclave=layout.enviarclave;
	$scope.cambiarclave=layout.cambiarclave;
	$scope.contratos=layout.contratos;
	$scope.fehacreacion=layout.fehacreacion;
	$scope.nombredocumento=layout.nombredocumento;
	$scope.folio=layout.folio;
	$scope.archivo=layout.archivo;
	$scope.descargar=layout.descargar;

	$scope.numeros = sessionService.numeros;
	$scope.numeroSeleccionado = sessionService.numeros[0];
	$scope.recargaNumero = function (){
		cargaNumero($scope.numeroSeleccionado);
	}

	var cargaNumero = function(numero){
		sessionService.numeroActivo=numero;
		var datos=MisDatosService.getDatos(sessionService.numeroActivo);
		$scope.nombresvalue = datos.nombresvalue;
		$scope.apellidosvalue = datos.apellidosvalue;
		$scope.rutvalue = datos.rutvalue;
		$scope.celularvalue = datos.celularvalue;
		$scope.emailvalue= datos.emailvalue;

		$scope.callevalue=datos.callevalue;
		$scope.numerovalue=datos.numerovalue;
		$scope.regionvalue=datos.regionvalue;
		$scope.comunavalue=datos.comunavalue;

		$scope.contratosactivos=datos.contratos;
	}
	$scope.recargaNumero();
}		