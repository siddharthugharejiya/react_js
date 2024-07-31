import { email, password, username } from './S_actionType'; 

export const S_action = (data) => (dispatch) => {
    fetch(`http://localhost:9595/UserName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: username, 
            payload: data.username
        });
        dispatch({
            type: email,
            payload: data.email
        });
        dispatch({
            type: password,
            payload: data.password
        });
    })
    .catch(error => {
        console.log(error);
    });
};
