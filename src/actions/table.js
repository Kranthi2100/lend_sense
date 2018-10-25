import {SET_TABLE_DATA} from './type';

export const getTableDataFromServer = () => {
    return (dispatch) => {
        fetch(`http://api.jsonbin.io/b/5b893aa03ffac56f4bd7905a`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: SET_TABLE_DATA,
                    data: data
                })
            })
    }
}