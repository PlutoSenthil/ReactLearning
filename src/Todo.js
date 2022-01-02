

export default function Todo({display_element,checkbox_change_function}) {
    function change_function(){
        console.log('Check Box Test')
        checkbox_change_function(display_element.id)
        console.log('Check Box Test Finish')
    }
    return (
        <div>
            <input type='checkbox' defaultChecked={display_element.complete} onChange={change_function}/>
            {display_element.name}
        </div>
        );
  }
  