import './App.css';
import Cards from './components/Cards';
import Loading from './components/Loading';
import { useState } from 'react';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Mapas from "./data/Mapas";
import mapas from "./data/Mapas";
import Botones from './components/Botones';
function App() {
const valorincial = [
 ...new Set(Mapas.map(mapa=>mapa.categoria))
];
const longitud = valorincial.length;
const Cardsref = useRef(null);
const [loading,setLoading] = useState(true);
const [data,setData] = useState(valorincial);
const [datos,setDatos] = useState(mapas);
const [loading1,setLoading1] = useState(false); 
const [conteo,setConteo] = useState(longitud);
const filterCategory = (categoria)=>{
  if(categoria === "Todo"){
    setLoading1(true)
    setTimeout(()=>{
      setDatos(mapas);
    },1000)
    setLoading1(false)
    return 
  }
 
  const filteredData = mapas.filter(article => article.categoria === categoria);
  setLoading1(true)
  setTimeout(()=>{
    setDatos(filteredData); 
  },1000)
  setLoading1(false)
}

setTimeout(()=>{
setLoading(false);
},3000)

  if (loading) return <div class="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      </div>
  return (
    <div className="App">
    <ScrollToTop/>
    <Loading conteo={conteo}/>
    <Botones data={data} filterCategory={filterCategory}/>
    <Cards Cardsref={Cardsref} datos={datos} loading1={loading1}/>
    </div>
  );
}

export default App;
