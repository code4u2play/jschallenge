/*
import React, { Component } from 'react';
import './App.css';
import Scheduler from './componentes/Scheduler';
*/
//-----------------------

//import Scheduler, { Resource } from 'devextreme-react/scheduler';
//import Scheduler from '@devexpress/dx-react-scheduler';
//import { Resource } from '@devexpress/dx-react-scheduler-material-ui';
//import DataCell from './componentes/DataCell.js';
//import ResourceCell from './componentes/ResourceCell.js';



/*import './App.css';
import Scheduler from './Componentes/Scheduler.js';
import { data, employees } from './Componentes/data.js';
import Conexion from './Componentes/Conector/Conexion.js';
*/

/*
import React, { Component} from 'react';
import componente1 from './misComponentes/Componente1.js';

class App extends Component {



  render() {

    // return (<Conexion></Conexion>);
    //return(<h1>hello,{this.props.name}</h1>);
    return(
    	<div>
    	<Componente1/>
    	</div>
    	);

  }
}

export default App;
*/



let url = 'https://swapi.dev/api/films/';
var pelicula={
	titulo:null,
	fecha:null
};
console.log(pelicula);
var peliculas=[];

fetch(url)
.then(function(response){
	if(response.status !== 200){
		console.log("No pudo conectarse con swapi. Status code: "+ response.status);
		return;
	}

	response.json().then(function(data){
		console.log("Numero de peliculas: " + data.count);
		console.log(data.results[0].title);
		console.log(data.results[0].release_date);

		for (let i = 0; i < data.count; i++) {	
			console.log(data.results[i].title);
			console.log(data.results[i].release_date);
	}
		//console.log(data);
		for (let i = 0; i < data.count; i++) {	
			let titleName,releaseDate;
			elemento=document.getElementById("title"+(i+1));
			//elemento.innerHTML="Movie title:";
			elemento=document.getElementById("movie"+(i+1));
			titleName="Movie title: "+data.results[i].title;
			
			elemento.innerHTML=titleName;
			elemento=document.getElementById("release"+(i+1));
			titleName="Release date: "+data.results[i].release_date;
		
			elemento.innerHTML=titleName;
			

	}

	});
}
)
.catch(function(err){
	console.log("Error: ", err);
});