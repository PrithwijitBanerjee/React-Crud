import React from 'react'
import { Table,TableBody,TableHead,TableCell,TableRow,styled, Button, Typography} from '@mui/material'
import { getUser,deleteUser} from '../../Services/Api'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
const TableContainer=styled(Table)`
      width:90%;
      margin:20px auto 0px auto;
      box-shadow:20px 20px 40px grey;
`

const HeadRow=styled(TableRow)`
      background-color:black;
      & > th {
        color:white;
        font-size:19px;
      }
`
const TableData=styled(TableCell)`
      background-color:lightgrey; 
      font-size:15px; 
`

const TypoContent=styled(Typography)`
    color:red;
`

const TableContent=styled(TableData)`
    text-align:center;
`
const AllUsers = () => {
  const [users,setUsers]=React.useState([]);

  const getUsersData=async()=>
  {
      //API call................
      const response=await getUser();
      setUsers(response.data);
  }

  React.useEffect(()=>{

    getUsersData();//Custom Hooks
  },[]);

  const deleteUserData=async(id)=>
  {
    //alert(id);
      await deleteUser(id);
      await getUsersData();
      toast.error(`Record of user id ${id} has been deleted`,{
        theme:'colored'
      });
  }
  return (
    <>
        <TableContainer>
          <TableHead>
                  <HeadRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email Id</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                  </HeadRow>
          </TableHead>
          <TableBody>
                      {
                        (users.length===0)?<>
                          <TableRow>
                              <TableContent colSpan={8}><TypoContent variant='h5'>Empty Record!!!! No Users are available </TypoContent></TableContent>
                          </TableRow>
                        </>:<>
                            {
                              users.map(user=>{
                                return (
                                  <>
                                    <TableRow>
                                            <TableData>{user.id}</TableData>
                                            <TableData>{user.name}</TableData>
                                            <TableData>{user.userName}</TableData>
                                            <TableData>{user.email}</TableData>
                                            <TableData>{user.password}</TableData>
                                            <TableData><Button variant='contained'  color='success' component={Link} to={`/edit/${user.id}`}>Edit</Button></TableData>
                                            <TableData><Button variant='contained' color='warning' onClick={deleteUserData.bind(this,user.id)}>Delete</Button></TableData>
                                    </TableRow>
                                  </>
                          )
                        })
                            }
                        </>
                      }
          </TableBody>
        </TableContainer>
    </>
  )
}

export default AllUsers