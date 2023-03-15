import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useParams } from 'react-router-dom';
const Form = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [avartar, setAvartar] = useState('');
    const [Id, setId] = useState('');
const {id} = useParams();
    useEffect(() => {
        // this code will run when the component mounts
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
            .then(response => response.json())
            .then(result =>{
                if (result.status==='ok') {
                    setFname(result['user']['fname'])
                    setLname(result['user']['lname'])
                    setEmail(result['user']['email'])
                    setUsername(result['user']['username'])
                    setAvartar(result['user']['avatar'])
                    setId(result['user']['id'])
                }
              })
            .catch(error => console.log('error', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": id,
          "fname": fname,
      "lname": lname,
      "username": avartar,
      "email": email,
      "avatar": username
        });
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://www.melivecode.com/api/users/update", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status==='ok') {
                alert(result['message']);
                window.location.href =' /';
            }
          })
          .catch(error => console.log('error', error));
    };

    return (
       <>
       <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{  height: '100vh' }} >
        <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3,mx:3 }} className='my-3'>
        <Grid item xs={6}>
        <TextField
                label="First Name"
                variant="outlined"
                value={fname}
                onChange={(event) => setFname(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
                label="Last Name"
                variant="outlined"
                value={lname}
                onChange={(event) => setLname(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
                label="Email"
                variant="outlined"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
                label="username"
                variant="outlined"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
                label="ID"
                variant="outlined"
                type="text "
                value={Id}
                onChange={(event) => setId(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
                label="avartar"
                variant="outlined"
                type="text"
                value={avartar}
                onChange={(event) => setAvartar(event.target.value)}
                margin="normal"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained"
         sx={{ mt: 3, mb: 2 }}
        fullWidth
        className='center mx-5'
        type='submit'
        >update</Button>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained"
         sx={{ mt: 3, mb: 2 }}
        fullWidth
        className='center mx-5'
        color='warning'
        href='/'
        ><ArrowBackIosNewOutlinedIcon/></Button>
        </Grid>
      </Grid>  
        </form>
        </Box>
      </Container> 
       
       </>
    );
};

export default Form;
