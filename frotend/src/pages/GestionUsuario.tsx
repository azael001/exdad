import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import MenuAll from '../components/MenuAll'
import User from '../components/User';
function GestionUsuario() {
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
    <MenuAll/>
    <User/>
    </>
  )
}


export default GestionUsuario