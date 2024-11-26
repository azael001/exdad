import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import MenuAll from '../components/MenuAll'
import Dashboard from '../components/Dashboard';
function Home() {
  // Almacenamos en la variable userData lo que obtenemos del store usando el hook useSelector
  const userData = useSelector((state: RootState) => state.authenticator)
  // Comprobamos por la consola qué obtenemos del store
  const navigate = useNavigate()
  const isLoggedin = userData.isAutenticated

    useEffect(() => {
    if (!isLoggedin) {
    navigate('/')
    }
    }, [isLoggedin, navigate])
  return (
    <>
    <MenuAll/>
    <Dashboard/>
    </>
  )
}


export default Home