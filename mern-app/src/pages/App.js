import React from 'react'
import './App.css'
import {Nav} from '../components/Nav'
import {Start} from '../components/Start'
import {Home} from '../components/Home'



export const App = () => {
  return <div> 
    <Nav/>
    <p className="presentation">
      Busca tu Viaje Perfecto!
      Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor
    </p>
    <Start />
    <Home/>
  </div>;
};
