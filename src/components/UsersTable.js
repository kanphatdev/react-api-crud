import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Container } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import '../App.css'
function UsersTable(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
        
          setUsers(result);
        },
       
      )
  }, [])                     
const Delete = id =>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/delete", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.status==='ok') {
      alert(result['message']);
      window.location.href =' /';
    }
  })
  .catch(error => console.log('error', error));
}
const   Update = id =>{
  window.location.href ='/Edit/' +id
} 
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: '100vh', m: 2 }} >
        <div>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    ID

                  </TableCell>
                  <TableCell align='center'>Name</TableCell>
                  <TableCell align='center'>LasName</TableCell>
                  <TableCell align='center'>avartar</TableCell>
                  <TableCell align='center'>
                    action
                    <Fab  href="/create" className='mx-3'>
                    <AddIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align='center'>{user.id}</TableCell>
                    <TableCell align='center'>
                      {user.fname}
                    </TableCell>
                    <TableCell align='center'>
                      {user.lname}
                    </TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="center">
                        <Avatar alt="Remy Sharp" src={user.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align='center'>

                      <Button color='warning' onClick={()=>Update (user.id)} ><EditOutlinedIcon/></Button>
                      <Button color='error' onClick={()=>Delete(user.id)}><DeleteOutlineOutlinedIcon/></Button>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </Box>
    </Container>
  );
}

export default UsersTable;
