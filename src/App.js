import { useState ,useRef,useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const local_storage_key1='key.array_list'
function App() {
  const [array_list,usestateFn]=useState([])
  const textbox1_ref=useRef()

  useEffect(()=>{
    const previous_list=JSON.parse(localStorage.getItem(local_storage_key1))
    if (previous_list) usestateFn(previous_list)
  },[])
  useEffect(()=>{
    localStorage.setItem(local_storage_key1,JSON.stringify(array_list))
  },[array_list])

  function checkbox_change_function(id){
    const new_array_list=[...array_list]
    const element=new_array_list.find(single=>single.id===id)
    element.complete=!element.complete
    usestateFn(new_array_list)
  }
  function handle_function(event){
    const task_name=textbox1_ref.current.value
    if(task_name==='') return
    console.log(task_name)
    usestateFn(previous_value=>{
      return [...previous_value,{id:uuidv4(),name:task_name,complete:false}]
    })
    textbox1_ref.current.value=null
  }
  function clear_function(){
    const new_non_complete_list=array_list.filter(element=>!element.complete)
    usestateFn(new_non_complete_list)
  }
  return (
    <>
    <TodoList todolist={array_list} checkbox_change={checkbox_change_function}/>
    <input ref={textbox1_ref} type='text'/>
    <button onClick={handle_function}>Add</button>
    <button onClick={clear_function}>Clear Completed</button>
    <div>{array_list.filter(element=>!element.complete).length} left to do</div>
    </>
    );
}

export default App;
