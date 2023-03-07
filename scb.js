import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NextLink from "next/link";
import { colors } from '@mui/material';
import HeaderHome from '../src/components/HeaderHome';
const theme = createTheme();


export default function Index() {
  
  

  return (
    <>
    <HeaderHome/>
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xlg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "150px"
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h2" variant="h2">
            Welcome to StyleOn Admin Dashborad
          </Typography>
          
         
        </Box>
       
      </Container>
    </ThemeProvider>


    
    </>

  );
}

<TextField onChange={handleChange} type='name'
              name='name' id="name-basic" label="Name" variant="outlined" />
            <TextField onChange={handleChange} type='email'
              name='email' id="email-basic" label="Email" variant="outlined" />
            <TextField onChange={handleChange} type='password'
              name='password' id="password-basic" label="password" variant="outlined" />
