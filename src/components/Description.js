import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { uncheckedList } from './data';
import axios from 'axios';  
import Header from './header';
import Loader from './loader';

export default function Description(props) {

let {currentItemInView} = useParams();
// console.log(currentItemInView);
const [task,setTask] = useState();
// console.log(task);

useEffect (() =>{
  fetchItem()
},[])

const fetchItem = () =>{
  axios.get(`https://api-nodejs-todolist.herokuapp.com/task/${currentItemInView}`,{ 
    headers:{
        Authorization:localStorage.getItem('token')
    }
  }).then((res)=>{
    console.log(res)
    setTask({
      description:res.data.data.description,
      createdAt:res.data.data.createdAt.split("T")[0]
  })
    
  }).catch((err)=>{
    console.log(err)
  })
}

const generateHTML = () => {

  if(!task)
      return <Loader/>
  
  return (

          <div>
            <table className="table">
            <tbody>
              <tr>
            <th scope="row">Description</th>
            <td>: </td>
            <td>{task.description} </td>
            </tr>

            <tr>
          <th scope="row">Added on</th>
          <td>: </td>
          <td>{task.createdAt} </td>
            </tr>
          </tbody>
          </table> 
          </div>

  );

  } 


  return (
    <section>
      <Header/>
    
        <section className='w-100 mt-4'>
            
            <div className='container'>
              <div className='card'>
                <div className='card-title'>
                  <h3>Task Detail</h3>
                </div>
              {generateHTML()}
              </div>
            </div>
        </section>
  </section>
  );
}
