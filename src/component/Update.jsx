import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { readSingleTask, updateTask } from '../data/task';



function Update() {
    const [task,setTask] = useState({
      title: '',
      start: '',
      end: '',
      desc: '' 
    });
  
  const params = useParams()
  console.log('id =', params.id);

  useEffect(() => {
    const data = readSingleTask(params.id)
    setTask(data)
  },[])

  const readValue = (event) => {
    const { name, value } = event.target 
    console.log('name =' , name , "value =" , value );
    setTask({...task,[name]:value})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('updated task =' , task);
    updateTask(params.id, task)
  }


  return (
    <div className="container">
        <div className="row">
            <div className="coi-md-12 text-center">
                <h1 className="dispaly-3 text-dark">Create</h1>
            </div>
        </div>  

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <form autoComplete="off" onSubmit={submitHandler} >
                  <div className="form-group mt-2">
                    <label htmlFor="title">Task Title</label>
                    <input type="text" name="title" id="title" value={task.title} onChange={readValue} className='form-control' required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="start">Task Start Date</label>
                    <input type="datetime-local" name="start" id="start" value={task.start} onChange={readValue} className='form-control' required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="end">Task End Date</label>
                    <input type="datetime-local" name="end" id="end" value={task.end} onChange={readValue} className='form-control' required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc"  id="desc" className='form-control'  value={task.desc} onChange={readValue} required />
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" name="" id="" value="Update Task" className="btn btn-outline-success" required />
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>  
    </div>
  )
}

export default Update
