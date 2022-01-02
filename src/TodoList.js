import Todo from "./Todo";
function TodoList({todolist,checkbox_change}) {
    return (
        todolist.map(single=>{
            return <Todo key={single.id} checkbox_change_function={checkbox_change} display_element={single}/>
        })
    );
  }
  
export default TodoList;