import _ from 'lodash'
export const graphFilter = (data, filter) =>{
    let {data: _data, keywords: _keywords} = traverse(data)
    //dont not change order of filters
    _data = filterKeywords(_data, data, filter.keywordFilter);
    _data = filterTime(_data, filter.timeFilter); 
    return {
        data: _data,
        keywords: _keywords
    };
}

const traverse = (data) => {
    let _data = []
    let _keywords = ["all keywords"]
    _.forIn(data, (val, key) => {
        _data.push(val.points);
        _keywords.push(key);
    })
    return {
        data: _data,
        keywords: _keywords
    };
}

const filterTimeMap = new Map();
filterTimeMap.set("2 days", 5);
filterTimeMap.set("4 days", 3);
filterTimeMap.set("one week", 0);

const filterTime = (_data, timeFilter) => {

    let shrinkArrayBy = filterTimeMap.get(timeFilter);

    _data = _.map(_data, values => {
        return _.drop(values, shrinkArrayBy);
    });
    
    return _data;
}

const filterKeywords = (data, rawData, keyword) => {
    if(keyword === "all keywords") return data;
    let _data = []
    _data.push(rawData[keyword].points)
    return _data;
}
