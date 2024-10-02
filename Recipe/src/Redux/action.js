export const home_action = (data) => (dispatch)=> {
  
      fetch(`http://localhost:9595/pro`, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
          .then((res) => res.json())
          .then((res) => {
              dispatch({
                  type: "ADD",
                  payload: res,
              });
             
          })
          
  };


  const recipe_action = () =>{
    fetch(`http://localhost:9595/pro`)
    .then(res=>res.json())
    .then(res=>{
      dispatch(
        {

          type:"SUCCESS",
          payload:res
        }
      )
    })
  }