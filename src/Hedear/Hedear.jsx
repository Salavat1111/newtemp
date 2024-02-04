import './hedear.css';
import {FaArrowRight} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";


function Hedear() {

  const [appState, setAppState] = useState();
  const [appCo, setCoState] = useState('');

  const [temperatureColor, setTemperatureColor] = useState('');


  
  useEffect(() => {
    const apiUrl = 'http://dushnila.gooddelo.com/data';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.temp ;
      const allCo = resp.data.co2 ;
      setAppState(allPersons);
      setCoState(allCo);
      // console.log(appCo)
    });
  }, [setAppState, setCoState]);

  // let PSP = appState;
  // let Oxygen = appCo;
  
  // const Repricka = (appCo) => {
  //   if (appCo.e.target.value > 800 ) {
  //     setTemperatureColor('hot')
  //     console.log(Oxygen)
  //   }
  
  // }
const Repricka = (appCo) => {
    if (appCo >= 800) {
      setTemperatureColor('hot')
    }else if (appCo <= 799){
      setTemperatureColor('cold')
    }
    console.log(appCo)
  }

  // console.log(appCo)
  // console.log(appCo)

  return (
    <div className="wrapper--header">
      <div>
        <div className='logo--dushnilo'>ДУШНИЛА</div>
        <div className='wr--block'>
           <div>
              <div className='container--status'>
                <h1>Душнила доволен вами</h1>
                <p>Все показатели в норме</p>
              </div>
                   <div className='container--block'>
                        <div className='block--story'>
                            <h3>Дней без душноты</h3>
                               <div className='block--button-story'>
                                  <div className='text--story'><p>История</p></div>
                                  <div>< FaArrowRight /></div>
                               </div>
                        </div>
                     <div className='block--logo'>Лого</div>
                   </div>
           </div>
           <div className=
           {Repricka ? 'cold' : 'hot'}
            >

          <div><h1>
            {
       appState
            } C</h1><p>Температура</p></div>
          <div><h1>{appCo } ppm</h1><p>СO2</p></div>
        </div>
          
        </div>
            
      </div>
    </div>
  );
}

export default Hedear;