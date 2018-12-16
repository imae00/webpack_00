import * as React from 'react';

interface State{
    texto:string;
}

export const HelloComponent = (state : State) => {

  return (
    <>
    <img className="imagen" src="https://www.solbooking.com/Content/img/Master/logo-solbooking.svg" />
    <h1 className="fuente-ubuntu">{state.texto}</h1>
    <a href="libraryWeight.html"><h3 className="fuente-ubuntu">Peso Librerias</h3></a>
    </>
  );
}