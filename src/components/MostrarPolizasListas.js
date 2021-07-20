
import React, {Component} from 'react';
import Data from '../data/polizas_dt_query_mongo (1).json';


class MostrarPolizasListas extends Component{
    
    render(){

        return (
        /* codigo para mostrar las listas de polizas */
            <div class="container">
                <div id="App" class="row pt-5">
                    <div class="col-md-4">
                        <div class="card">
                        <h1>Lista de Polizas</h1>
                            <div class="card-header">
                            {Data.map((Detail, index ) => {
                                return <div >

                                    <strong id="name">{Detail.Compañía}</strong>
                                    <strong id="precio">: {Detail.Precio}</strong> 
                                    </div>
                                   
                             })}
                            </div>
                        </div>
                    </div>
                
                    <div class="col-md-8">
                            
                    </div>
                    
                </div>
            </div>
            
        );


    }
    
   
    
}

export default MostrarPolizasListas;


