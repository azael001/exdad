import MenuAll from "../components/MenuAll"
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useEffect } from 'react';
import EjemploInforme from '../components/EjemploInforme'



function Reports() {

  const userData = useSelector((state: RootState) => state.authenticator)
  const navigate = useNavigate()
  const isLoggedin = userData.isAutenticated
    useEffect(() => {
    if (!isLoggedin) {
    navigate('/')
    }
    
    }, [isLoggedin, navigate])

    return (
        <>
        <MenuAll></MenuAll>
       <EjemploInforme></EjemploInforme>
        </>

    )
  }
export default Reports