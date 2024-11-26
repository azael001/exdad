
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import  { useState } from "react";
import React from "react";
import { Button } from '@mui/material';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
function User() {
  useEffect(() => {
    fetchData();

  }, []);
  interface itemtype {
    id?: number
    nombre: string
    login: string
    password: string
    rol: string
  }
  const itemInitialState: itemtype = {
    nombre: ' ',
    login: ' ',
    password: ' ',
    rol: ' '
  }
  const userData = useSelector((state: RootState) => state.authenticator)
  const [tableData, setTableData] = useState([])
  const [item, setItem] = useState(itemInitialState)
  const isAdmin = userData.userRol === 'admin';


  async function handleSubmit(e: any) {
    e.preventDefault()
    const isValid = item.nombre && item.login && item.password && item.rol;
  if (isValid) {
    console.log(item)
    fetch(`http://localhost:3030/addItemUser?nombre=${item.nombre}&login=${item.login}&password=${item.password}&rol=${item.rol}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        fetchData()
        if (response > 0) {
          alert('Datos insertados con éxito')
        } else {
          alert('No se han insertado bien')
        }
      })
      setItem(itemInitialState)
  } else {
    alert("rellene todos los campos")
  }
};
  async function fetchData() {
    fetch(`http://localhost:3030/getItemsUser`)
      .then(response => response.json())
      .then(response => {
        console.log(response.data)
        setTableData(response.data)
      })
  };

  const handleChangeName = (e: any) => {
    setItem({
      ...item,
      nombre: e.target.value,
    });
  };
  const handleChangeLogin = (e: any) => {
    setItem({
      ...item,
      login: e.target.value,
    });
  };


  const handleChangePassword = (e: any) => {
    setItem({
      ...item,
      password: e.target.value,
    });
  };

  const handleChangeRol = (e: any) => {
    setItem({
      ...item,
      rol: e.target.value,
    });
  };

  return (

    <Box component="form" sx={{ width: 1 }} onSubmit={handleSubmit}>
      <Grid container sx={{ mt: 2, justifyContent: 'center' }} >

        <Grid size={{ xs: 6, md: 4, xl: 3 }}>
          <TextField
            required
            label="Nombre"
            variant="outlined"
            fullWidth
            value={item.nombre}
            onChange={handleChangeName}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 4, xl: 3 }}>
          <TextField
            label="Login"
            variant="outlined"
            fullWidth
            required
            value={item.login}
            onChange={handleChangeLogin}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 4, xl: 3 }}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            value={item.password}
            onChange={handleChangePassword}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 4, xl: 3 }}>
          <TextField
            label="Rol"
            variant="outlined"
            fullWidth
            required
            value={item.rol}
            onChange={handleChangeRol}
          />
        </Grid>
        
        <Grid size={{ xs: 6, md: 4, xl: 12 }} ></Grid>
        <Tooltip title="Insertar Datos">
        <Button variant='contained' sx={{ mt: 2, width: 0.6 }} type='submit' >+Insertar Datos</Button>
        </Tooltip>
      </Grid>
      <TableContainer>
        <Table aria-label="coleccion">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Login</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Rol</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: itemtype) => (
              <TableRow key={row.id}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.login}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>{row.rol}</TableCell>
              </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>






    </Box>
  );
}

export default User