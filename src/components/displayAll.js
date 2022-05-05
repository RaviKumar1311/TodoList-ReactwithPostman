import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Loader from './loader';
import Header from './header';

export default function DisplayAll(props) {

    const { mode } = props;

    useEffect(() => {
        fetchAllTasks();
    }, [])

    const [tasks,setTasks] = useState()

    const fetchAllTasks = () => {
        axios.get('https://api-nodejs-todolist.herokuapp.com/task', {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then((res) => {
            // console.log(res.data.data)
            setTasks(res.data.data)
            // console.log(tasks)
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(tasks)

    const generateHTMLdesc = () => {
        if(!tasks)
            return <Loader/>
        
        var html = Object.keys(tasks).map((item,index) => (

        <div className="container" key={`to-do-list-${item}`} >
        <table className="table " >
           
            <tbody >
                <tr >
                    <th className=" col-2" style={{color: mode==='dark'?'white':'black'}} scope="row">{index + 1}</th>
                    <td className="col-4" style={{color: mode==='dark'?'white':'black'}}>
                    {tasks[item].description}
                    </td>
                    <td className="col-3" style={{color: mode==='dark'?'white':'black'}}>
                    {tasks[item].createdAt.split("T")[0]}
                    </td >
                    <td className="col-3" style={{color: mode==='dark'?'white':'black'}}>
                    {tasks[item].completed?'Completed':'Pending'}
                    </td>
                   
                </tr>
            </tbody>
         
        </table>
        </div>

        ))
        return html;


        }  

return (
    <section>
        <Header mode={mode}/>
        <div className='container mt-5'>
            <h1 style={{color: mode==='dark'?'white':'black'}}>All Tasks</h1>
        <table className='table'>        
            <thead className="thead-dark">
                <tr>
                <th scope="col" className=" col-2">S.No</th>
                    <th scope="col" className=" col-4">Task</th>
                    <th scope="col" className=" col-3">Added on</th>
                    <th scope="col" className=" col-3">Status</th>
                </tr>
            </thead>
        </table>
        </div>
        <div style={{color: mode==='dark'?'white':'black'}}>
        {
            generateHTMLdesc()
        }
        </div>
    </section>
    );
    }
