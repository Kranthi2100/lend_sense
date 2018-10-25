import _ from 'lodash'
export const tableFilter = (data, page, pageLimit) =>{
    let _start = (page - 1) * pageLimit;
    let _end = page * pageLimit;
    return _.slice(data, _start, _end);
}