import axios from 'axios';
// import React from 'react'

const API_URL='http://127.0.0.1:3002/users';
export const addUser=async(data)=>
{
        try{
          return await axios.post(API_URL,data);
        }
        catch(error){
          console.log('Error while posting data to the addUser API',error.message);
        }
}

export const getUser=async()=>
{
  try{
    return await axios.get(API_URL);
  }
  catch(error){
    console.log('Error while getting data to the getUser API',error.message);
  }
}

export const getSingleUser=async(id)=>
{
    try{
      return await axios.get(`${API_URL}/${id}`);
    }
    catch(error){
      console.log('Error while getting data to the getSingleUser API',error.message);
    }
}

export const editUser=async(updatedData,id)=>
{
    try{
      return await axios.put(`${API_URL}/${id}`,updatedData);
    }
    catch(error){
      console.log('Error while updating data to the editUser API',error.message);
    }
}

export const deleteUser=async(id)=>
{
  try{
    return await axios.delete(`${API_URL}/${id}`);
  }
  catch(error){
    console.log('Error while updating data to the editUser API',error.message);
  }
}