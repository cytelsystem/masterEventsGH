import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const apiUrl = "http://localhost:8080/event";

  const [configuracion, setConfiguracion] = useState(null);
  const [eventById, setEventById] = useState(null);
  const [randomEvent, setRandomEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (apiUrl, setDataCallback) => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setDataCallback(data);
      } else {
        console.error(`Error al obtener datos de la API: ${apiUrl}`);
      }
    } catch (error) {
      console.error(`Error al obtener datos de la API: ${apiUrl}`, error);
    }
  };

  useEffect(() => {
    fetchData(apiUrl, setConfiguracion);
    // fetchData(`${apiUrl}/id`, setEventById);
    fetchData(`${apiUrl}/random`, setRandomEvent);
    setLoading(false);
  }, []); // Solo se ejecuta una vez al cargar el componente

  return (
    <DataContext.Provider value={{ configuracion, eventById, randomEvent }}>
      {loading ? 'Cargando...' : children}
    </DataContext.Provider>
  );
};




//*********************************Desde archivo json************************************* */
/*
import {useState, useEffect, createContext} from 'react';//

export const DataContext = createContext();

export const DataProvider = ( { children }) => {



const url = "https://benjumeacarlos981.github.io/MasterEvents/configuracion.json";

    const [configuracion, setConfiguracion] = useState()

    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setConfiguracion(responseJSON)
    }

    useEffect(() => {
      fetchApi();

    }, [configuracion])

  return (
    <>
      { !configuracion ? 'Cargando...' :
      <DataContext.Provider value={
        {
          configuracion,
          setConfiguracion
        }
      }
    >

        { children }
      </DataContext.Provider>
      }
    </>
  )


}
*/
//************************************************************************************** */

