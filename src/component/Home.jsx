import React, { useEffect, useState } from 'react'
import { readAllTask, deleteTask } from '../data/task'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Home(props) {
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    const data = readAllTask()
    // console.log('task', data);
    setTasks(data);
  },[])

  const deleteHandler = async (id) => {
    try {
      if(window.confirm(`Aru you sure to delete task id=${id}?`)) {
        await deleteTask(id)
      } else {
        toast.warning("delete terminated")
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="coi-md-12 text-center">
                <h1 className="dispaly-3 text-dark">Home</h1>
            </div>
        </div> 

        <div className="row">
          {
            tasks && tasks.map((item,index) => {
              return(
                <div className="col-md-4 mt-2"  key={index}>
                  <div className="card">
                    <div className="card-header">
                      <h5 className="text-success text-center"> { item.title} </h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Start Data</strong>
                          <span className='text-success float-end'> { item.start } </span>
                        </li>

                        <li className="list-group-item">
                          <strong>End Data</strong>
                          <span className='text-success float-end'> { item.end } </span>
                        </li>

                        <li className="list-group-item">
                          <strong>Description</strong>
                          <span className='text-success float-end'> { item.desc } </span>
                        </li>

                      </ul>
                    </div>
                    
                    <div className="card-footer">
                      <NavLink to={`/update/${item.id}`} className="btn btn-info">
                        <i className='bi bi-pencil'></i>
                      </NavLink>
                      <button className='btn btn-danger float-end' onClick={() =>deleteHandler(item.id)}>
                        <i className='bi bi-trash'></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>   
    </div>
  )
}

export default Home
