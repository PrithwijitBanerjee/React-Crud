import React from 'react'
import { FormGroup,FormControl,InputLabel,Input,styled, Typography,Button} from '@mui/material'
import { addUser } from '../../Services/Api'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const FormContainer=styled(FormGroup)`
      width:50%;
      margin:30px auto 0px auto;
      box-shadow:10px 10px 50px grey;
      padding:25px;
      border-radius:20px;
      & >div{
        margin:10px;
      }
`

const ButtonStyle=styled(Button)`
      width:30%;
      margin:20px auto 0px auto;
`
const AddUsers = () => 
{
  const Navigate=useNavigate();    
  const [formData,setFormData]=React.useState({
        name:'',
        userName:'',
        email:'',
        password:''
  });
  const [formErr,setFormErr]=React.useState({});
  const inputHandler=(event)=>
  {
    setFormData(prevFormData=>{
      return {...prevFormData,[event.target.name]:event.target.value}});
  }

  const validate=()=>
  {
      const err={};
      if(formData.name==='')
      {
            err.nameErr='Name is Required';
      }
      if(formData.userName==='')
      {
            err.userNameErr='User Name is Required';
      }
      if(formData.email==='')
      {
            err.emailErr='Email Id is required';
      }
      if(formData.password.length<1)
      {
            err.passwordErr='Password is required';
      }
      setFormErr(err);

      return Object.keys(err).length<1;
  }

  const addUserData=async(event)=>
  {
      event.preventDefault();

      // API call...................
      if(validate())
      {
      await addUser(formData);
      toast.success('Data Added Successfully',{
            theme:'colored'
      });
      Navigate('/all');
      }
      else{
            toast.error('Plz fill all the fields properly',{theme:'colored'});
      }
  }
  return (
    <>
      <FormContainer>
          <Typography variant='h4'>Add Users</Typography>
          <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' required  onChange={inputHandler} name='name' value={formData.name}/><span style={{color:'red'}}>{formErr?.nameErr}</span>
          </FormControl>
          <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input type='text' required  onChange={inputHandler} name='userName' value={formData.userName}/><span style={{color:'red'}}>{formErr?.userNameErr}</span>
          </FormControl>
          <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='email' required  onChange={inputHandler} name='email' value={formData.email}/><span style={{color:'red'}}>{formErr?.emailErr}</span>
          </FormControl>
          <FormControl>
                <InputLabel>Password</InputLabel>
                <Input type='password' required onChange={inputHandler} name='password' value={formData.password}/><span style={{color:'red'}}>{formErr?.passwordErr}</span>
          </FormControl>
          <ButtonStyle variant='contained' color='primary' onClick={addUserData}>Add User</ButtonStyle>
      </FormContainer>
    </>
  )
}

export default AddUsers