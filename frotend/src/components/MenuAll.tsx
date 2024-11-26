import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { authActions } from '../store/authSlice';
import {useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ad from '../assets/ad.png'
import user from '../assets/user.png'
import  Tooltip from '@mui/material/Tooltip';


function MenuAll() {
    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const isAdmin = userData.userRol === 'admin';
    const userImg = isAdmin ? ad : user;

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
      };


      const salirLogin =()=>{
        dispatch(authActions.logout(
        ))
        navigate('/')
      }
  

     
    
    
      const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List >
          <Link to={'/home'}  style={{textDecoration:'none', color:'black'}} >
          <Tooltip title="Home">
              <ListItem >
                <ListItemButton >
                  <HomeIcon sx={{mr:2}}></HomeIcon>
                  <ListItemText>Home</ListItemText> 
                </ListItemButton>
              </ListItem>
              </Tooltip>
           </Link>
          </List>
          <Divider />

         {isAdmin &&( 
          <>
          <List>
          <Link to={'/reports'}  style={{textDecoration:'none', color:'black'}}>
          <Tooltip title="Informes">
              <ListItem >
                <ListItemButton>
                  <InsertDriveFileIcon sx={{mr:2}}></InsertDriveFileIcon>
                  <ListItemText>Informes</ListItemText> 
                </ListItemButton>
              </ListItem>
          </Tooltip>
              </Link>
          </List>
          <Divider />
          </>
          )}
          <List>
          <Link to={'/manualUsuario.pdf'} target='_blank' style={{textDecoration:'none', color:'black'}}>
          <Tooltip title="Visualizar manual de usuario">
              <ListItem >
                <ListItemButton>
                  <HelpIcon sx={{mr:2}}></HelpIcon>
                  <ListItemText>Ayuda</ListItemText> 
                </ListItemButton>
              </ListItem>
              </Tooltip>
              </Link>
          </List>
          <Divider />
          <List>
            <Tooltip title="Salir de la aplicación">
              <ListItem >
                <ListItemButton onClick={salirLogin}>
                  <ExitToAppIcon sx={{mr:2}}></ExitToAppIcon>
                  <ListItemText>Salir</ListItemText> 
                </ListItemButton>
              </ListItem>
              </Tooltip>
          </List>
          <Divider />
        </Box>
      );

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      <Tooltip title="Menu">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          {userData.userName}
        </Typography>
        <Avatar alt="User Image" src={userImg}></Avatar>
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>
  </Box>
);
}
  

export default MenuAll
