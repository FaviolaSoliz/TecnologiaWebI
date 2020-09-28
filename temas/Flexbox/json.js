		/*header and setion elements and store them in variables*/
        var articulo = document.querySelector('article');
       
		/*To obtain the JSON*/
        var requestURL = 'https://faviolasoliz.github.io/TecnologiaWebI/prueba.json';
        /*Create a request*/
		var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() 
        {
            var funPrueba = request.response;
            mostrarContenido(funPrueba);
    
        }

		//Populating the header
        function mostraContenido(jsonObj) 
        {
            var myH2 = document.createElement('h2');
            myH2.textContent = jsonObj['Titulo'];
            articulo.appendChild(myH2);

            var myParrafo = document.createElement('p');
            myParrafo.textContent = 'Contenido:' + jsonObj['Texto'];
            articulo.appendChild(myParrafo);
        }


            articulo.appendChild(myH2);
            myArticle.appendChild(myParrafo);
           
            
        