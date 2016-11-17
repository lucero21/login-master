/*** Created by lucero on 12/10/2016.*/

module.exports = exports = function sortMapByValue(map)
{
    var tupleArray = [];
   // for (var key in map) tupleArray.push([key, map[key]]);
    for (var key in map) {
        if (map.hasOwnProperty(key)) tupleArray.push({usuario: key, score:  map[key]});
    }
   // tupleArray.sort(function (a, b) { return b - a});
    tupleArray.sort(function (a, b) { return b.score - a.score});
    return tupleArray;
}

