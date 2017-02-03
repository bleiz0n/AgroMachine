var oAgromachine = new Agromachine();
window.addEventListener("load",inicio,false);



function inicio(){
	oAgromachine.altaCliente(new Cliente("00000001A", "Juan", "Álvarez Gómez", "Av. Barber, 25","Toledo","45003","600000001"));
	oAgromachine.altaCliente(new Cliente("00000002B", "José", "Rodríguez García", "Calle Remedios, 5","Zamora","49031","600000002"));
	oAgromachine.altaCliente(new Cliente("00000003C", "Luis Antonio", "Ruiz Coto", "Calle Felipe Sanclemente, 20","Zaragoza","50001","600000003"));
	oAgromachine.altaMaquinaria(new Combustible("00001", "Tractor", "John Deere", "2100","Diesel","100"));
	oAgromachine.altaMaquinaria(new Combustible("00002", "Tractor", "Branson", "2600","Diesel","120"));
	oAgromachine.altaMaquinaria(new Electrica("00003", "Cosechadora", "John Deere", "3100","3","12"));
	oAgromachine.altaMaquinaria(new Electrica("00004", "Empacadora", "New Holland", "3500","1","9.2"));
	oAgromachine.altaProveedor(new Proveedor("55555551A", "Maquinaría Agrícola Barcia", "Calle La Campana, 13","Sevilla","41420","954838032"));
	oAgromachine.altaProveedor(new Proveedor("55555552A", "Maquinaria Agrícola Cruz SL", "Calle Amador Sánchez, 2","Ávila","05300","920244019"));
	oAgromachine.altaProveedor(new Proveedor("55555553A", "Sanz Maquinaria Agrícola", "Calle Bronce, 5","Valladolid","47008","983223517"));
	oAgromachine.altaProveedor(new Proveedor("55555554A", "Maquinaría Agrícola Sánchez", "Calle de Herreros, 4","Ávila","05146","923563488"));
	oAgromachine.altaProveedor(new Proveedor("55555555A", "Tapia Maquinaria Agrícola SL", "Carr. Salamanca, s/n","Salamanca","37170","923320001"));
	oAgromachine.altaProveedor(new Proveedor("55555556A", "Maquinaria Agrícola Molinos", "Av. Maestrazgo, 1","Teruel","44587","978856050"));
	oAgromachine.altaEmpleado(new Empleado("11111111A", "Carlos", "Montero Bravo", "Marketing", "Calle Estación, 13","Valladolid","47004","611111111"));
	oAgromachine.altaEmpleado(new Empleado("11111112A", "Antonia", "Cabezas Lobo", "Ventas", "Calle Luis Vadía, 98","Albacete","02004","611111112"));
	oAgromachine.altaEmpleado(new Empleado("11111113A", "Carmela", "Linares Moreno", "Técnico", "Calle Carlos III, 5","Murcia","30008","611111113"));
	
	oAgromachine.altaIncidencia(new Incidencia("00001", {id: "00002", nombre: "Tractor", marca: "Branson", precio: "2600", tipoC: "Diesel", capacidad:"120"}, "Luces de freno", "Cuando el vehículo esta parando, no enciende las luces", "Anulada","26/01/2017"));
	oAgromachine.altaIncidencia(new Incidencia("00002", {id: "00004", nombre: "Empacadora", marca: "New Holland", precio: "3500", bateria: "1", voltaje:"9,2"}, "Ruido raro en el motor", "Suele pasar cuando lleva horas de uso", "Activa","26/01/2017"));
	oAgromachine.altaIncidencia(new Incidencia("00003", {id: "00002", nombre: "Tractor", marca: "Branson", precio: "2600", tipoC: "Diesel", capacidad:"120"}, "Fallo en la palanca", "Casi no se puede cambiar de marcha", "Activa","26/01/2017"));

	oAgromachine.altaCompra(new Compra("00001",{dni: "11111112A", nombre: "Antonia", apellidos: "Cabezas Lobo", rol: "Ventas", domicilio: "Calle Luis Vadía, 98", localidad: "Albacete", cp:"02004", telefono: "611111112"},
			   {cif: "55555553A", nombre: "Sanz Maquinaria Agrícola", domicilio: "Calle Bronce, 5", localidad: "Valladolid", cp: "47008", telefono:"983223517"},
			   {id:"00004", nombre: "Empacadora", marca: "New Holland", precio: "3500", bateria: "1", voltaje: "9.2"},
			   "12000","27/01/2017"));
	oAgromachine.altaCompra(new Compra("00002",{dni: "11111111A", nombre: "Carlos", apellidos: "Montero Bravo", rol: "Marketing", direccion: "Calle Estación, 13", localidad: "Valladolid", cp: "47004", telefono: "611111111"},
			   {cif: "55555556A", nombre: "Maquinaria Agrícola Molinos", domicilio: "Av. Maestrazgo, 1", localidad: "Teruel", cp: "44587", telefono:"978856050"},
			   {id:"00003", nombre: "Cosechadora", marca: "John Deere", precio: "3100", bateria: "3", voltaje: "12"},
			   "25300","27/01/2017"));
	oAgromachine.altaAlquiler(new Alquiler("00001",{dni: "11111111A", nombre: "Carlos", apellidos: "Montero Bravo", rol: "Marketing", direccion: "Calle Estación, 13", localidad: "Valladolid", cp: "47004", telefono: "611111111"},
			   {dni: "00000002B", nombre: "José", apellidos: "Rodríguez García", domicilio: "Calle Remedios, 5", localidad: "Zamora", cp: "49031", telefono:"600000002"},
			   {id:"00001", nombre: "Tractor", marca: "John Deere", precio: "2100", tipoC: "Diesel", capacidad: "100"},
			   "16/01/2017","15/02/2017"));
	
	
	//Asignamos los eventos a la capa gestion
	var capaGestion = document.getElementsByTagName("div")[2].getElementsByTagName("div");
	var gestionMaquinaria = document.getElementById("gestionMaquinarias");
	var capaBotones = document.getElementsByClassName("capaBotones");
	
	//Añadimos evento mouseOver y mouseOverOut a las capas principales
		document.getElementById("gestionClientes").addEventListener("mouseover", function() { capaBotones[0].style.display="block"; });
		document.getElementById("gestionClientes").addEventListener("mouseout", function() { capaBotones[0].style.display="none"; });
		
		document.getElementById("gestionMaquinarias").addEventListener("mouseover", function() { capaBotones[1].style.display="block"; });
		document.getElementById("gestionMaquinarias").addEventListener("mouseout", function() { capaBotones[1].style.display="none"; });
		
		document.getElementById("gestionEmpleados").addEventListener("mouseover", function() { capaBotones[2].style.display="block"; });
		document.getElementById("gestionEmpleados").addEventListener("mouseout", function() { capaBotones[2].style.display="none"; });
		
		document.getElementById("gestionProveedores").addEventListener("mouseover", function() { capaBotones[3].style.display="block"; });
		document.getElementById("gestionProveedores").addEventListener("mouseout", function() { capaBotones[3].style.display="none"; });
		
		document.getElementById("gestionCompras").addEventListener("mouseover", function() { capaBotones[4].style.display="block"; });
		document.getElementById("gestionCompras").addEventListener("mouseout", function() { capaBotones[4].style.display="none"; });
		
		document.getElementById("gestionAlquileres").addEventListener("mouseover", function() { capaBotones[5].style.display="block"; });
		document.getElementById("gestionAlquileres").addEventListener("mouseout", function() { capaBotones[5].style.display="none"; });
		
		document.getElementById("gestionIncidencias").addEventListener("mouseover", function() { capaBotones[6].style.display="block"; });
		document.getElementById("gestionIncidencias").addEventListener("mouseout", function() { capaBotones[6].style.display="none"; });
		
		document.getElementById("gestionDocumentos").addEventListener("mouseover", function() { capaBotones[7].style.display="block"; });
		document.getElementById("gestionDocumentos").addEventListener("mouseout", function() { capaBotones[7].style.display="none"; });
	
	//Añadimos eventos a la capa Cliente
	var btnGestionClientes = document.getElementById("gestionClientes").getElementsByTagName("button");
		btnGestionClientes[0].addEventListener("click",altaCliente,false);
		btnGestionClientes[1].addEventListener("click",bajaCliente,false);
		btnGestionClientes[2].addEventListener("click",modificaCliente,false);
		btnGestionClientes[3].addEventListener("click",listarCliente,false);
	
	//Añadimos eventos a la capa Maquinaria
	var btnGestionMaquinarias = document.getElementById("gestionMaquinarias").getElementsByTagName("button");
		btnGestionMaquinarias[0].addEventListener("click",altaMaquinaria,false);
		btnGestionMaquinarias[1].addEventListener("click",bajaMaquinaria,false);
		btnGestionMaquinarias[2].addEventListener("click",modificaMaquinaria,false);
		btnGestionMaquinarias[3].addEventListener("click",listarMaquinaria,false);

	//Añadimos eventos a la capa Empleado
	var btnGestionEmpleados = document.getElementById("gestionEmpleados").getElementsByTagName("button");
		btnGestionEmpleados[0].addEventListener("click",altaEmpleado,false);
		btnGestionEmpleados[1].addEventListener("click",bajaEmpleado,false);
		btnGestionEmpleados[2].addEventListener("click",modificaEmpleado,false);
		btnGestionEmpleados[3].addEventListener("click",listarEmpleado,false);
	
	//Añadimos eventos a la capa Proveedor
	var btnGestionProveedores = document.getElementById("gestionProveedores").getElementsByTagName("button");
		btnGestionProveedores[0].addEventListener("click",altaProveedor,false);
		btnGestionProveedores[1].addEventListener("click",bajaProveedor,false);
		btnGestionProveedores[2].addEventListener("click",modificaProveedor,false);
		btnGestionProveedores[3].addEventListener("click",listarProveedor,false);

	//Añadimos eventos a la capa Compra
	var btnGestionCompras = document.getElementById("gestionCompras").getElementsByTagName("button");
		btnGestionCompras[0].addEventListener("click",altaCompra,false);
		btnGestionCompras[1].addEventListener("click",bajaCompra,false);
		btnGestionCompras[2].addEventListener("click",modificaCompra,false);
		btnGestionCompras[3].addEventListener("click",listarCompra,false);

	//Añadimos eventos a la capa Alquiler
	var btnGestionAlquileres = document.getElementById("gestionAlquileres").getElementsByTagName("button");
		btnGestionAlquileres[0].addEventListener("click",altaAlquiler,false);
		btnGestionAlquileres[1].addEventListener("click",bajaAlquiler,false);
		btnGestionAlquileres[2].addEventListener("click",modificaAlquiler,false);
		btnGestionAlquileres[3].addEventListener("click",listarAlquiler,false);

	//Añadimos eventos a la capa Incidencia
	var btnGestionIncidencias = document.getElementById("gestionIncidencias").getElementsByTagName("button");
		btnGestionIncidencias[0].addEventListener("click",altaIncidencia,false);
		btnGestionIncidencias[1].addEventListener("click",bajaIncidencia,false);
		btnGestionIncidencias[2].addEventListener("click",modificaIncidencia,false);
		btnGestionIncidencias[3].addEventListener("click",listarIncidencia,false);
	

	//Añadimos eventos a la capa Documento
	var btnGestionDocumentos = document.getElementById("gestionDocumentos").getElementsByTagName("button");
		btnGestionDocumentos[0].addEventListener("click",git,false);
		btnGestionDocumentos[1].addEventListener("click",uml,false);
		btnGestionDocumentos[2].addEventListener("click",doc,false);
		btnGestionDocumentos[3].addEventListener("click",web,false);
		btnGestionDocumentos[4].addEventListener("click",download,false);

		function git(){
			var nuevaVentana = window.open('https://github.com/bleiz0n/AgroMachine');
		}
		function uml(){
			document.getElementById("gestion").style.display="none";
			document.getElementById("uml").style.display="block";
		}
		function doc(){
			document.getElementById("gestion").style.display="none";
			document.getElementById("doc").style.display="block";

			document.getElementById("documento").setAttribute("src","http://docs.google.com/gview?url=http://belizon.hol.es/AgroMachine/Documentos/Practica2-AgroMachine.pdf&embedded=true");
		}
		function web(){
			var nuevaVentana = window.open('http://belizon.hol.es/AgroMachine');
		}
		function download(){
			var nuevaVentana = window.open('http://belizon.hol.es/AgroMachine/Documentos/AgroMachine.rar');
		}
		
	//Eventos de los botones Volver
    var oBtnVolver = document.querySelectorAll('[name="volver"]'); //Recojo todos los botones

    //Recorro la lista de botones y le asigno un evento a cada boton
    for (i=0;i< oBtnVolver.length;i++){
        oBtnVolver[i].addEventListener("click",volver,false);
    }
    function volver(){
        document.getElementById("gestion").style.display="block";
        ocultarFormularios();
    }
	
    function ocultarFormularios(){
    	 document.getElementById("altaCliente").style.display="none";
         document.getElementById("bajaCliente").style.display="none";
         document.getElementById("modificaCliente").style.display="none";
         document.getElementById("altaMaquinaria").style.display="none";
         document.getElementById("bajaMaquinaria").style.display="none";
         document.getElementById("modificaMaquinaria").style.display="none";
         document.getElementById("altaEmpleado").style.display="none";
         document.getElementById("bajaEmpleado").style.display="none";
         document.getElementById("modificaEmpleado").style.display="none";
         document.getElementById("altaProveedor").style.display="none";
         document.getElementById("bajaProveedor").style.display="none";
         document.getElementById("modificaProveedor").style.display="none";
         document.getElementById("altaCompra").style.display="none";
         document.getElementById("bajaCompra").style.display="none";
         document.getElementById("modificaCompra").style.display="none";
         document.getElementById("altaAlquiler").style.display="none";
         document.getElementById("bajaAlquiler").style.display="none";
         document.getElementById("modificaAlquiler").style.display="none";
         document.getElementById("altaIncidencia").style.display="none";
         document.getElementById("bajaIncidencia").style.display="none";
         document.getElementById("modificaIncidencia").style.display="none";
         document.getElementById("capaAltaTipoElectrica").style.display="none";
         document.getElementById("capaAltaTipoCombustible").style.display="none";
         document.getElementById("capaBajaTipoElectrica").style.display="none";
         document.getElementById("capaBajaTipoCombustible").style.display="none";
         document.getElementById("capaModificaTipoElectrica").style.display="none";
         document.getElementById("capaModificaTipoCombustible").style.display="none";

         
         document.getElementById("mClientes").style.display="none";
         document.getElementById("mMaquinarias").style.display="none";
         document.getElementById("mEmpleados").style.display="none";
         document.getElementById("mProveedores").style.display="none";
         document.getElementById("mCompras").style.display="none";
         document.getElementById("mAlquileres").style.display="none";
         document.getElementById("mIncidencias").style.display="none";


         document.getElementById("uml").style.display="none";
         document.getElementById("doc").style.display="none";
    }
	
    /* ------------- CLIENTES ------------- */
	function altaCliente(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaCliente").style.display="block";
		
		formAltaCliente.reset();
        formAltaCliente.envioCliente.addEventListener("click",validaCliente,false);
	}

	function bajaCliente(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaCliente").style.display="block";
		formBajaCliente.reset();
		cargarSelectBajaCliente();
		document.getElementById("clienteBaja").addEventListener("click",cargarDatosBajaCliente,false);

        formBajaCliente.envioCliente.addEventListener("click",validaCliente,false);
	}
	function modificaCliente(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaCliente").style.display="block";
		formModificaCliente.reset();
		
		var inputsFormModificaCliente = document.querySelectorAll("#formModificaCliente input");
		for(i=0;i<inputsFormModificaCliente.length;i++){
			inputsFormModificaCliente[i].setAttribute("disabled","disabled");
			inputsFormModificaCliente[i].value = "";
        }
		
		cargarSelectModificaCliente();
		document.getElementById("clienteModifica").addEventListener("click",cargarDatosModificaCliente,false);

        formModificaCliente.envioCliente.addEventListener("click",validaCliente,false);
	}
	
	function validaCliente(){
        var error="";
        var cancelarEnvio=false;
        var focus=false;
        var formulario;
        var dni;
        //Recogemos datos de los Clientes
        if(document.getElementById("altaCliente").style.display == "block"){
        	formulario = formAltaCliente;
        	dni = formulario.dniCliente;
        }
        if(document.getElementById("bajaCliente").style.display == "block"){
        	formulario = formBajaCliente;
        	selectCliente = formulario.clienteBaja;
    		dni = formulario.clienteBaja.options[formulario.clienteBaja.selectedIndex];
        }
    	if(document.getElementById("modificaCliente").style.display == "block"){
        	formulario = formModificaCliente;
        	selectCliente = formulario.clienteModifica;
    		dni = formModificaCliente.clienteModifica.options[formModificaCliente.clienteModifica.selectedIndex];
		}
    	
        var nombre = formulario.nombreCliente;
        var apellidos = formulario.apellidosCliente;
        var direccion = formulario.direccionCliente;
        var localidad = formulario.localidadCliente;
        var cp = formulario.cpCliente;
        var telefono = formulario.telefonoCliente;
        //Comprobamos que se este editando
        
        if(document.getElementById("altaCliente").style.display == "block"){
	        /*Comprobamos DNI de Cliente*/
	        if(/^\d{8}[a-zA-Z]$/.test(dni.value)){
	            dni.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en el dni. (12345678A)\n";
	            dni.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            dni.focus();
	            focus=true;
	        }
	        /*Comprobamos que DNI de Persona no exista */
	        if(oAgromachine.compruebaDNI(dni.value)==false){
	            dni.setAttribute("class","form-control");
	        }
	        else{
	            error+="DNI pertenece a otra persona.\n";
	            dni.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            dni.focus();
	            focus=true;
	        }
        }
        else{
        	if(selectCliente.selectedIndex > 0 ){
        		selectCliente.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona dni\n";
        		selectCliente.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectCliente.focus();
	            focus=true;
        	}
        }

        /*Comprobamos Nombre de Cliente*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(nombre.value)){
            nombre.setAttribute("class","form-control");
        }
        else{
            error+="Error en el nombre.\n";
            nombre.setAttribute("class","form-control error");
            cancelarEnvio=true;
            nombre.focus();
            focus=true;
        }

        /*Comprobamos Apellidos de Cliente*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(apellidos.value)){
            apellidos.setAttribute("class","form-control");
        }
        else{
            error+="Error en los apellidos.\n";
            apellidos.setAttribute("class","form-control error");
            cancelarEnvio=true;
            apellidos.focus();
            focus=true;
        }

        /*Comprobamos Direccion de Cliente*/
        if(/^[A-Za-z0-9\s\,\(\)\.\wáéíóúÁÉÍÓÚ]{3,40}$/.test(direccion.value)){
                direccion.setAttribute("class","form-control");
        }
        else{
            error+="Error en la dirección.\n";
            direccion.setAttribute("class","form-control error");
            cancelarEnvio=true;
            direccion.focus();
            focus=true;
        }
        /*Comprobamos Localidad de Cliente*/
        if(/^[A-Za-z\s\,\(\)\wáéíóúÁÉÍÓÚ]{3,40}$/.test(localidad.value)){
            localidad.setAttribute("class","form-control");
        }
        else{
            error+="Error en la localidad.\n";
            localidad.setAttribute("class","form-control error");
            cancelarEnvio=true;
            localidad.focus();
            focus=true;
        }
        /*Comprobamos CP de Cliente*/
        if(/^[0-9]{5}$/.test(cp.value)){
            cp.setAttribute("class","form-control");
        }
        else{
            error+="Error en el código postal.\n";
            cp.setAttribute("class","form-control error");
            cancelarEnvio=true;
            cp.focus();
            focus=true;
        }

        /*Comprobamos Teléfono de Cliente*/
        if(/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(telefono.value)){
            telefono.setAttribute("class","form-control");
        }
        else{
            error+="Error en el teléfono. (987654321)\n";
            telefono.setAttribute("class","form-control error");
            cancelarEnvio=true;
            telefono.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaCliente").style.display == "block"){
                oAgromachine.borraCliente(dni.value);
                alert("Cliente eliminado");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaCliente").style.display == "block" ){
	            	oAgromachine.borraCliente(dni.value);
	            	sMensaje = "Cliente modificado:\n";
	            }

	            if(document.getElementById("altaCliente").style.display == "block"){ 
	            	sMensaje = "Cliente dado de alta:\n";
	            }
	            var oCliente = new Cliente(dni.value, nombre.value, apellidos.value, direccion.value,localidad.value, cp.value, telefono.value);
	            oAgromachine.altaCliente(oCliente);
	
            	sMensaje += "DNI: "+dni.value +"\n" +
			                "Nombre: " +nombre.value +"\n" +
			                "Apellidos: " +apellidos.value +"\n" +
			                "Dirección: " +direccion.value +"\n" +
			                "Localidad: "+localidad.value +"\n" +
			                "CP: "+cp.value +"\n" +
			                "Teléfono: " +telefono.value +".";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
    }
	
	

	 /* Método para cargar los options del select */
	function cargarSelectBajaCliente(){
        var select = document.getElementById("clienteBaja");
        
        //Limpiamos select anterior
        for (var i=select.length-1; i>0 ; i--) {
        	if(select.options.length>1){
        		select.removeChild(select.options[i]);
        	}
        }
        
        //Generamos option
        var options = [];
        for(var i=0;i<oAgromachine.getClientes().length;i++){
            options[i]=oAgromachine.getClientes()[i].dni +" - " +oAgromachine.getClientes()[i].nombre+" " +oAgromachine.getClientes()[i].apellidos +" - " +oAgromachine.getClientes()[i].localidad +" - " +oAgromachine.getClientes()[i].telefono;
            console.log(oAgromachine.getClientes()[i].dni +" - " +oAgromachine.getClientes()[i].nombre+" " +oAgromachine.getClientes()[i].apellidos +" - " +oAgromachine.getClientes()[i].localidad +" - " +oAgromachine.getClientes()[i].telefono+"\n");
        }
        
        //Rellenamos select
        for(var i=0; i<options.length; i++){
            opt = options[i];
            var el = document.createElement("option");
            	el.textContent = opt;
            	el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 
	 /* Método para cargar los datos del select al formulario */
	function cargarDatosBajaCliente(){
		var seleccionado = document.getElementById("clienteBaja");
	
		if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formBajaCliente input").length;i++){
                document.querySelectorAll("#formBajaCliente input")[i].value = "";
                document.querySelectorAll("#formBajaCliente input")[i].setAttribute("disabled",true);
            }
		 }
        else{
            for(var i=0;i<oAgromachine.getClientes().length;i++){
                if(oAgromachine.getClientes()[i].dni == seleccionado.options[seleccionado.selectedIndex].value){
                	formBajaCliente.nombreCliente.value = oAgromachine.getClientes()[i].nombre;
                    formBajaCliente.apellidosCliente.value = oAgromachine.getClientes()[i].apellidos;
                    formBajaCliente.direccionCliente.value = oAgromachine.getClientes()[i].direccion;
                    formBajaCliente.localidadCliente.value = oAgromachine.getClientes()[i].localidad;
                    formBajaCliente.cpCliente.value = oAgromachine.getClientes()[i].cp;
                    formBajaCliente.telefonoCliente.value = oAgromachine.getClientes()[i].telefono;
                }
            }
            for(i=0;i<document.querySelectorAll("#formBajaCliente input").length;i++){
                document.querySelectorAll("#formBajaCliente input")[i].setAttribute("disabled",true);
            }
        }
	}

	 /* Método para cargar los options del select */
	function cargarSelectModificaCliente(){
        var select = document.getElementById("clienteModifica");

        //Limpiamos select anterior
        for (i = 0; i < oAgromachine.getClientes().length; i++) {
        	  select.options[1] = null;
    	}

        //Generamos option
        var options = [];
        for(var j=0;j<oAgromachine.getClientes().length;j++){
            options[j]=oAgromachine.getClientes()[j].dni +" - " +oAgromachine.getClientes()[j].nombre+" " +oAgromachine.getClientes()[j].apellidos +" - " +oAgromachine.getClientes()[j].localidad +" - " +oAgromachine.getClientes()[j].telefono;
        }

        //Rellenamos select
        for(var i = 0; i < options.length; i++){
            opt = options[i];
            el = document.createElement("option");
            el.textContent = opt;
            el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 /* Método para cargar los datos del select al formulario */
	function cargarDatosModificaCliente(){
		var seleccionado = document.getElementById("clienteModifica");
		
		 if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formModificaCliente input").length;i++){
                document.querySelectorAll("#formModificaCliente input")[i].setAttribute("disabled","disabled");
                document.querySelectorAll("#formModificaCliente input")[i].value = "";
            }
		 }
        else{
            for(i=0;i<document.querySelectorAll("#formModificaCliente input").length;i++){
                document.querySelectorAll("#formModificaCliente input")[i].removeAttribute("disabled");
            }

            for(var j=0;j<oAgromachine.getClientes().length;j++){
                if(oAgromachine.getClientes()[j].dni == seleccionado.options[seleccionado.selectedIndex].value){
                	formModificaCliente.nombreCliente.value = oAgromachine.getClientes()[j].nombre;
                    formModificaCliente.apellidosCliente.value = oAgromachine.getClientes()[j].apellidos;
                    formModificaCliente.direccionCliente.value = oAgromachine.getClientes()[j].direccion;
                    formModificaCliente.localidadCliente.value = oAgromachine.getClientes()[j].localidad;
                    formModificaCliente.cpCliente.value = oAgromachine.getClientes()[j].cp;
                    formModificaCliente.telefonoCliente.value = oAgromachine.getClientes()[j].telefono;
                }
            }
        }
	}
	
	 /* Método listar los clientes */
	function listarCliente(){
		if(oAgromachine.getClientes().length==0){
            alert("No hay ningún cliente dado de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mClientes").style.display="block";

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
	            tabla.setAttribute('id', 'tablaClientes');
	            tabla.setAttribute('class', 'text-center');
	            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            thead.insertRow(0); // Añadir una fila a la sección <thead>

            // Añadir columnas de <thead>
            var cabecera;

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'DNI';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Nombre';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Apellidos';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Dirección';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Localidad';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'CP';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Teléfono';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var clientes=oAgromachine.getClientes();
            for(var i = clientes.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(clientes[i].dni));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(clientes[i].nombre));

                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(clientes[i].apellidos));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(clientes[i].direccion));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(clientes[i].localidad));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(clientes[i].cp));

                tbody.rows[0].insertCell(6);
                tbody.rows[0].cells[6].appendChild(document.createTextNode(clientes[i].telefono));
                tbody.insertRow(0);
            }
            
            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0);
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 7);
            	footer.innerHTML = clientes.length+" clientes listados";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tCliente").appendChild(tabla);
            document.getElementById("imprimirClientes").addEventListener("click",imprime,false);
            document.getElementById("btnVolverCliente").addEventListener("click",borraTablaCliente,false);
        }
    }

    /* ------------- MAQUINARIAS ------------- */
	function altaMaquinaria(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaMaquinaria").style.display="block";
		formAltaMaquinaria.reset();
		cargarIdMaquinaria();
        formAltaMaquinaria.envioMaquinaria.addEventListener("click",validaMaquinaria,false);
	}

    function cargarIdMaquinaria(){
    	var idMaquinaria = formAltaMaquinaria.idMaquinaria;
    	var maquinarias = oAgromachine.getMaquinarias();
    	var ultimaMaquinaria=0;
    	if(maquinarias.length>0)
    		ultimaMaquinaria = maquinarias[maquinarias.length - 1].id;

    	var actualMaquinaria = parseInt(ultimaMaquinaria)+1;
    	var cadena = anadirCeros(actualMaquinaria,5);
    	idMaquinaria.value = cadena;
    }
    
	function bajaMaquinaria(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaMaquinaria").style.display="block";
		formBajaMaquinaria.reset();
		cargarSelectBajaMaquinaria();
		document.getElementById("maquinariaBaja").addEventListener("click",cargarDatosBajaMaquinaria,false);

        formBajaMaquinaria.envioMaquinaria.addEventListener("click",validaMaquinaria,false);
	}
	function modificaMaquinaria(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaMaquinaria").style.display="block";
		formModificaMaquinaria.reset();
		
		var inputsFormModificaMaquinaria = document.querySelectorAll("#formModificaMaquinaria input");
		for(i=0;i<inputsFormModificaMaquinaria.length;i++){
			inputsFormModificaMaquinaria[i].setAttribute("disabled","disabled");
			inputsFormModificaMaquinaria[i].value = "";
        }
		
		cargarSelectModificaMaquinaria();
		document.getElementById("maquinariaModifica").addEventListener("click",cargarDatosModificaMaquinaria,false);

        formModificaMaquinaria.envioMaquinaria.addEventListener("click",validaMaquinaria,false);
	}
	
	function validaMaquinaria(){
		var error=""; 
        var cancelarEnvio=false;
        var focus=false;
        
        var formulario;
        var id;
        var tipoMaquinaria;
        
        //Recogemos datos de los Clientes
        if(document.getElementById("altaMaquinaria").style.display == "block"){
        	formulario = formAltaMaquinaria;
        	id = formulario.idMaquinaria;
        	tipoMaquinaria = formulario.rbtTipoMaquinariaAlta;
        }
        if(document.getElementById("bajaMaquinaria").style.display == "block"){
        	formulario = formBajaMaquinaria;
        	selectMaquinaria = formulario.maquinariaBaja;
        	id = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        	tipoMaquinaria = formulario.rbtTipoMaquinariaBaja;
        }
    	if(document.getElementById("modificaMaquinaria").style.display == "block"){
        	formulario = formModificaMaquinaria;
        	selectMaquinaria = formulario.maquinariaModifica;
        	id = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        	tipoMaquinaria = formulario.rbtTipoMaquinariaModifica;
		}
	    	
        var nombre = formulario.nombreMaquinaria;
        var marca = formulario.marcaMaquinaria;
        var precio = formulario.precioMaquinaria;
        var bateria = formulario.bateriaElectrica;
        var voltaje = formulario.voltajeElectrica;
        var tipoC = formulario.tipoCombustible;
        var capacidad = formulario.capacidadCombustible;
	        
	        //Comprobamos que estemos en altaCliente
        if(document.getElementById("altaMaquinaria").style.display == "block"){
	        /*Comprobamos DNI de Cliente*/
	        if(/^\d{5}$/.test(id.value)){
	        	id.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en la id. (00001)\n";
	            id.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            id.focus();
	            focus=true;
	        }
	        /*Comprobamos que id de Maquinaria no exista */
	        if(oAgromachine.compruebaID(id.value)==false){
	        	id.setAttribute("class","form-control");
	        }
	        else{
	            error+="ID pertenece a otra maquinaria.\n";
	            id.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            id.focus();
	            focus=true;
	        }
        }
        else{
        	if(selectMaquinaria.selectedIndex > 0 ){
        		selectMaquinaria.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona maquinaria\n";
        		selectMaquinaria.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectMaquinaria.focus();
	            focus=true;
        	}
        }

        /*Comprobamos Nombre de Maquinaria*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(nombre.value)){
            nombre.setAttribute("class","form-control");
        }
        else{
            error+="Error en el nombre.\n";
            nombre.setAttribute("class","form-control error");
            cancelarEnvio=true;
            nombre.focus();
            focus=true;
        }

        /*Comprobamos marca de Maquinaria*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(marca.value)){
            marca.setAttribute("class","form-control");
        }
        else{
            error+="Error en la marca.\n";
            marca.setAttribute("class","form-control error");
            cancelarEnvio=true;
            marca.focus();
            focus=true;
        }

        /*Comprobamos precio de Maquinaria*/
        if(/^[0-9]+(\.[0-9][0-9])?$/.test(precio.value)){
        	precio.setAttribute("class","form-control");
        }
        else{
            error+="Error en el precio.\n";
            precio.setAttribute("class","form-control error");
            cancelarEnvio=true;
            precio.focus();
            focus=true;
        }
        /*Comprobamos Tipo de Maquinaria*/
        	if(tipoMaquinaria[0].checked){
        		/*Comprobamos bateria de Maquinaria*/
                if(/^[0-9]{1}$/.test(bateria.value)){
                	bateria.setAttribute("class","form-control");
                }
                else{
                    error+="Error en la batería.\n";
                    bateria.setAttribute("class","form-control error");
                    cancelarEnvio=true;
                    bateria.focus();
                    focus=true;
                }
        		/*Comprobamos voltaje de Maquinaria*/
                if(/^\d+(\.\d{1,2})?$/.test(voltaje.value)){
                	voltaje.setAttribute("class","form-control");
                }
                else{
                    error+="Error en el voltaje.\n";
                    voltaje.setAttribute("class","form-control error");
                    cancelarEnvio=true;
                    voltaje.focus();
                    focus=true;
                }
        	}
        	else{
	        	if(tipoMaquinaria[1].checked){
	        		/*Comprobamos tipoCombustible de Maquinaria*/
	                if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(tipoC.value)){
	                	tipoC.setAttribute("class","form-control");
	                }
	                else{
	                    error+="Error en el combustible.\n";
	                    tipoC.setAttribute("class","form-control error");
	                    cancelarEnvio=true;
	                    tipoC.focus();
	                    focus=true;
	                }
	                /*Comprobamos capacidad de Maquinaria*/
	                if(/^[0-9]{2,4}$/.test(capacidad.value)){
	                	tipoC.setAttribute("class","form-control");
	                }
	                else{
	                    error+="Error en litros de capacidad.\n";
	                    capacidad.setAttribute("class","form-control error");
	                    cancelarEnvio=true;
	                    capacidad.focus();
	                    focus=true;
	                }
	        	}
	        	else{
	        		 error+="Selecciona un tipo de Maquinaria.\n";
	                 cancelarEnvio=true;
	                 focus=true;
	        	}
        	}

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaMaquinaria").style.display == "block"){
                oAgromachine.borraMaquinaria(id.value);
                alert("Maquinaria eliminada");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaMaquinaria").style.display == "block" ){
	            	oAgromachine.borraMaquinaria(id.value);
	            	sMensaje = "Maquinaria modificada:\n";
	            }

	            if(document.getElementById("altaMaquinaria").style.display == "block"){ 
	            	sMensaje = "Maquinaria dada de alta:\n";
	            }
	            
	            sMensaje += "ID: "+id.value +"\n" +
			                "Nombre: " +nombre.value +"\n" +
			                "Marca: " +marca.value +"\n" +
			                "Precio: " +precio.value +"€\n";
	            
	            var oMaquinaria;
	            if(tipoMaquinaria=="electrica"){
	            	oMaquinaria = new Electrica(id.value, nombre.value, marca.value, precio.value,bateria.value, voltaje.value);
	            	sMensaje += "Batería: "+bateria.value +"\n" + "Voltaje: "+voltaje.value +"v\n";
	            }
            	else{
	            	oMaquinaria = new Combustible(id.value, nombre.value, marca.value, precio.value,tipoC.value, capacidad.value);
	            	sMensaje += "Combustible: "+tipoC.value +"\n" + "Capacidad: "+capacidad.value +"L\n";
            	}
	            oAgromachine.altaMaquinaria(oMaquinaria);
	
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
    }
	

	 /* Método para cargar los options del select */
	function cargarSelectBajaMaquinaria(){
       var select = document.getElementById("maquinariaBaja");
       
       //Limpiamos select anterior
       for (var i=select.length-1; i>0 ; i--) {
       	if(select.options.length>1){
       		select.removeChild(select.options[i]);
       	}
       }
       
       //Generamos option
       var options = [];
       for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
           options[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
       }
       
       //Rellenamos select
       for(var i=0; i<options.length; i++){
           opt = options[i];
           var el = document.createElement("option");
           	el.textContent = opt;
           	el.value = options[i].substr(0,5);
           select.appendChild(el);
       }
	}

	 
	 /* Método para cargar los datos del select al formulario */
	function cargarDatosBajaMaquinaria(){
		var seleccionado = document.getElementById("maquinariaBaja");
	
		if(seleccionado.selectedIndex==0) {
      	   document.getElementById("capaBajaTipoElectrica").style.display="none";
      	   document.getElementById("capaBajaTipoCombustible").style.display="none";
           for(i=0;i<document.querySelectorAll("#formBajaMaquinaria input").length;i++){
               document.querySelectorAll("#formBajaMaquinaria input")[i].value = "";
               document.querySelectorAll("#formBajaMaquinaria input")[i].setAttribute("disabled",true);
           }
		 }
       else{
           for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
        	   if(oAgromachine.getMaquinarias()[i].id == seleccionado.options[seleccionado.selectedIndex].value){
	               formBajaMaquinaria.nombreMaquinaria.value = oAgromachine.getMaquinarias()[i].nombre;
	               formBajaMaquinaria.marcaMaquinaria.value = oAgromachine.getMaquinarias()[i].marca;
	               formBajaMaquinaria.precioMaquinaria.value = oAgromachine.getMaquinarias()[i].precio;
	               if(oAgromachine.getMaquinarias()[i].bateria){
	            	   formBajaMaquinaria.rbtTipoMaquinariaBaja[0].setAttribute("checked",true);
	            	   formBajaMaquinaria.rbtTipoMaquinariaBaja[0].value="electrica";
	            	   document.getElementById("capaBajaTipoElectrica").style.display="block";
	            	   document.getElementById("capaBajaTipoCombustible").style.display="none";
	            	   formBajaMaquinaria.bateriaElectrica.value = oAgromachine.getMaquinarias()[i].bateria;
	            	   formBajaMaquinaria.voltajeElectrica.value = oAgromachine.getMaquinarias()[i].voltaje;
	            	   formBajaMaquinaria.tipoCombustible.value = "";
	            	   formBajaMaquinaria.capacidadCombustible.value = "";
	               }
	               else{
	            	   formBajaMaquinaria.rbtTipoMaquinariaBaja[1].setAttribute("checked",true);
	            	   formBajaMaquinaria.rbtTipoMaquinariaBaja[1].value ="combustible";
	            	   document.getElementById("capaBajaTipoElectrica").style.display="none";
	            	   document.getElementById("capaBajaTipoCombustible").style.display="block";
	            	   formBajaMaquinaria.bateriaElectrica.value = "";
	            	   formBajaMaquinaria.voltajeElectrica.value = "";
	            	   formBajaMaquinaria.tipoCombustible.value = oAgromachine.getMaquinarias()[i].tipoC;
	            	   formBajaMaquinaria.capacidadCombustible.value = oAgromachine.getMaquinarias()[i].capacidad;
	               }
               }
           }
           for(i=0;i<document.querySelectorAll("#formBajaMaquinaria input").length;i++){
               document.querySelectorAll("#formBajaMaquinaria input")[i].setAttribute("disabled",true);
           }
       }
	}

	 /* Método para cargar los options del select */
	function cargarSelectModificaMaquinaria(){
       var select = document.getElementById("maquinariaModifica");

       //Limpiamos select anterior
       for (i = 0; i < oAgromachine.getMaquinarias().length; i++) {
       	  select.options[1] = null;
   	}

       //Generamos option
       var options = [];
       for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
           options[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
       }

       //Rellenamos select
       for(var i = 0; i < options.length; i++){
           opt = options[i];
           el = document.createElement("option");
           el.textContent = opt;
           el.value = options[i].substr(0,5);
           select.appendChild(el);
       }
	}

	 /* Método para cargar los datos del select al formulario */
	function cargarDatosModificaMaquinaria(){
		var seleccionado = document.getElementById("maquinariaModifica");
		
		 if(seleccionado.selectedIndex==0) {
      	   document.getElementById("capaModificaTipoElectrica").style.display="none";
      	   document.getElementById("capaModificaTipoCombustible").style.display="none";
           for(i=0;i<document.querySelectorAll("#formModificaMaquinaria input").length;i++){
               document.querySelectorAll("#formModificaMaquinaria input")[i].setAttribute("disabled","disabled");
               document.querySelectorAll("#formModificaMaquinaria input")[i].value = "";
           }
		 }
       else{
           for(i=0;i<document.querySelectorAll("#formModificaMaquinaria input").length;i++){
               document.querySelectorAll("#formModificaMaquinaria input")[i].removeAttribute("disabled");
           }

           for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
               if(oAgromachine.getMaquinarias()[i].id == seleccionado.options[seleccionado.selectedIndex].value){
	               formModificaMaquinaria.nombreMaquinaria.value = oAgromachine.getMaquinarias()[i].nombre;
	               formModificaMaquinaria.marcaMaquinaria.value = oAgromachine.getMaquinarias()[i].marca;
	               formModificaMaquinaria.precioMaquinaria.value = oAgromachine.getMaquinarias()[i].precio;
	               if(oAgromachine.getMaquinarias()[i].bateria){
	            	   formModificaMaquinaria.rbtTipoMaquinariaModifica[0].setAttribute("checked",true);
	            	   formModificaMaquinaria.rbtTipoMaquinariaModifica[0].value="electrica";
	            	   document.getElementById("capaModificaTipoElectrica").style.display="block";
	            	   document.getElementById("capaModificaTipoCombustible").style.display="none";
	            	   formModificaMaquinaria.bateriaElectrica.value = oAgromachine.getMaquinarias()[i].bateria;
	            	   formModificaMaquinaria.voltajeElectrica.value = oAgromachine.getMaquinarias()[i].voltaje;
	            	   formModificaMaquinaria.tipoCombustible.value = "";
	            	   formModificaMaquinaria.capacidadCombustible.value = "";
	               }
	               else{
	            	   formModificaMaquinaria.rbtTipoMaquinariaModifica[1].setAttribute("checked",true);
	            	   formModificaMaquinaria.rbtTipoMaquinariaModifica[1].value ="combustible";
	            	   document.getElementById("capaModificaTipoElectrica").style.display="none";
	            	   document.getElementById("capaModificaTipoCombustible").style.display="block";
	            	   formModificaMaquinaria.bateriaElectrica.value = "";
	            	   formModificaMaquinaria.voltajeElectrica.value = "";
	            	   formModificaMaquinaria.tipoCombustible.value = oAgromachine.getMaquinarias()[i].tipoC;
	            	   formModificaMaquinaria.capacidadCombustible.value = oAgromachine.getMaquinarias()[i].capacidad;
	               }
               }
           }
       }
	}
	
	 /* Método listar los maquinarias */
	function listarMaquinaria(){
		if(oAgromachine.getMaquinarias().length==0){
            alert("No hay ninguna maquinaria dada de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mMaquinarias").style.display="block";

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
	            tabla.setAttribute('id', 'tablaMaquinarias');
	            tabla.setAttribute('class', 'text-center');
	            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            thead.insertRow(0); // Añadir una fila a la sección <thead>

            // Añadir columnas de <thead>
            var cabecera;

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'ID';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Nombre';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Marca';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Precio';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Combustible';
            tabla.rows[0].appendChild(cabecera);

	            cabecera = document.createElement('th');
	            cabecera.setAttribute('class', 'text-center');
	            cabecera.innerHTML = 'Voltaje | Capacidad';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var maquinarias=oAgromachine.getMaquinarias();
            for(var i = maquinarias.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(maquinarias[i].id));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(maquinarias[i].nombre));

                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(maquinarias[i].marca));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(maquinarias[i].precio+"€"));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(maquinarias[i].bateria?maquinarias[i].bateria+" bat.":maquinarias[i].tipoC));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(maquinarias[i].voltaje?maquinarias[i].voltaje+"v":maquinarias[i].capacidad+"L"));

                tbody.insertRow(0);
            }
            
            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0);
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 6);
            	footer.innerHTML = maquinarias.length+" maquinarias listadas";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tMaquinaria").appendChild(tabla);
            document.getElementById("imprimirMaquinarias").addEventListener("click",imprime,false);
            document.getElementById("btnVolverMaquinaria").addEventListener("click",borraTablaMaquinaria,false);
        }
    }
	
    /* ------------- PROVEEDORES -------------- */

    function altaProveedor(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaProveedor").style.display="block";

		formAltaProveedor.reset();
        formAltaProveedor.envioProveedor.addEventListener("click",validaProveedor,false);
	}

	function bajaProveedor(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaProveedor").style.display="block";
		formBajaProveedor.reset();
		
		cargarSelectBajaProveedor();
		document.getElementById("proveedorBaja").addEventListener("click",cargarDatosBajaProveedor,false);

        formBajaProveedor.envioProveedor.addEventListener("click",validaProveedor,false);
	}
	function modificaProveedor(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaProveedor").style.display="block";
		formModificaProveedor.reset();
		
		var inputsFormModificaProveedor = document.querySelectorAll("#formModificaProveedor input");
		for(i=0;i<inputsFormModificaProveedor.length;i++){
			inputsFormModificaProveedor[i].setAttribute("disabled","disabled");
			inputsFormModificaProveedor[i].value = "";
        }
		
		cargarSelectModificaProveedor();
		document.getElementById("proveedorModifica").addEventListener("click",cargarDatosModificaProveedor,false);

        formModificaProveedor.envioProveedor.addEventListener("click",validaProveedor,false);
	}
	
	function validaProveedor(){
        var error="";
        var cancelarEnvio=false;
        var focus=false;
        var formulario;
        var cif;
        //Recogemos datos de los Proveedores
        if(document.getElementById("altaProveedor").style.display == "block"){
        	formulario = formAltaProveedor;
        	cif = formulario.cifProveedor;
        }
        if(document.getElementById("bajaProveedor").style.display == "block"){
        	formulario = formBajaProveedor;
        	selectProveedor = formulario.proveedorBaja;
        	cif = formulario.proveedorBaja.options[formulario.proveedorBaja.selectedIndex];
        }
    	if(document.getElementById("modificaProveedor").style.display == "block"){
        	formulario = formModificaProveedor;
        	selectProveedor = formulario.proveedorModifica;
    		cif = formModificaProveedor.proveedorModifica.options[formModificaProveedor.proveedorModifica.selectedIndex];
		}
    	
        var nombre = formulario.nombreProveedor;
        var direccion = formulario.direccionProveedor;
        var localidad = formulario.localidadProveedor;
        var cp = formulario.cpProveedor;
        var telefono = formulario.telefonoProveedor;
        //Comprobamos que se este editando
        
        if(document.getElementById("altaProveedor").style.display == "block"){
	        /*Comprobamos CIF de Proveedor*/
	        if(/^\d{8}[a-zA-Z]$/.test(cif.value)){
	            cif.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en el cif. (12345678A)\n";
	            cif.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            cif.focus();
	            focus=true;
	        }
	        /*Comprobamos que CIF de Persona no exista */
	        if(oAgromachine.compruebaCIF(cif.value)==false){
	            cif.setAttribute("class","form-control");
	        }
	        else{
	            error+="CIF pertenece a otra empresa.\n";
	            cif.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            cif.focus();
	            focus=true;
	        }
        }
        else{
        	if(selectProveedor.selectedIndex > 0 ){
        		selectProveedor.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona cif\n";
        		selectProveedor.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectProveedor.focus();
	            focus=true;
        	}
        }

        /*Comprobamos Nombre de Proveedor*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(nombre.value)){
            nombre.setAttribute("class","form-control");
        }
        else{
            error+="Error en el nombre.\n";
            nombre.setAttribute("class","form-control error");
            cancelarEnvio=true;
            nombre.focus();
            focus=true;
        }

        /*Comprobamos Direccion de Proveedor*/
        if(/^[A-Za-z0-9\s\,\(\)\.\wáéíóúÁÉÍÓÚ]{3,40}$/.test(direccion.value)){
                direccion.setAttribute("class","form-control");
        }
        else{
            error+="Error en la dirección.\n";
            direccion.setAttribute("class","form-control error");
            cancelarEnvio=true;
            direccion.focus();
            focus=true;
        }
        /*Comprobamos Localidad de Proveedor*/
        if(/^[A-Za-z\s\,\(\)\wáéíóúÁÉÍÓÚ]{3,40}$/.test(localidad.value)){
            localidad.setAttribute("class","form-control");
        }
        else{
            error+="Error en la localidad.\n";
            localidad.setAttribute("class","form-control error");
            cancelarEnvio=true;
            localidad.focus();
            focus=true;
        }
        /*Comprobamos CP de Proveedor*/
        if(/^[0-9]{5}$/.test(cp.value)){
            cp.setAttribute("class","form-control");
        }
        else{
            error+="Error en el código postal.\n";
            cp.setAttribute("class","form-control error");
            cancelarEnvio=true;
            cp.focus();
            focus=true;
        }

        /*Comprobamos Teléfono de Proveedor*/
        if(/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(telefono.value)){
            telefono.setAttribute("class","form-control");
        }
        else{
            error+="Error en el teléfono. (987654321)\n";
            telefono.setAttribute("class","form-control error");
            cancelarEnvio=true;
            telefono.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaProveedor").style.display == "block"){
                oAgromachine.borraProveedor(cif.value);
                alert("Proveedor eliminado");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaProveedor").style.display == "block" ){
	            	oAgromachine.borraProveedor(cif.value);
	            	sMensaje = "Proveedor modificado:\n";
	            }

	            if(document.getElementById("altaProveedor").style.display == "block"){ 
	            	sMensaje = "Proveedor dado de alta:\n";
	            }
	            var oProveedor = new Proveedor(cif.value, nombre.value, direccion.value,localidad.value, cp.value, telefono.value);
	            oAgromachine.altaProveedor(oProveedor);
	
            	sMensaje += "CIF: "+cif.value +"\n" +
			                "Nombre: " +nombre.value +"\n" +
			                "Dirección: " +direccion.value +"\n" +
			                "Localidad: "+localidad.value +"\n" +
			                "CP: "+cp.value +"\n" +
			                "Teléfono: " +telefono.value +".";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
    }
	
	 /* Método para cargar los options del select */
	function cargarSelectBajaProveedor(){
        var select = document.getElementById("proveedorBaja");
        
        //Limpiamos select anterior
        for (var i=select.length-1; i>0 ; i--) {
        	if(select.options.length>1){
        		select.removeChild(select.options[i]);
        	}
        }
        
        //Generamos option
        var options = [];
        for(var i=0;i<oAgromachine.getProveedores().length;i++){
            options[i]=oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono;
            console.log(oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono+"\n");
        }
        
        //Rellenamos select
        for(var i=0; i<options.length; i++){
            opt = options[i];
            var el = document.createElement("option");
            	el.textContent = opt;
            	el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 
	 /* Método para cargar los datos del select al formulario */
	function cargarDatosBajaProveedor(){
		var seleccionado = document.getElementById("proveedorBaja");
	
		if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formBajaProveedor input").length;i++){
                document.querySelectorAll("#formBajaProveedor input")[i].value = "";
                document.querySelectorAll("#formBajaProveedor input")[i].setAttribute("disabled",true);
            }
		 }
        else{
            for(var i=0;i<oAgromachine.getProveedores().length;i++){
                if(oAgromachine.getProveedores()[i].cif == seleccionado.options[seleccionado.selectedIndex].value){
                	formBajaProveedor.nombreProveedor.value = oAgromachine.getProveedores()[i].nombre;
                    formBajaProveedor.direccionProveedor.value = oAgromachine.getProveedores()[i].direccion;
                    formBajaProveedor.localidadProveedor.value = oAgromachine.getProveedores()[i].localidad;
                    formBajaProveedor.cpProveedor.value = oAgromachine.getProveedores()[i].cp;
                    formBajaProveedor.telefonoProveedor.value = oAgromachine.getProveedores()[i].telefono;
                }
            }
            for(i=0;i<document.querySelectorAll("#formBajaProveedor input").length;i++){
                document.querySelectorAll("#formBajaProveedor input")[i].setAttribute("disabled",true);
            }
        }
	}

	 /* Método para cargar los options del select */
	function cargarSelectModificaProveedor(){
        var select = document.getElementById("proveedorModifica");

        //Limpiamos select anterior
        for (i = 0; i < oAgromachine.getProveedores().length; i++) {
        	  select.options[1] = null;
    	}

        //Generamos option
        var options = [];
        for(var i=0;i<oAgromachine.getProveedores().length;i++){
            options[i]=oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono;
        }

        //Rellenamos select
        for(var i = 0; i < options.length; i++){
            opt = options[i];
            el = document.createElement("option");
            el.textContent = opt;
            el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 /* Método para cargar los datos del select al formulario */
	function cargarDatosModificaProveedor(){
		var seleccionado = document.getElementById("proveedorModifica");
		
		 if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formModificaProveedor input").length;i++){
                document.querySelectorAll("#formModificaProveedor input")[i].setAttribute("disabled","disabled");
                document.querySelectorAll("#formModificaProveedor input")[i].value = "";
            }
		 }
        else{
            for(i=0;i<document.querySelectorAll("#formModificaProveedor input").length;i++){
                document.querySelectorAll("#formModificaProveedor input")[i].removeAttribute("disabled");
            }

            for(var i=0;i<oAgromachine.getProveedores().length;i++){
                if(oAgromachine.getProveedores()[i].cif == seleccionado.options[seleccionado.selectedIndex].value){
                	formModificaProveedor.nombreProveedor.value = oAgromachine.getProveedores()[i].nombre;
                    formModificaProveedor.direccionProveedor.value = oAgromachine.getProveedores()[i].direccion;
                    formModificaProveedor.localidadProveedor.value = oAgromachine.getProveedores()[i].localidad;
                    formModificaProveedor.cpProveedor.value = oAgromachine.getProveedores()[i].cp;
                    formModificaProveedor.telefonoProveedor.value = oAgromachine.getProveedores()[i].telefono;
                }
            }
        }
	}
	
	/* Método para listar los Proveedores */
	function listarProveedor(){
		if(oAgromachine.getProveedores().length==0){
            alert("No hay ningún proveedor dado de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mProveedores").style.display="block";
		

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
            tabla.setAttribute('id', 'tablaProveedores');
            tabla.setAttribute('class', 'text-center');
            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            // Añadir una fila a la sección <thead>
            thead.insertRow(0);

            // Añadir las tres columnas de la fila de <thead>
            var cabecera;

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'CIF';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Nombre';
            tabla.rows[0].appendChild(cabecera);
            
            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Dirección';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Localidad';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'CP';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Teléfono';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var proveedores=oAgromachine.getProveedores();
            for(var i = proveedores.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(proveedores[i].cif));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(proveedores[i].nombre));
                
                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(proveedores[i].direccion));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(proveedores[i].localidad));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(proveedores[i].cp));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(proveedores[i].telefono));
                tbody.insertRow(0);
            }

            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0);
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 6);
            	footer.innerHTML = proveedores.length+" proveedores listados";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tProveedor").appendChild(tabla);
            document.getElementById("imprimirProveedores").addEventListener("click",imprime,false);
            document.getElementById("btnVolverProveedor").addEventListener("click",borraTablaProveedor,false);
        }
    }
	
	/* ------------- EMPLEADOS -------------- */

    function altaEmpleado(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaEmpleado").style.display="block";

		formAltaEmpleado.reset();
        formAltaEmpleado.envioEmpleado.addEventListener("click",validaEmpleado,false);
	}

	function bajaEmpleado(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaEmpleado").style.display="block";
		formBajaEmpleado.reset();
		
		cargarSelectBajaEmpleado();
		document.getElementById("empleadoBaja").addEventListener("click",cargarDatosBajaEmpleado,false);

        formBajaEmpleado.envioEmpleado.addEventListener("click",validaEmpleado,false);
	}
	function modificaEmpleado(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaEmpleado").style.display="block";
		formModificaEmpleado.reset();
		
		var inputsFormModificaEmpleado = document.querySelectorAll("#formModificaEmpleado input");
		for(i=0;i<inputsFormModificaEmpleado.length;i++){
			inputsFormModificaEmpleado[i].setAttribute("disabled","disabled");
			inputsFormModificaEmpleado[i].value = "";
        }
		
		cargarSelectModificaEmpleado();
		document.getElementById("empleadoModifica").addEventListener("click",cargarDatosModificaEmpleado,false);

        formModificaEmpleado.envioEmpleado.addEventListener("click",validaEmpleado,false);
	}
	
	function validaEmpleado(){
        var error="";
        var cancelarEnvio=false;
        var focus=false;
        var formulario;
        var dni;
        //Recogemos datos de los Empleados
        if(document.getElementById("altaEmpleado").style.display == "block"){
        	formulario = formAltaEmpleado;
        	dni = formulario.dniEmpleado;
        }
        if(document.getElementById("bajaEmpleado").style.display == "block"){
        	formulario = formBajaEmpleado;
        	selectEmpleado = formulario.empleadoBaja;
    		dni = formulario.empleadoBaja.options[formulario.empleadoBaja.selectedIndex];
        }
    	if(document.getElementById("modificaEmpleado").style.display == "block"){
        	formulario = formModificaEmpleado;
        	selectEmpleado = formulario.empleadoModifica;
    		dni = formModificaEmpleado.empleadoModifica.options[formModificaEmpleado.empleadoModifica.selectedIndex];
		}
    	
        var nombre = formulario.nombreEmpleado;
        var apellidos = formulario.apellidosEmpleado;
        var rol = formulario.rolEmpleado;
        var direccion = formulario.direccionEmpleado;
        var localidad = formulario.localidadEmpleado;
        var cp = formulario.cpEmpleado;
        var telefono = formulario.telefonoEmpleado;
        //Comprobamos que se este editando
        
        if(document.getElementById("altaEmpleado").style.display == "block"){
	        /*Comprobamos DNI de Empleado*/
	        if(/^\d{8}[a-zA-Z]$/.test(dni.value)){
	            dni.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en el dni. (12345678A)\n";
	            dni.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            dni.focus();
	            focus=true;
	        }
	        /*Comprobamos que DNI de Persona no exista */
	        if(oAgromachine.compruebaDNI(dni.value)==false){
	            dni.setAttribute("class","form-control");
	        }
	        else{
	            error+="DNI pertenece a otra persona.\n";
	            dni.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            dni.focus();
	            focus=true;
	        }
        }
        else{
        	if(selectEmpleado.selectedIndex > 0 ){
        		selectEmpleado.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona dni\n";
        		selectEmpleado.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectEmpleado.focus();
	            focus=true;
        	}
        }

        /*Comprobamos Nombre de Empleado*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(nombre.value)){
            nombre.setAttribute("class","form-control");
        }
        else{
            error+="Error en el nombre.\n";
            nombre.setAttribute("class","form-control error");
            cancelarEnvio=true;
            nombre.focus();
            focus=true;
        }

        /*Comprobamos Apellidos de Empleado*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(apellidos.value)){
            apellidos.setAttribute("class","form-control");
        }
        else{
            error+="Error en los apellidos.\n";
            apellidos.setAttribute("class","form-control error");
            cancelarEnvio=true;
            apellidos.focus();
            focus=true;
        }
        
        /*Comprobamos Rol de Empleado*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(rol.value)){
            rol.setAttribute("class","form-control");
        }
        else{
            error+="Error en el rol.\n";
            rol.setAttribute("class","form-control error");
            cancelarEnvio=true;
            rol.focus();
            focus=true;
        }

        /*Comprobamos Direccion de Empleado*/
        if(/^[A-Za-z0-9\s\,\(\)\.\wáéíóúÁÉÍÓÚ]{3,40}$/.test(direccion.value)){
                direccion.setAttribute("class","form-control");
        }
        else{
            error+="Error en la dirección.\n";
            direccion.setAttribute("class","form-control error");
            cancelarEnvio=true;
            direccion.focus();
            focus=true;
        }
        /*Comprobamos Localidad de Empleado*/
        if(/^[A-Za-z\s\,\(\)\wáéíóúÁÉÍÓÚ]{3,40}$/.test(localidad.value)){
            localidad.setAttribute("class","form-control");
        }
        else{
            error+="Error en la localidad.\n";
            localidad.setAttribute("class","form-control error");
            cancelarEnvio=true;
            localidad.focus();
            focus=true;
        }
        /*Comprobamos CP de Empleado*/
        if(/^[0-9]{5}$/.test(cp.value)){
            cp.setAttribute("class","form-control");
        }
        else{
            error+="Error en el código postal.\n";
            cp.setAttribute("class","form-control error");
            cancelarEnvio=true;
            cp.focus();
            focus=true;
        }

        /*Comprobamos Teléfono de Empleado*/
        if(/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(telefono.value)){
            telefono.setAttribute("class","form-control");
        }
        else{
            error+="Error en el teléfono. (987654321)\n";
            telefono.setAttribute("class","form-control error");
            cancelarEnvio=true;
            telefono.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaEmpleado").style.display == "block"){
                oAgromachine.borraEmpleado(dni.value);
                alert("Empleado eliminado");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaEmpleado").style.display == "block" ){
	            	oAgromachine.borraEmpleado(dni.value);
	            	sMensaje = "Empleado modificado:\n";
	            }

	            if(document.getElementById("altaEmpleado").style.display == "block"){ 
	            	sMensaje = "Empleado dado de alta:\n";
	            }
	            var oEmpleado = new Empleado(dni.value, nombre.value, apellidos.value, rol.value, direccion.value,localidad.value, cp.value, telefono.value);
	            oAgromachine.altaEmpleado(oEmpleado);
	
            	sMensaje += "DNI: "+dni.value +"\n" +
			                "Nombre: " +nombre.value +"\n" +
			                "Apellidos: " +apellidos.value +"\n" +
			                "Rol: " +rol.value +"\n" +
			                "Dirección: " +direccion.value +"\n" +
			                "Localidad: "+localidad.value +"\n" +
			                "CP: "+cp.value +"\n" +
			                "Teléfono: " +telefono.value +".";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
    }
	
	 /* Método para cargar los options del select */
	function cargarSelectBajaEmpleado(){
        var select = document.getElementById("empleadoBaja");
        
        //Limpiamos select anterior
        for (var i=select.length-1; i>0 ; i--) {
        	if(select.options.length>1){
        		select.removeChild(select.options[i]);
        	}
        }
        
        //Generamos option
        var options = [];
        for(var i=0;i<oAgromachine.getEmpleados().length;i++){
            options[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
            console.log(oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono+"\n");
        }
        
        //Rellenamos select
        for(var i=0; i<options.length; i++){
            opt = options[i];
            var el = document.createElement("option");
            	el.textContent = opt;
            	el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 
	 /* Método para cargar los datos del select al formulario */
	function cargarDatosBajaEmpleado(){
		var seleccionado = document.getElementById("empleadoBaja");
	
		if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formBajaEmpleado input").length;i++){
                document.querySelectorAll("#formBajaEmpleado input")[i].value = "";
                document.querySelectorAll("#formBajaEmpleado input")[i].setAttribute("disabled",true);
            }
		 }
        else{
            for(var i=0;i<oAgromachine.getEmpleados().length;i++){
                if(oAgromachine.getEmpleados()[i].dni == seleccionado.options[seleccionado.selectedIndex].value){
                	formBajaEmpleado.nombreEmpleado.value = oAgromachine.getEmpleados()[i].nombre;
                    formBajaEmpleado.apellidosEmpleado.value = oAgromachine.getEmpleados()[i].apellidos;
                    formBajaEmpleado.rolEmpleado.value = oAgromachine.getEmpleados()[i].rol;
                    formBajaEmpleado.direccionEmpleado.value = oAgromachine.getEmpleados()[i].direccion;
                    formBajaEmpleado.localidadEmpleado.value = oAgromachine.getEmpleados()[i].localidad;
                    formBajaEmpleado.cpEmpleado.value = oAgromachine.getEmpleados()[i].cp;
                    formBajaEmpleado.telefonoEmpleado.value = oAgromachine.getEmpleados()[i].telefono;
                }
            }
            for(i=0;i<document.querySelectorAll("#formBajaEmpleado input").length;i++){
                document.querySelectorAll("#formBajaEmpleado input")[i].setAttribute("disabled",true);
            }
        }
	}

	 /* Método para cargar los options del select */
	function cargarSelectModificaEmpleado(){
        var select = document.getElementById("empleadoModifica");

        //Limpiamos select anterior
        for (i = 0; i < oAgromachine.getEmpleados().length; i++) {
        	  select.options[1] = null;
    	}

        //Generamos option
        var options = [];
        for(var i=0;i<oAgromachine.getEmpleados().length;i++){
            options[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }

        //Rellenamos select
        for(var i = 0; i < options.length; i++){
            opt = options[i];
            el = document.createElement("option");
            el.textContent = opt;
            el.value = options[i].substr(0,9);
            select.appendChild(el);
        }
	}

	 /* Método para cargar los datos del select al formulario */
	function cargarDatosModificaEmpleado(){
		var seleccionado = document.getElementById("empleadoModifica");
		
		 if(seleccionado.selectedIndex==0) {
            for(i=0;i<document.querySelectorAll("#formModificaEmpleado input").length;i++){
                document.querySelectorAll("#formModificaEmpleado input")[i].setAttribute("disabled","disabled");
                document.querySelectorAll("#formModificaEmpleado input")[i].value = "";
            }
		 }
        else{
            for(i=0;i<document.querySelectorAll("#formModificaEmpleado input").length;i++){
                document.querySelectorAll("#formModificaEmpleado input")[i].removeAttribute("disabled");
            }

            for(var i=0;i<oAgromachine.getEmpleados().length;i++){
                if(oAgromachine.getEmpleados()[i].dni == seleccionado.options[seleccionado.selectedIndex].value){
                	formModificaEmpleado.nombreEmpleado.value = oAgromachine.getEmpleados()[i].nombre;
                    formModificaEmpleado.apellidosEmpleado.value = oAgromachine.getEmpleados()[i].apellidos;
                    formModificaEmpleado.rolEmpleado.value = oAgromachine.getEmpleados()[i].rol;
                    formModificaEmpleado.direccionEmpleado.value = oAgromachine.getEmpleados()[i].direccion;
                    formModificaEmpleado.localidadEmpleado.value = oAgromachine.getEmpleados()[i].localidad;
                    formModificaEmpleado.cpEmpleado.value = oAgromachine.getEmpleados()[i].cp;
                    formModificaEmpleado.telefonoEmpleado.value = oAgromachine.getEmpleados()[i].telefono;
                }
            }
        }
	}
	
	/* Método para listar los empleados */
	function listarEmpleado(){
		if(oAgromachine.getEmpleados().length==0){
            alert("No hay ningún empleado dado de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mEmpleados").style.display="block";
		

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
            tabla.setAttribute('id', 'tablaEmpleados');
            tabla.setAttribute('class', 'text-center');
            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            // Añadir una fila a la sección <thead>
            thead.insertRow(0);

            // Añadir las tres columnas de la fila de <thead>
            var cabecera;

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'DNI';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Nombre';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Apellidos';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Rol';
            tabla.rows[0].appendChild(cabecera);
            
            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Dirección';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Localidad';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'CP';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Teléfono';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var empleados=oAgromachine.getEmpleados();
            for(var i = empleados.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(empleados[i].dni));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(empleados[i].nombre));

                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(empleados[i].apellidos));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(empleados[i].rol));
                
                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(empleados[i].direccion));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(empleados[i].localidad));

                tbody.rows[0].insertCell(6);
                tbody.rows[0].cells[6].appendChild(document.createTextNode(empleados[i].cp));

                tbody.rows[0].insertCell(7);
                tbody.rows[0].cells[7].appendChild(document.createTextNode(empleados[i].telefono));
                tbody.insertRow(0);
            }

            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0);
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 8);
            	footer.innerHTML = empleados.length+" empleados listados";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tEmpleado").appendChild(tabla);
            document.getElementById("imprimirEmpleados").addEventListener("click",imprime,false);
            document.getElementById("btnVolverEmpleado").addEventListener("click",borraTablaEmpleado,false);
        }
    }

	/* ------------- COMPRAS -------------- */

    function altaCompra(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaCompra").style.display="block";
		formAltaCompra.reset();
		cargarIdCompra();
		cargarFecha(formAltaCompra.fechaCompra);
		cargarSelectAltaCompra();
        formAltaCompra.envioCompra.addEventListener("click",validaCompra,false);
	}

    function cargarIdCompra(){
    	var idCompra = formAltaCompra.idCompra;
    	var compras = oAgromachine.getCompras();
    	var ultimaCompra=0;
    	if(compras.length>0)
    		ultimaCompra = compras[compras.length - 1].id;

    	var actualCompra = parseInt(ultimaCompra)+1;
    	var cadena=anadirCeros(actualCompra,5);
    	idCompra.value = cadena;
    }
    
	function bajaCompra(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaCompra").style.display="block";
		formBajaCompra.reset();
		cargarSelectBajaCompra();
		document.getElementById("compraBajaCompra").addEventListener("click",cargarDatosBajaCompra,false);

        formBajaCompra.envioCompra.addEventListener("click",validaCompra,false);
	}
	function modificaCompra(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaCompra").style.display="block";
		formModificaCompra.reset();
		
		cargarSelectModificaCompra();
		document.getElementById("compraModificaCompra").addEventListener("click",cargarDatosModificaCompra,false);

        formModificaCompra.envioCompra.addEventListener("click",validaCompra,false);
	}
	
	function validaCompra(){
		var error=""; 
        var cancelarEnvio=false;
        var focus=false;
        
        var formulario;
        var idCompra, selectCompra;
        var idEmpleado, selectEmpleado;
        var idProveedor, selectProveedor;
        var idMaquinaria, selectMaquinaria;
        
        //Recogemos datos de las Incidencias
        if(document.getElementById("altaCompra").style.display == "block"){
        	formulario = formAltaCompra;
        	idCompra = formulario.idCompra;
        	selectEmpleado = formulario.empleadoAltaCompra;
        	selectProveedor = formulario.proveedorAltaCompra;
        	selectMaquinaria = formulario.maquinariaAltaCompra;
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idProveedor = selectProveedor.options[selectProveedor.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
        if(document.getElementById("bajaCompra").style.display == "block"){
        	formulario = formBajaCompra;
        	selectCompra = formulario.compraBajaCompra;
        	selectEmpleado = formulario.empleadoBajaCompra;
        	selectProveedor = formulario.proveedorBajaCompra;
        	selectMaquinaria = formulario.maquinariaBajaCompra;
        	idCompra = selectCompra.options[selectCompra.selectedIndex];
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idProveedor = selectProveedor.options[selectProveedor.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
    	if(document.getElementById("modificaCompra").style.display == "block"){
        	formulario = formModificaCompra;
        	selectCompra = formulario.compraModificaCompra;
        	selectEmpleado = formulario.empleadoModificaCompra;
        	selectProveedor = formulario.proveedorModificaCompra;
        	selectMaquinaria = formulario.maquinariaModificaCompra;
        	idCompra = selectCompra.options[selectCompra.selectedIndex];
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idProveedor = selectProveedor.options[selectProveedor.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
		}
    	var cuantia = formulario.cuantiaCompra;
        var fecha = formulario.fechaCompra;
	        
        //Comprobamos que estemos en altaCompra
        if(document.getElementById("altaCompra").style.display == "block"){
	        /*Comprobamos ID de Compra*/
	        if(/^\d{5}$/.test(idCompra.value)){
	        	idCompra.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en la id. (00001)\n";
	            idCompra.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            idCompra.focus();
	            focus=true;
	        }
        }
        else{
            /*Comprobamos select de Compra*/
        	if(selectCompra.selectedIndex > 0 ){
        		selectCompra.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona compra\n";
        		selectCompra.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectCompra.focus();
	            focus=true;
        	}
        }
        /*Comprobamos select de Empleado*/
    	if(selectEmpleado.selectedIndex > 0 ){
    		selectEmpleado.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona empleado\n";
    		selectEmpleado.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectEmpleado.focus();
            focus=true;
    	}
        /*Comprobamos select de Proveedor*/
    	if(selectProveedor.selectedIndex > 0 ){
    		selectProveedor.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona proveedor\n";
    		selectProveedor.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectProveedor.focus();
            focus=true;
    	}
        /*Comprobamos select de Maquinaria*/
    	if(selectMaquinaria.selectedIndex > 0 ){
    		selectMaquinaria.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona maquinaria\n";
    		selectMaquinaria.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectMaquinaria.focus();
            focus=true;
    	}
    	 /*Comprobamos cuantia de Compra*/
        if(/^[0-9]+(\.[0-9][0-9])?$/.test(cuantia.value)){
        	cuantia.setAttribute("class","form-control");
        }
        else{
            error+="Error en la cuantía (€).\n";
            cuantia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            cuantia.focus();
            focus=true;
        }
    	
    	/*Comprobamos fecha correcta*/
        if(fecha.value!="" && fecha.value!=null){
            /*if(isValidDate(fecha.value)==true){
                fecha.setAttribute("class","form-control");
            }
            else{
                error+="Esa fecha nunca existió\n";
                fecha.setAttribute("class","form-control error");
                cancelarEnvio=true;
                fecha.focus();
                focus=true;
            }*/
        }
        else{
            error+="Error en la fecha de compra (DD/MM/AAAA)\n";
            fecha.setAttribute("class","form-control error");
            cancelarEnvio=true;
            fecha.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaCompra").style.display == "block"){
                oAgromachine.borraCompra(idCompra.value);
                alert("Compra anulada");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaCompra").style.display == "block" ){
	            	oAgromachine.borraCompra(idCompra.value);
	            	sMensaje = "Compra modificada:\n";
	            }

	            if(document.getElementById("altaCompra").style.display == "block"){ 
	            	sMensaje = "Compra dada de alta:\n";
	            }
	            var oEmpleado = oAgromachine.obtenerEmpleado(idEmpleado.value);
	            var oProveedor = oAgromachine.obtenerProveedor(idProveedor.value);
	            var oMaquinaria = oAgromachine.obtenerMaquinaria(idMaquinaria.value);
	            var oCompra = new Compra(idCompra.value,oEmpleado,oProveedor, oMaquinaria, cuantia.value, fecha.value);
	            console.log(oCompra);
	            oAgromachine.altaCompra(oCompra);
	            sMensaje += "ID: "+idCompra.value +"\n" +
			                "Empleado: " +oEmpleado.dni +" " +oEmpleado.nombre +" " +oEmpleado.apellidos+" - " +oEmpleado.rol +"\n" +
			                "Proveedor: " +oProveedor.cif +" " +oProveedor.nombre +"\n" +
			                "Maquinaria: " +oMaquinaria.id +" " +oMaquinaria.nombre +" " +oMaquinaria.marca +"\n" +
			                "Cuantía: " +cuantia.value +"€\n" +
			                "Fecha: " +fecha.value +"\n";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectAltaCompra(){
    	var select1 = document.getElementById("empleadoAltaCompra");
    	var select2 = document.getElementById("proveedorAltaCompra");
    	var select3 = document.getElementById("maquinariaAltaCompra");
     
    	//Limpiamos select anterior
    	for (var i=select1.length-1; i>0 ; i--) {
    		if(select1.options.length>1){
    			select1.removeChild(select1.options[i]);
    		}
    	}
    	for (var i=select2.length-1; i>0 ; i--) {
    		if(select2.options.length>1){
    			select2.removeChild(select2.options[i]);
    		}
    	}
    	for (var i=select3.length-1; i>0 ; i--) {
    		if(select3.options.length>1){
    			select3.removeChild(select3.options[i]);
    		}
    	}
     
    	//Generamos option
    	var options1 = [],options2 = [],options3 = [];
    	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
    		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
    	for(var i=0;i<oAgromachine.getProveedores().length;i++){
    		options2[i]=oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono;
        }
    	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
        	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
    	}
    	
    	
	    //Rellenamos select
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectBajaCompra(){
	    var select = document.getElementById("compraBajaCompra");
	   	var select1 = document.getElementById("empleadoBajaCompra");
	   	var select2 = document.getElementById("proveedorBajaCompra");
	   	var select3 = document.getElementById("maquinariaBajaCompra");
	    
	   	//Limpiamos select anterior
	   	for (var i=select.length-1; i>0 ; i--) {
	   		if(select.options.length>1){
	   			select.removeChild(select.options[i]);
	   		}
	   	}
	   	for (var i=select1.length-1; i>0 ; i--) {
	   		if(select1.options.length>1){
	   			select1.removeChild(select1.options[i]);
	   		}
	   	}
	   	for (var i=select2.length-1; i>0 ; i--) {
	   		if(select2.options.length>1){
	   			select2.removeChild(select2.options[i]);
	   		}
	   	}
	   	for (var i=select3.length-1; i>0 ; i--) {
	   		if(select3.options.length>1){
	   			select3.removeChild(select3.options[i]);
	   		}
	   	}
	    
	   	//Generamos option
	   	var options = [], options1 = [], options2 = [], options3 = [];
	   	for(var i=0;i<oAgromachine.getCompras().length;i++){
	   		 options[i]=oAgromachine.getCompras()[i].id +" -{ Empleado: " +oAgromachine.getCompras()[i].empleado.dni+" }-{ Proveedor: " +oAgromachine.getCompras()[i].proveedor.cif +", " +oAgromachine.getCompras()[i].proveedor.localidad +" }-{ Maquinaria: " +oAgromachine.getCompras()[i].maquinaria.nombre +" }- " +oAgromachine.getCompras()[i].cuantia+"€";
        }
	   	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
	   		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getProveedores().length;i++){
	   		options2[i]=oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
	       	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
	   	}
   	
	  //Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options[i].substr(0,5);
	     	select.appendChild(el);
	 	}
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectModificaCompra(){
	    var select = document.getElementById("compraModificaCompra");
	   	var select1 = document.getElementById("empleadoModificaCompra");
	   	var select2 = document.getElementById("proveedorModificaCompra");
	   	var select3 = document.getElementById("maquinariaModificaCompra");
	    
	   	//Limpiamos select anterior
	   	for (var i=select.length-1; i>0 ; i--) {
	   		if(select.options.length>1){
	   			select.removeChild(select.options[i]);
	   		}
	   	}
	   	for (var i=select1.length-1; i>0 ; i--) {
	   		if(select1.options.length>1){
	   			select1.removeChild(select1.options[i]);
	   		}
	   	}
	   	for (var i=select2.length-1; i>0 ; i--) {
	   		if(select2.options.length>1){
	   			select2.removeChild(select2.options[i]);
	   		}
	   	}
	   	for (var i=select3.length-1; i>0 ; i--) {
	   		if(select3.options.length>1){
	   			select3.removeChild(select3.options[i]);
	   		}
	   	}
	    
	   	//Generamos option
	   	var options = [], options1 = [], options2 = [], options3 = [];
	   	for(var i=0;i<oAgromachine.getCompras().length;i++){
	   		 options[i]=oAgromachine.getCompras()[i].id +" -{ Empleado: " +oAgromachine.getCompras()[i].empleado.dni+" }-{ Proveedor: " +oAgromachine.getCompras()[i].proveedor.cif +", " +oAgromachine.getCompras()[i].proveedor.localidad +" }-{ Maquinaria: " +oAgromachine.getCompras()[i].maquinaria.nombre +" }- " +oAgromachine.getCompras()[i].cuantia+"€";
        }
	   	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
	   		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getProveedores().length;i++){
	   		options2[i]=oAgromachine.getProveedores()[i].cif +" - " +oAgromachine.getProveedores()[i].nombre +" - " +oAgromachine.getProveedores()[i].localidad +", " +oAgromachine.getProveedores()[i].cp +" - " +oAgromachine.getProveedores()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
	       	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
	   	}
   	
	  //Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options[i].substr(0,5);
	     	select.appendChild(el);
	 	}
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	function cargarDatosBajaCompra(){
		var seleccionado = document.getElementById("compraBajaCompra");
		var select1 = document.getElementById("empleadoBajaCompra");
		var select2 = document.getElementById("proveedorBajaCompra");
		var select3 = document.getElementById("maquinariaBajaCompra");
		var compras = oAgromachine.getCompras();

		if(seleccionado.selectedIndex==0) {
			select1.selectedIndex=0;select1.setAttribute("disabled",true);
			select2.selectedIndex=0;select2.setAttribute("disabled",true);
			select3.selectedIndex=0;select3.setAttribute("disabled",true);
			formBajaCompra.cuantiaCompra.value="";formBajaCompra.cuantiaCompra.setAttribute("disabled",true);
			formBajaCompra.fechaCompra.value="";formBajaCompra.fechaCompra.setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<compras.length;i++){
				if(compras[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					select1.value = compras[i].empleado.dni; 
					select2.value = compras[i].proveedor.cif; 
					select3.value = compras[i].maquinaria.id; 
					formBajaCompra.cuantiaCompra.value = compras[i].cuantia; 
					formBajaCompra.fechaCompra.value = compras[i].fecha;
				}
			}
		}
	}
	
	function cargarDatosModificaCompra(){
		var seleccionado = document.getElementById("compraModificaCompra");
		var select1 = document.getElementById("empleadoModificaCompra");
		var select2 = document.getElementById("proveedorModificaCompra");
		var select3 = document.getElementById("maquinariaModificaCompra");
		var compras = oAgromachine.getCompras();
		
		if(seleccionado.selectedIndex==0) {
			select1.selectedIndex=0;select1.setAttribute("disabled",true);
			select2.selectedIndex=0;select2.setAttribute("disabled",true);
			select3.selectedIndex=0;select3.setAttribute("disabled",true);
			formBajaCompra.cuantiaCompra.value="";formBajaCompra.cuantiaCompra.setAttribute("disabled",true);
			formBajaCompra.fechaCompra.value="";formBajaCompra.fechaCompra.setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<oAgromachine.getCompras().length;i++){
				if(compras[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					select1.value = compras[i].empleado.dni; select1.removeAttribute("disabled");
					select2.value = compras[i].proveedor.cif; select2.removeAttribute("disabled");
					select3.value = compras[i].maquinaria.id; select3.removeAttribute("disabled");
					formModificaCompra.cuantiaCompra.value = compras[i].cuantia; formModificaCompra.cuantiaCompra.removeAttribute("disabled");
					formModificaCompra.fechaCompra.value = compras[i].fecha;
				}
			}
		}
	}
	
	/* Método para listar las Compras */
	function listarCompra(){
		if(oAgromachine.getCompras().length==0){
            alert("No hay ningúna compra dada de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mCompras").style.display="block";
		

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
            tabla.setAttribute('id', 'tablaCompras');
            tabla.setAttribute('class', 'text-center');
            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            // Añadir una fila a la sección <thead>
            thead.insertRow(0);

            // Añadir las tres columnas de la fila de <thead>
            var cabecera;

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'ID';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Empleado';
            tabla.rows[0].appendChild(cabecera);
            
            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Proveedor';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Maquinaria';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Cuantía';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Fecha';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var compras=oAgromachine.getCompras();
            for(var i = compras.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(compras[i].id));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(compras[i].empleado.dni +" - " +compras[i].empleado.apellidos +", " +compras[i].empleado.nombre +" - " +compras[i].empleado.rol));
                
                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(compras[i].proveedor.cif +" - " +compras[i].proveedor.nombre +" - " +compras[i].proveedor.localidad));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(compras[i].maquinaria.id +" - " +compras[i].maquinaria.nombre +" - " +compras[i].maquinaria.marca));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(compras[i].cuantia+"€"));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(compras[i].fecha));
                tbody.insertRow(0);
            }

            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0); 
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 6);
            	footer.innerHTML = compras.length+" compras listadas";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tCompra").appendChild(tabla);
            document.getElementById("imprimirCompras").addEventListener("click",imprime,false);
            document.getElementById("btnVolverCompra").addEventListener("click",borraTablaCompra,false);
        }
    }

	/* ------------- ALQUILERES -------------- */

    function altaAlquiler(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaAlquiler").style.display="block";
		formAltaAlquiler.reset();
		cargarIdAlquiler();
		cargarFechas();
		cargarSelectAltaAlquiler();
        formAltaAlquiler.envioAlquiler.addEventListener("click",validaAlquiler,false);
	}

    function cargarIdAlquiler(){
    	var idAlquiler = formAltaAlquiler.idAlquiler;
    	var alquileres = oAgromachine.getAlquileres();
    	var ultimoAlquiler=0;
    	if(alquileres.length>0)
    		ultimoAlquiler = alquileres[alquileres.length - 1].id;
    	var actualAlquiler = parseInt(ultimoAlquiler)+1;
    	var cadena=anadirCeros(actualAlquiler,5);
    	idAlquiler.value = cadena;
    }
    
	function bajaAlquiler(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaAlquiler").style.display="block";
		formBajaAlquiler.reset();
		cargarSelectBajaAlquiler();
		document.getElementById("alquilerBajaAlquiler").addEventListener("click",cargarDatosBajaAlquiler,false);

        formBajaAlquiler.envioAlquiler.addEventListener("click",validaAlquiler,false);
	}
	function modificaAlquiler(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaAlquiler").style.display="block";
		formModificaAlquiler.reset();
		
		cargarSelectModificaAlquiler();
		document.getElementById("alquilerModificaAlquiler").addEventListener("click",cargarDatosModificaAlquiler,false);

        formModificaAlquiler.envioAlquiler.addEventListener("click",validaAlquiler,false);
	}
	
	function validaAlquiler(){
		var error=""; 
        var cancelarEnvio=false;
        var focus=false;
        
        var formulario;
        var idAlquiler, selectAlquiler;
        var idEmpleado, selectEmpleado;
        var idCliente, selectCliente;
        var idMaquinaria, selectMaquinaria;
        
        //Recogemos datos de las Incidencias
        if(document.getElementById("altaAlquiler").style.display == "block"){
        	formulario = formAltaAlquiler;
        	idAlquiler = formulario.idAlquiler;
        	selectEmpleado = formulario.empleadoAltaAlquiler;
        	selectCliente = formulario.clienteAltaAlquiler;
        	selectMaquinaria = formulario.maquinariaAltaAlquiler;
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idCliente = selectCliente.options[selectCliente.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
        if(document.getElementById("bajaAlquiler").style.display == "block"){
        	formulario = formBajaAlquiler;
        	selectAlquiler = formulario.alquilerBajaAlquiler;
        	selectEmpleado = formulario.empleadoBajaAlquiler;
        	selectCliente = formulario.clienteBajaAlquiler;
        	selectMaquinaria = formulario.maquinariaBajaAlquiler;
        	idAlquiler = selectAlquiler.options[selectAlquiler.selectedIndex];
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idCliente = selectCliente.options[selectCliente.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
    	if(document.getElementById("modificaAlquiler").style.display == "block"){
        	formulario = formModificaAlquiler;
        	selectAlquiler = formulario.alquilerModificaAlquiler;
        	selectEmpleado = formulario.empleadoModificaAlquiler;
        	selectCliente = formulario.clienteModificaAlquiler;
        	selectMaquinaria = formulario.maquinariaModificaAlquiler;
        	idAlquiler = selectAlquiler.options[selectAlquiler.selectedIndex];
        	idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
        	idCliente = selectCliente.options[selectCliente.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
		}
    	var fechaInicio = formulario.fechaInicioAlquiler;
        var fechaFin = formulario.fechaFinAlquiler;
	        
        //Comprobamos que estemos en altaAlquiler
        if(document.getElementById("altaAlquiler").style.display == "block"){
	        /*Comprobamos ID de Compra*/
	        if(/^\d{5}$/.test(idAlquiler.value)){
	        	idAlquiler.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en la id. (00001)\n";
	            idAlquiler.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            idAlquiler.focus();
	            focus=true;
	        }
        }
        else{
            /*Comprobamos select de Compra*/
        	if(selectAlquiler.selectedIndex > 0 ){
        		selectAlquiler.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona alquiler\n";
        		selectAlquiler.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectAlquiler.focus();
	            focus=true;
        	}
        }
        /*Comprobamos select de Empleado*/
    	if(selectEmpleado.selectedIndex > 0 ){
    		selectEmpleado.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona empleado\n";
    		selectEmpleado.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectEmpleado.focus();
            focus=true;
    	}
        /*Comprobamos select de Proveedor*/
    	if(selectCliente.selectedIndex > 0 ){
    		selectCliente.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona Clientec\n";
    		selectCliente.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectCliente.focus();
            focus=true;
    	}
        /*Comprobamos select de Maquinaria*/
    	if(selectMaquinaria.selectedIndex > 0 ){
    		selectMaquinaria.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona maquinaria\n";
    		selectMaquinaria.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectMaquinaria.focus();
            focus=true;
    	}
    	/*Comprobamos fecha correcta*/
        if(fechaInicio.value!="" && fechaInicio.value!=null){
        	fechaInicio.setAttribute("class","form-control");
        }
        else{
            error+="Error en la fecha inicio de alquiler (DD/MM/AAAA)\n";
            fechaInicio.setAttribute("class","form-control error");
            cancelarEnvio=true;
            fechaInicio.focus();
            focus=true;
        }
    	/*Comprobamos fecha correcta*/
        if(fechaFin.value!="" && fechaFin.value!=null){
        	fechaFin.setAttribute("class","form-control");
        }
        else{
            error+="Error en la fecha fin de alquiler (DD/MM/AAAA)\n";
            fechaFin.setAttribute("class","form-control error");
            cancelarEnvio=true;
            fechaFin.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaAlquiler").style.display == "block"){
                oAgromachine.borraAlquiler(idAlquiler.value,fechaInicio.value);
                alert("Alquiler eliminado");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaAlquiler").style.display == "block" ){
	            	oAgromachine.borraAlquiler(idAlquiler.value);
	            	sMensaje = "Alquiler modificado:\n";
	            }

	            if(document.getElementById("altaAlquiler").style.display == "block"){ 
	            	sMensaje = "Alquiler dado de alta:\n";
	            }
	            var oEmpleado = oAgromachine.obtenerEmpleado(idEmpleado.value);
	            var oCliente = oAgromachine.obtenerCliente(idCliente.value);
	            var oMaquinaria = oAgromachine.obtenerMaquinaria(idMaquinaria.value);
	            var oAlquiler = new Alquiler(idAlquiler.value,oEmpleado,oCliente, oMaquinaria, fechaInicio.value, fechaFin.value);
	            console.log(oAlquiler);
	            oAgromachine.altaAlquiler(oAlquiler);
	            sMensaje += "ID: "+idAlquiler.value +"\n" +
			                "Empleado: " +oEmpleado.dni +" " +oEmpleado.nombre +" " +oEmpleado.apellidos+" - " +oEmpleado.rol +"\n" +
			                "Cliente: " +oCliente.dni +" " +oCliente.nombre +" " +oCliente.apellidos +"\n" +
			                "Maquinaria: " +oMaquinaria.id +" " +oMaquinaria.nombre +" " +oMaquinaria.marca +"\n" +
			                "Fecha Inicio: " +fechaInicio.value +"\n" +
			                "Fecha Final : " +fechaFin.value +"\n";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectAltaAlquiler(){
    	var select1 = document.getElementById("empleadoAltaAlquiler");
    	var select2 = document.getElementById("clienteAltaAlquiler");
    	var select3 = document.getElementById("maquinariaAltaAlquiler");
     
    	//Limpiamos select anterior
    	for (var i=select1.length-1; i>0 ; i--) {
    		if(select1.options.length>1){
    			select1.removeChild(select1.options[i]);
    		}
    	}
    	for (var i=select2.length-1; i>0 ; i--) {
    		if(select2.options.length>1){
    			select2.removeChild(select2.options[i]);
    		}
    	}
    	for (var i=select3.length-1; i>0 ; i--) {
    		if(select3.options.length>1){
    			select3.removeChild(select3.options[i]);
    		}
    	}
     
    	//Generamos option
    	var options1 = [],options2 = [],options3 = [];
    	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
    		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
    	for(var i=0;i<oAgromachine.getClientes().length;i++){
    		options2[i]=oAgromachine.getClientes()[i].dni +" - " +oAgromachine.getClientes()[i].nombre +" - " +oAgromachine.getClientes()[i].localidad +", " +oAgromachine.getClientes()[i].cp +" - " +oAgromachine.getClientes()[i].telefono;
        }
    	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
        	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
    	}
    	
	    //Rellenamos select
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectBajaAlquiler(){
	    var select = document.getElementById("alquilerBajaAlquiler");
	   	var select1 = document.getElementById("empleadoBajaAlquiler");
	   	var select2 = document.getElementById("clienteBajaAlquiler");
	   	var select3 = document.getElementById("maquinariaBajaAlquiler");
	    
	   	//Limpiamos select anterior
	   	for (var i=select.length-1; i>0 ; i--) {
	   		if(select.options.length>1){
	   			select.removeChild(select.options[i]);
	   		}
	   	}
	   	for (var i=select1.length-1; i>0 ; i--) {
	   		if(select1.options.length>1){
	   			select1.removeChild(select1.options[i]);
	   		}
	   	}
	   	for (var i=select2.length-1; i>0 ; i--) {
	   		if(select2.options.length>1){
	   			select2.removeChild(select2.options[i]);
	   		}
	   	}
	   	for (var i=select3.length-1; i>0 ; i--) {
	   		if(select3.options.length>1){
	   			select3.removeChild(select3.options[i]);
	   		}
	   	}
	    
	   	//Generamos option
	   	var options = [], options1 = [], options2 = [], options3 = [];
	   	for(var i=0;i<oAgromachine.getAlquileres().length;i++){
	   		 options[i]=oAgromachine.getAlquileres()[i].id +" -{ Empleado: " +oAgromachine.getAlquileres()[i].empleado.dni+" }-{ Cliente: " +oAgromachine.getAlquileres()[i].cliente.dni +", " +oAgromachine.getAlquileres()[i].cliente.localidad +" }-{ Maquinaria: " +oAgromachine.getAlquileres()[i].maquinaria.nombre +" }- Inicio: " +oAgromachine.getAlquileres()[i].fechaInicio;
        }
	   	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
	   		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getClientes().length;i++){
	   		options2[i]=oAgromachine.getClientes()[i].dni +" - " +oAgromachine.getClientes()[i].nombre +" " +oAgromachine.getClientes()[i].apellidos +" - " +oAgromachine.getClientes()[i].localidad +" - " +oAgromachine.getClientes()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
	       	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
	   	}
   	 
	  //Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options[i].substr(0,5);
	     	select.appendChild(el);
	 	}
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	 /* Método para cargar los options del select */
	function cargarSelectModificaAlquiler(){
	    var select = document.getElementById("alquilerModificaAlquiler");
	   	var select1 = document.getElementById("empleadoModificaAlquiler");
	   	var select2 = document.getElementById("clienteModificaAlquiler");
	   	var select3 = document.getElementById("maquinariaModificaAlquiler");
	    
	   	//Limpiamos select anterior
	   	for (var i=select.length-1; i>0 ; i--) {
	   		if(select.options.length>1){
	   			select.removeChild(select.options[i]);
	   		}
	   	}
	   	for (var i=select1.length-1; i>0 ; i--) {
	   		if(select1.options.length>1){
	   			select1.removeChild(select1.options[i]);
	   		}
	   	}
	   	for (var i=select2.length-1; i>0 ; i--) {
	   		if(select2.options.length>1){
	   			select2.removeChild(select2.options[i]);
	   		}
	   	}
	   	for (var i=select3.length-1; i>0 ; i--) {
	   		if(select3.options.length>1){
	   			select3.removeChild(select3.options[i]);
	   		}
	   	}
	    
	   	//Generamos option
	   	var options = [], options1 = [], options2 = [], options3 = [];
	   	for(var i=0;i<oAgromachine.getAlquileres().length;i++){
	   		 options[i]=oAgromachine.getAlquileres()[i].id +" -{ Empleado: " +oAgromachine.getAlquileres()[i].empleado.dni+" }-{ Cliente: " +oAgromachine.getAlquileres()[i].cliente.dni +", " +oAgromachine.getAlquileres()[i].cliente.localidad +" }-{ Maquinaria: " +oAgromachine.getAlquileres()[i].maquinaria.nombre +" }- Inicio: " +oAgromachine.getAlquileres()[i].fechaInicio;
        }
	   	for(var i=0;i<oAgromachine.getEmpleados().length;i++){
	   		 options1[i]=oAgromachine.getEmpleados()[i].dni +" - " +oAgromachine.getEmpleados()[i].nombre+" " +oAgromachine.getEmpleados()[i].apellidos +" - " +oAgromachine.getEmpleados()[i].rol +" - " +oAgromachine.getEmpleados()[i].localidad +" - " +oAgromachine.getEmpleados()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getClientes().length;i++){
	   		options2[i]=oAgromachine.getClientes()[i].dni +" - " +oAgromachine.getClientes()[i].nombre +" " +oAgromachine.getClientes()[i].apellidos +" - " +oAgromachine.getClientes()[i].localidad +" - " +oAgromachine.getClientes()[i].telefono;
        }
	   	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
	       	options3[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
	   	}
   	
	  //Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options[i].substr(0,5);
	     	select.appendChild(el);
	 	}
		for(var i=0; i<options1.length; i++){
			opt = options1[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options1[i].substr(0,9);
	     	select1.appendChild(el);
	 	}
		for(var i=0; i<options2.length; i++){
			opt = options2[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options2[i].substr(0,9);
	     	select2.appendChild(el);
	 	}
		for(var i=0; i<options3.length; i++){
			opt = options3[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options3[i].substr(0,5);
	     	select3.appendChild(el);
	 	}
	}
	
	function cargarDatosBajaAlquiler(){
		var seleccionado = document.getElementById("alquilerBajaAlquiler");
		var select1 = document.getElementById("empleadoBajaAlquiler");
		var select2 = document.getElementById("clienteBajaAlquiler");
		var select3 = document.getElementById("maquinariaBajaAlquiler");
		var alquileres = oAgromachine.getAlquileres();

		if(seleccionado.selectedIndex==0) {
			select1.selectedIndex=0;select1.setAttribute("disabled",true);
			select2.selectedIndex=0;select2.setAttribute("disabled",true);
			select3.selectedIndex=0;select3.setAttribute("disabled",true);
			formBajaAlquiler.fechaInicioAlquiler.value="";formBajaAlquiler.fechaInicioAlquiler.setAttribute("disabled",true);
			formBajaAlquiler.fechaFinAlquiler.value="";formBajaAlquiler.fechaFinAlquiler.setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<alquileres.length;i++){
				if(alquileres[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					select1.value = alquileres[i].empleado.dni; 
					select2.value = alquileres[i].cliente.dni; 
					select3.value = alquileres[i].maquinaria.id; 
					formBajaAlquiler.fechaInicioAlquiler.value = alquileres[i].fechaInicio; 
					formBajaAlquiler.fechaFinAlquiler.value = alquileres[i].fechaFin;
				}
			}
		}
	}
	
	function cargarDatosModificaAlquiler(){
		var seleccionado = document.getElementById("alquilerModificaAlquiler");
		var select1 = document.getElementById("empleadoModificaAlquiler");
		var select2 = document.getElementById("clienteModificaAlquiler");
		var select3 = document.getElementById("maquinariaModificaAlquiler");
		var alquileres = oAgromachine.getAlquileres();
		
		if(seleccionado.selectedIndex==0) {
			select1.selectedIndex=0;select1.setAttribute("disabled",true);
			select2.selectedIndex=0;select2.setAttribute("disabled",true);
			select3.selectedIndex=0;select3.setAttribute("disabled",true);
			formBajaAlquiler.fechaInicioAlquiler.value="";formBajaAlquiler.fechaInicioAlquiler.setAttribute("disabled",true);
			formBajaAlquiler.fechaFinAlquiler.value="";formBajaAlquiler.fechaFinAlquiler.setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<oAgromachine.getAlquileres().length;i++){
				if(alquileres[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					select1.value = alquileres[i].empleado.dni; select1.removeAttribute("disabled");
					select2.value = alquileres[i].cliente.dni; select2.removeAttribute("disabled");
					select3.value = alquileres[i].maquinaria.id; select3.removeAttribute("disabled");
					formModificaAlquiler.fechaInicioAlquiler.value = alquileres[i].fechaInicio;
					formModificaAlquiler.fechaFinAlquiler.value = alquileres[i].fechaFin;
				}
			}
		}
	}
	
	/* Método para listar las Alquileres */
	function listarAlquiler(){
		if(oAgromachine.getAlquileres().length==0){
            alert("No hay ningún alquiler dado de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mAlquileres").style.display="block";
		

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
            tabla.setAttribute('id', 'tablaAlquileres');
            tabla.setAttribute('class', 'text-center');
            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            // Añadir una fila a la sección <thead>
            thead.insertRow(0);

            // Añadir las tres columnas de la fila de <thead>
            var cabecera;

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'ID';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Empleado';
            tabla.rows[0].appendChild(cabecera);
            
            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Cliente';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Maquinaria';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Fecha Inicio';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Fecha Fin';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var alquileres=oAgromachine.getAlquileres();
            for(var i = alquileres.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(alquileres[i].id));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(alquileres[i].empleado.dni +" - " +alquileres[i].empleado.apellidos +", " +alquileres[i].empleado.nombre +" - " +alquileres[i].empleado.rol));
                
                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(alquileres[i].cliente.dni +" - " +alquileres[i].cliente.nombre +" - " +alquileres[i].cliente.localidad));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(alquileres[i].maquinaria.id +" - " +alquileres[i].maquinaria.nombre +" - " +alquileres[i].maquinaria.marca));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(alquileres[i].fechaInicio));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(alquileres[i].fechaFin));
                tbody.insertRow(0);
            }

            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0); 
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 6);
            	footer.innerHTML = alquileres.length+" alquileres listadas";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tAlquiler").appendChild(tabla);
            document.getElementById("imprimirAlquileres").addEventListener("click",imprime,false);
            document.getElementById("btnVolverAlquiler").addEventListener("click",borraTablaAlquiler,false);
        }
    }
	
	/* ------------- INCIDENCIAS -------------- */

    function altaIncidencia(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("altaIncidencia").style.display="block";
		formAltaIncidencia.reset();
		cargarIdIncidencia();
		cargarSelectAltaIncidencia();
		cargarFecha(formAltaIncidencia.fechaIncidencia);
        formAltaIncidencia.envioIncidencia.addEventListener("click",validaIncidencia,false);
	}

    function cargarIdIncidencia(){
    	var idIncidencia = formAltaIncidencia.idIncidencia;
    	var incidencias = oAgromachine.getIncidencias();
    	var ultimaIncidencia=0;
    	if(incidencias.length>0)
    		ultimaIncidencia = incidencias[incidencias.length - 1].id;

    	var actualIncidencia = parseInt(ultimaIncidencia)+1;
    	var cadena=anadirCeros(actualIncidencia,5);
    	idIncidencia.value = cadena;
    }
    
	function bajaIncidencia(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("bajaIncidencia").style.display="block";
		formBajaIncidencia.reset();
		cargarSelectBajaIncidencia();
		cargarSelectMaquinariaBajaIncidencia();
		document.getElementById("incidenciaBaja").addEventListener("click",cargarDatosBajaIncidencia,false);

        formBajaIncidencia.envioIncidencia.addEventListener("click",validaIncidencia,false);
	}
	function modificaIncidencia(){
		document.getElementById("gestion").style.display="none";
		document.getElementById("modificaIncidencia").style.display="block";
		formModificaIncidencia.reset();
		
		cargarSelectModificaIncidencia();
		cargarSelectMaquinariaModificaIncidencia();
		document.getElementById("incidenciaModifica").addEventListener("click",cargarDatosModificaIncidencia,false);

        formModificaIncidencia.envioIncidencia.addEventListener("click",validaIncidencia,false);
	}
	
	function validaIncidencia(){
		var error=""; 
        var cancelarEnvio=false;
        var focus=false;
        
        var formulario;
        var id;
        var selectIncidencia;
        var selectMaquinaria;
        
        //Recogemos datos de las Incidencias
        if(document.getElementById("altaIncidencia").style.display == "block"){
        	formulario = formAltaIncidencia;
        	id = formulario.idIncidencia;
        	selectMaquinaria = formulario.maquinariaAltaIncidencia;
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
        if(document.getElementById("bajaIncidencia").style.display == "block"){
        	formulario = formBajaIncidencia;
        	selectIncidencia = formulario.incidenciaBaja;
        	selectMaquinaria = formulario.maquinariaBajaIncidencia;
        	id = selectIncidencia.options[selectIncidencia.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
        }
    	if(document.getElementById("modificaIncidencia").style.display == "block"){
        	formulario = formModificaIncidencia;
        	selectIncidencia = formulario.incidenciaModifica;
        	selectMaquinaria = formulario.maquinariaModificaIncidencia;
        	id = selectIncidencia.options[selectIncidencia.selectedIndex];
        	idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
		}
    	var estado = formulario.estado;
        var titulo = formulario.tituloIncidencia;
        var descripcion = formulario.descripcionIncidencia;
        var fecha = formulario.fechaIncidencia;
	        
	        //Comprobamos que estemos en altaIncidencia
        if(document.getElementById("altaIncidencia").style.display == "block"){
	        /*Comprobamos ID de Incidencia*/
	        if(/^\d{5}$/.test(id.value)){
	        	id.setAttribute("class","form-control");
	        }
	        else{
	            error+="Error en la id. (00001)\n";
	            id.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            id.focus();
	            focus=true;
	        }
        }
        else{
        	if(selectIncidencia.selectedIndex > 0 ){
        		selectIncidencia.setAttribute("class","form-control");
        	}
        	else{
        		error+="Selecciona incidencia\n";
        		selectIncidencia.setAttribute("class","form-control error");
	            cancelarEnvio=true;
	            selectIncidencia.focus();
	            focus=true;
        	}
        }

        /*Comprobamos select de Maquinaria*/
    	if(selectMaquinaria.selectedIndex > 0 ){
    		selectMaquinaria.setAttribute("class","form-control");
    	}
    	else{
    		error+="Selecciona maquinaria\n";
    		selectMaquinaria.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectMaquinaria.focus();
            focus=true;
    	}

        /*Comprobamos titulo de Incidencia*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ]{3,40}$/.test(titulo.value)){
        	titulo.setAttribute("class","form-control");
        }
        else{
            error+="Error en el título.\n";
            titulo.setAttribute("class","form-control error");
            cancelarEnvio=true;
            titulo.focus();
            focus=true;
        }

        /*Comprobamos descripción de Incidencia*/
        if(/^[A-Za-z\s\wáéíóúÁÉÍÓÚ,.()]{3,1000}$/.test(descripcion.value)){
        	descripcion.setAttribute("class","form-control");
        }
        else{
            error+="Error en la descripción.\n";
            descripcion.setAttribute("class","form-control error");
            cancelarEnvio=true;
            descripcion.focus();
            focus=true;
        }
        /*Comprobamos estado de Incidencia*/
    	if(estado[0].checked){
    		estado[0].value="Activa";
    	}
    	else{
        	if(estado[1].checked){
        		estado[1].value="Anulada";
        	}
        	else{
        		 error+="Selecciona un estado de incidencia.\n";
                 cancelarEnvio=true;
                 focus=true;
        	}
    	}
        
    	/*Comprobamos fecha correcta*/
        if(fecha.value!="" && fecha.value!=null){
            /*if(isValidDate(fecha.value)==true){
                fecha.setAttribute("class","form-control");
            }
            else{
                error+="Esa fecha nunca existió\n";
                fecha.setAttribute("class","form-control error");
                cancelarEnvio=true;
                fecha.focus();
                focus=true;
            }*/
        }
        else{
            error+="Error en la fecha de incidencia (DD/MM/AAAA)\n";
            fecha.setAttribute("class","form-control error");
            cancelarEnvio=true;
            fecha.focus();
            focus=true;
        }

        if (cancelarEnvio){
            alert(error);
            //event.preventDefault(); //Anula el envio
        }
        else{
            if(document.getElementById("bajaIncidencia").style.display == "block"){
                oAgromachine.anulaIncidencia(id.value);
                alert("Incidencia anulada");
            }
            else{
	            var sMensaje;
	            if(document.getElementById("modificaIncidencia").style.display == "block" ){
	            	oAgromachine.borraIncidencia(id.value);
	            	sMensaje = "Incidencia modificada:\n";
	            }

	            if(document.getElementById("altaIncidencia").style.display == "block"){ 
	            	sMensaje = "Incidencia dada de alta:\n";
	            }
	            var oMaquinaria = oAgromachine.obtenerMaquinaria(idMaquinaria.value);
	            var oIncidencia = new Incidencia(id.value, oMaquinaria, titulo.value, descripcion.value,estado.value, fecha.value);
	            oAgromachine.altaIncidencia(oIncidencia);
	            sMensaje += "ID: "+id.value +"\n" +
			                "Maquinaria: " +oMaquinaria.id +" " +oMaquinaria.nombre +" " +oMaquinaria.marca +"\n" +
			                "Título: " +titulo.value +"\n" +
			                "Descripción: " +descripcion.value +"\n" +
			                "Estado: " +estado.value +"\n" +
			                "Fecha: " +fecha.value +"\n";
	            console.log(sMensaje +"\n-------------------");
	            alert(sMensaje);
	
            }
            volver();
        }
	}

	 /* Método para cargar los options del select */
	function cargarSelectAltaIncidencia(){
    	var select = document.getElementById("maquinariaAltaIncidencia");
     
    	//Limpiamos select anterior
    	for (var i=select.length-1; i>0 ; i--) {
    		if(select.options.length>1){
    			select.removeChild(select.options[i]);
    		}
    	}
     
    	//Generamos option
    	var options = [];
    	for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
        	options[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
    	}
     
	    //Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
	     	var el = document.createElement("option");
	        	el.textContent = opt;
	        	el.value = options[i].substr(0,5);
	     	select.appendChild(el);
	 	}
	}

	/* Método para cargar los options del select */
	function cargarSelectBajaIncidencia(){
		var select = document.getElementById("incidenciaBaja");
     
		//Limpiamos select anterior
		for (var i=select.length-1; i>0 ; i--) {
			if(select.options.length>1){
				select.removeChild(select.options[i]);
			}
		}
	     
		//Generamos option
		var options = [];
		for(var i=0;i<oAgromachine.getIncidencias().length;i++){
	     	options[i]=oAgromachine.getIncidencias()[i].id +" - [" +oAgromachine.getIncidencias()[i].maquinaria.id+" "+oAgromachine.getIncidencias()[i].maquinaria.nombre+" " +oAgromachine.getIncidencias()[i].maquinaria.marca +"] - " +oAgromachine.getIncidencias()[i].titulo +" - " +oAgromachine.getIncidencias()[i].estado +" - " +oAgromachine.getIncidencias()[i].fecha;
		}
	     
		//Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
			var el = document.createElement("option");
				el.textContent = opt;
				el.value = options[i].substr(0,5);
			select.appendChild(el);
		}
	}
	
	/* Método para cargar los options del select */
	function cargarSelectMaquinariaBajaIncidencia(){
		var select = document.getElementById("maquinariaBajaIncidencia");
      
		//Limpiamos select anterior
		for (var i=select.length-1; i>0 ; i--) {
			if(select.options.length>1){
				select.removeChild(select.options[i]);
			}
		}
	      
		//Generamos option
		var options = [];
		for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
			options[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
		}
	      
		//Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
			var el = document.createElement("option");
				el.textContent = opt;
				el.value = options[i].substr(0,5);
			select.appendChild(el);
		}
	}

	 
	/* Método para cargar los datos del select al formulario */
	function cargarDatosBajaIncidencia(){
		var seleccionado = document.getElementById("incidenciaBaja");
	
		if(seleccionado.selectedIndex==0) {
			for(i=0;i<document.querySelectorAll("#formBajaIncidencia input").length;i++){
				document.querySelectorAll("#formBajaIncidencia input")[i].value = "";
				document.querySelectorAll("#formBajaIncidencia input")[i].setAttribute("disabled",true);
			}
			document.getElementById("maquinariaBajaIncidencia").selectedIndex=0;
			document.getElementById("maquinariaBajaIncidencia").setAttribute("disabled",true);
			formBajaIncidencia.descripcionIncidencia.value = "";
			formBajaIncidencia.estado[0].removeAttribute("checked");
			formBajaIncidencia.estado[1].removeAttribute("checked");
			formBajaIncidencia.estado[1].setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<oAgromachine.getIncidencias().length;i++){
				if(oAgromachine.getIncidencias()[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					formBajaIncidencia.maquinariaBajaIncidencia.selectedIndex = oAgromachine.getIncidencias()[i].maquinaria.id;
					formBajaIncidencia.tituloIncidencia.value = oAgromachine.getIncidencias()[i].titulo;
					formBajaIncidencia.descripcionIncidencia.value = oAgromachine.getIncidencias()[i].descripcion;
					if(oAgromachine.getIncidencias()[i].estado == "Activa"){
						formBajaIncidencia.estado[0].setAttribute("checked",true)
					}
					else{
						formBajaIncidencia.estado[1].setAttribute("checked",true);
					}
					formBajaIncidencia.fechaIncidencia.value = oAgromachine.getIncidencias()[i].fecha;
				}
			}

			for(i=0;i<document.querySelectorAll("#formBajaIncidencia input").length;i++){
				document.querySelectorAll("#formBajaIncidencia input")[i].setAttribute("disabled",true);
			}
			formBajaIncidencia.estado[1].removeAttribute("disabled");
		}
	}

	/* Método para cargar los options del select */
	function cargarSelectModificaIncidencia(){
		var select = document.getElementById("incidenciaModifica");
     
		//Limpiamos select anterior
		for (var i=select.length-1; i>0 ; i--) {
			if(select.options.length>1){
				select.removeChild(select.options[i]);
			}
		}
	     
		//Generamos option
		var options = [];
		for(var i=0;i<oAgromachine.getIncidencias().length;i++){
	     	options[i]=oAgromachine.getIncidencias()[i].id +" - [" +oAgromachine.getIncidencias()[i].maquinaria.id+" "+oAgromachine.getIncidencias()[i].maquinaria.nombre+" " +oAgromachine.getIncidencias()[i].maquinaria.marca +"] - " +oAgromachine.getIncidencias()[i].titulo +" - " +oAgromachine.getIncidencias()[i].estado +" - " +oAgromachine.getIncidencias()[i].fecha;
		}
	     
		//Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
			var el = document.createElement("option");
				el.textContent = opt;
				el.value = options[i].substr(0,5);
			select.appendChild(el);
		}
	}
	
	/* Método para cargar los options del select */
	function cargarSelectMaquinariaModificaIncidencia(){
		var select = document.getElementById("maquinariaModificaIncidencia");
      
		//Limpiamos select anterior
		for (var i=select.length-1; i>0 ; i--) {
			if(select.options.length>1){
				select.removeChild(select.options[i]);
			}
		}
	      
		//Generamos option
		var options = [];
		for(var i=0;i<oAgromachine.getMaquinarias().length;i++){
			options[i]=oAgromachine.getMaquinarias()[i].id +" - " +oAgromachine.getMaquinarias()[i].nombre+" " +oAgromachine.getMaquinarias()[i].marca +" - " +oAgromachine.getMaquinarias()[i].precio +"€ - " +(oAgromachine.getMaquinarias()[i].bateria?"Eléctrico":"Combustible");
		}
	      
		//Rellenamos select
		for(var i=0; i<options.length; i++){
			opt = options[i];
			var el = document.createElement("option");
				el.textContent = opt;
				el.value = options[i].substr(0,5);
			select.appendChild(el);
		}
	}

	/* Método para cargar los datos del select al formulario */
	function cargarDatosModificaIncidencia(){
		var seleccionado = document.getElementById("incidenciaModifica");
		
		if(seleccionado.selectedIndex==0) {
			for(i=0;i<document.querySelectorAll("#formModificaIncidencia input").length;i++){
				document.querySelectorAll("#formModificaIncidencia input")[i].value = "";
				document.querySelectorAll("#formModificaIncidencia input")[i].setAttribute("disabled",true);
			}
			document.getElementById("maquinariaModificaIncidencia").selectedIndex=0;
			document.getElementById("maquinariaModificaIncidencia").setAttribute("disabled",true);
			formModificaIncidencia.descripcionIncidencia.value="";
			formModificaIncidencia.descripcionIncidencia.setAttribute("disabled",true);
			formModificaIncidencia.estado[0].removeAttribute("checked");
			formModificaIncidencia.estado[1].removeAttribute("checked");
			formModificaIncidencia.estado[0].setAttribute("disabled",true);
			formModificaIncidencia.estado[1].setAttribute("disabled",true);
		}
		else{
			for(var i=0;i<oAgromachine.getIncidencias().length;i++){
				if(oAgromachine.getIncidencias()[i].id == seleccionado.options[seleccionado.selectedIndex].value){
					formModificaIncidencia.maquinariaModificaIncidencia.selectedIndex = oAgromachine.getIncidencias()[i].maquinaria.id;
					formModificaIncidencia.tituloIncidencia.value = oAgromachine.getIncidencias()[i].titulo;
					formModificaIncidencia.descripcionIncidencia.value = oAgromachine.getIncidencias()[i].descripcion;
					if(oAgromachine.getIncidencias()[i].estado == "Activa"){
						formModificaIncidencia.estado[0].setAttribute("checked",true)
					}
					else{
						formModificaIncidencia.estado[1].setAttribute("checked",true);
					}
					formModificaIncidencia.fechaIncidencia.value = oAgromachine.getIncidencias()[i].fecha;
				}
			}

			for(i=0;i<document.querySelectorAll("#formModificaIncidencia input").length;i++){
				document.querySelectorAll("#formModificaIncidencia input")[i].removeAttribute("disabled");
			}
			formModificaIncidencia.maquinariaModificaIncidencia.removeAttribute("disabled");
			formModificaIncidencia.descripcionIncidencia.removeAttribute("disabled");
			formModificaIncidencia.estado[0].removeAttribute("disabled");
			formModificaIncidencia.estado[1].removeAttribute("disabled");
		}
	}

	
	/* Método para listar las Incidencias */
	function listarIncidencia(){
		if(oAgromachine.getIncidencias().length==0){
            alert("No hay ningúna incidencia dada de alta");
        }
        else{
        	document.getElementById("gestion").style.display="none";
        	document.getElementById("mIncidencias").style.display="block";
		

            // Crear <table> y sus dos atributos
            var tabla = document.createElement('table');
            tabla.setAttribute('id', 'tablaIncidencias');
            tabla.setAttribute('class', 'text-center');
            tabla.setAttribute('border', '1');

            // Crear sección <thead>
            var thead = document.createElement('thead');
            tabla.appendChild(thead);

            // Añadir una fila a la sección <thead>
            thead.insertRow(0);

            // Añadir las tres columnas de la fila de <thead>
            var cabecera;

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'ID';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Maquinaria';
            tabla.rows[0].appendChild(cabecera);
            
            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Título';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Descripción';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Estado';
            tabla.rows[0].appendChild(cabecera);

            	cabecera = document.createElement('th');
            	cabecera.setAttribute('class', 'text-center');
            	cabecera.innerHTML = 'Fecha';
            tabla.rows[0].appendChild(cabecera);

            // Crear sección <tbody>
            var tbody = document.createElement('tbody');
            tabla.appendChild(tbody);

            // Añadir una fila a la sección <tbody>
            tbody.insertRow(0);
            var incidencias=oAgromachine.getIncidencias();
            for(var i = incidencias.length-1; i>=0;i--){
                tbody.rows[0].insertCell(0);
                tbody.rows[0].cells[0].appendChild(document.createTextNode(incidencias[i].id));

                tbody.rows[0].insertCell(1);
                tbody.rows[0].cells[1].appendChild(document.createTextNode(incidencias[i].maquinaria.id +" - " +incidencias[i].maquinaria.nombre +" " +incidencias[i].maquinaria.marca));
                
                tbody.rows[0].insertCell(2);
                tbody.rows[0].cells[2].appendChild(document.createTextNode(incidencias[i].titulo));

                tbody.rows[0].insertCell(3);
                tbody.rows[0].cells[3].appendChild(document.createTextNode(incidencias[i].descripcion));

                tbody.rows[0].insertCell(4);
                tbody.rows[0].cells[4].appendChild(document.createTextNode(incidencias[i].estado));

                tbody.rows[0].insertCell(5);
                tbody.rows[0].cells[5].appendChild(document.createTextNode(incidencias[i].fecha));
                tbody.insertRow(0);
            }

            // Crear sección <tfoot>
            var tfoot = document.createElement('tfoot');
            	tfoot.insertRow(0);
        	var footer;
        		footer = document.createElement('td');
        		footer.setAttribute('class', 'text-center');
            	footer.setAttribute('colspan', 7);
            	footer.innerHTML = incidencias.length+" incidencias listadas";
            tabla.appendChild(footer);
            	
            // Añadir botones
            document.getElementById("tIncidencia").appendChild(tabla);
            document.getElementById("imprimirIncidencias").addEventListener("click",imprime,false);
            document.getElementById("btnVolverIncidencia").addEventListener("click",borraTablaIncidencia,false);
        }
    }

    function anadirCeros(number, length) {
        var cad = '' + number;
        while (cad.length < length) {
            cad = '0' + cad;
        }
        return cad;
    }
	
    function cargarFecha(input){
    	var f1, fecha;
    	var f = new Date(); 
    	
    	f1 = (f.getMonth() + 1) + "/" + f.getDate() + "/" + f.getFullYear();
    	fecha = anadirCeros(f.getDate(),2) + "/" + anadirCeros((f.getMonth() + 1),2) + "/" + f.getFullYear();
    	input.value = fecha;
    }
    function cargarFechas(){
    	var txtFechaInicio = formAltaAlquiler.fechaInicioAlquiler;
    	var txtFechaFin = formAltaAlquiler.fechaFinAlquiler;
    	var f1, f2c, f2;
    	var fechaInicio, fechaFin;
    	var f = new Date(); 
    	
    	f1 = (f.getMonth() + 1) + "/" + f.getDate() + "/" + f.getFullYear();
    	fechaInicio = anadirCeros(f.getDate(),2) + "/" + anadirCeros((f.getMonth() + 1),2) + "/" + f.getFullYear();
    	txtFechaInicio.value = fechaInicio;
    	
    	f2 = sumarDias(f, 30);
    	fechaFin = anadirCeros(f2.getDate(),2) + "/" + anadirCeros((f2.getMonth() + 1),2) + "/" + f2.getFullYear();
    	txtFechaFin.value = fechaFin;
    }
    
    function sumarDias(fecha, dias) {
    	var resultado = new Date(fecha);
    	resultado.setDate(resultado.getDate() + dias);
    	return resultado;
    }
    
    /* Borrar Tablas Antes de mostrar */
    function borraTablaCliente(){
        document.getElementById("tablaClientes").remove();
    }
    function borraTablaMaquinaria(){
        document.getElementById("tablaMaquinarias").remove();
    }
    function borraTablaProveedor(){
        document.getElementById("tablaProveedores").remove();
    }
    function borraTablaEmpleado(){
        document.getElementById("tablaEmpleados").remove();
    }
    function borraTablaCompra(){
        document.getElementById("tablaCompras").remove();
    }
    function borraTablaAlquiler(){
        document.getElementById("tablaAlquileres").remove();
    }
    function borraTablaIncidencia(){
        document.getElementById("tablaIncidencias").remove();
    }

    function imprime(){
        window.print();
    }
    
    /* Validar fecha excepciones */
    function isValidDate(fecha) {
        var valid = true;

        fecha = fecha.replace('/-/g', '');

        var day  = parseInt(fecha.substring(0,2),10);
        var month   = parseInt(fecha.substring(3,5),10);
        var year = parseInt(fecha.substring(6,10),10);

        if((month < 1) || (month > 12)) valid = false;
        else if((day < 1) || (day > 31)) valid = false;
        else if(((month == 4) || (month == 6) || (month == 9) || (month == 11)) && (day > 30)) valid = false;
        else if((month == 2) && (((year % 400) == 0) || ((year % 4) == 0)) && ((year % 100) != 0) && (day > 29)) valid = false;
        else if((month == 2) && ((year % 100) == 0) && (day > 29)) valid = false;
        else if((month == 2) && (day > 28)) valid = false;

        return valid;
    }
    
    
}