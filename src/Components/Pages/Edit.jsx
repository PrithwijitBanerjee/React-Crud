import React from 'react'
import {FormGroup,FormControl,InputLabel,Input,styled, Typography,Button} from '@mui/material'
import { useParams,useNavigate} from 'react-router-dom';
import { getSingleUser,editUser} from '../../Services/Api'; 
import {toast} from 'react-toastify'
const FormContainer=styled(FormGroup)`
        width:50%;
        margin:20px auto 0px auto;
        box-shadow:20px 20px 40px grey;
        padding:20px;
        border-radius:20px;
        & > div{
            margin:20px;
        }

`

const ButtonStyle=styled(Button)`

      width:50%;  
      margin:20px auto 0px auto;    

`
const Edit = () => {
  const Navigate=useNavigate();  
  const [user,setUser]=React.useState({});
  const {id}=useParams();
  const getSingleUserData=async()=>
  {
            const response=await getSingleUser(id);
            //  console.log(response);
            setUser(response.data);
            console.log(user.id);
  }

  React.useEffect(()=>{

    getSingleUserData();
  },[]);

  const inputHandler=(event)=>
  {
    setUser(prevUser=>{
        return {...prevUser,[event.target.name]:event.target.value};
    })
  }

  const editUserData=async(event)=>
  {
            event.preventDefault();
            await editUser(user,id);
            toast.success('Data Edited Successfully',{theme:'colored'});
            Navigate('/all');

  }
  return (
    <>
        <FormContainer>
                    <Typography variant='h4'>Edit Form</Typography>
                    <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Input style={{marginTop:'30px'}} type='text' required value={user.name} onChange={inputHandler} name='name'/>
                    </FormControl>
                    <FormControl>
                            <InputLabel>User Name</InputLabel>
                            <Input style={{marginTop:'40px'}} type='text' required value={user.userName} onChange={inputHandler} name='userName'/>
                    </FormControl>
                    <FormControl>
                            <InputLabel>Email ID</InputLabel>
                            <Input  style={{marginTop:'40px'}} type='email' required value={user.email} onChange={inputHandler} name='email'/>
                    </FormControl>
                    <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input style={{marginTop:'40px'}} type='password' required value={user.password} onChange={inputHandler} name='password'/>
                    </FormControl>
                    <ButtonStyle variant='contained' color='primary'onClick={editUserData}>Edit User</ButtonStyle>
        </FormContainer>
    </>
  )
}

export default Edit