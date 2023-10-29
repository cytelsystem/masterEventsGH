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


