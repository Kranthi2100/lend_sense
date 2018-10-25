import {SET_GRAPH_DATA} from './type';

export const getGraphDataFromServer = () => {
    return (dispatch) => {
        fetch(`http://api.jsonbin.io/b/5b893b00db948c68635a04eb`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: SET_GRAPH_DATA,
                    data: data
                })
            })
    }
}