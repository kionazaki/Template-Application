import underscore from "underscore";

function isEmpty(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            return false
        }
    }
    return true;
}

function newObj(currentObj, patternObj){
    if (currentObj){
        return currentObj;
    } else {
        switch( Object.prototype.toString.call(patternObj) ){
            case '[object Array]':
                return [];
            case '[object Object]':
                return {};
            default:
                return null;
        }
    }
}

function doIt(objA, objB){
    var acc;
    var tmp;
    var changed;
    for (var key in objB){
        if (objB.hasOwnProperty(key)){
            if (typeof(objB[key]) === 'object' && objA !== undefined){
                tmp = doIt(objA[key], objB[key]);
                if (!!tmp){
                    acc = newObj(acc, objB);
                    acc[key] = tmp;
                }
            } else {
                changed = false;
                if (objA){
                    if (objA[key] !== objB[key]){
                        changed = true;
                    }
                } else {
                    changed = true;
                }
                if (changed){
                    acc = newObj(acc, objB);
                    acc[key] = objB[key];
                }
            }
        }
    }
    return acc;
}

function addDeleted(objA, objB){
    var acc;
    var tmp;
    for (let key in objA){
        if (objA.hasOwnProperty(key)){
            if (objB[key] === undefined){
                acc = newObj(acc, objA);
                acc[key] = '__deleted';
            }
            else {
                if (typeof(objB[key]) === 'object'){
                    tmp = addDeleted(objA[key], objB[key]);
                    if (!!tmp){
                        acc = newObj(acc, objB);
                        acc[key] = tmp;
                    }
                }
            }
        }
    }
    return acc;
}

function concatAll(objA, objB){
    var acc = objA;
    var type;
    for (let key in objB){
        if (objB.hasOwnProperty(key)){
            type = Object.prototype.toString.call(objB[key]);
            if (typeof(objB[key]) === 'object'){
                if (type === '[object Array]'){
                    if (acc[key] === undefined){
                        acc[key] = [];
                    }
                    acc[key] = concatAll(acc[key], objB[key]);
                } else if (type === '[object Object]'){
                    if (acc[key] === undefined){
                        acc[key] = {};
                    }
                    acc[key] = concatAll(acc[key], objB[key]);
                }

            } else {
                acc[key] = objB[key];
            }
        }
    }
    return acc;
}

function compare(current, expected){
    var result = underscore.isEqual(current, expected);
    if (!result){
        result = '\n\rExpected changes: \n\r'+JSON.stringify(expected)+' \n\rbut current changes: \n\r' + JSON.stringify(current)} //throw
    return result;
}

function recursion(objA, objB){
    var a = objA;
    var b = objB;
    var acc1 = doIt(objA, objB)||{};
    var acc2 = addDeleted(a, b);
    return concatAll(acc1, acc2);
}


function getDiffs(objA, objB){
    var result = recursion(objA, objB);
    result = JSON.parse(JSON.stringify(result));
    return(result);
}


function cloneState(obj){
    return JSON.parse(JSON.stringify(obj));
}

function getNewState(state, func, pars){
    let obj = func(cloneState(state), pars);
    return cloneState(obj);
}

function getResult(tSet){
    tSet.oldState = cloneState(tSet.newState);
    tSet.newState = getNewState(tSet.oldState, tSet.func, tSet.pars);
    tSet.result =  cloneState(compare(getDiffs(tSet.oldState,tSet.newState), tSet.expectedResult ));
    return tSet;
}







var handleStateForTest = {
    compare: compare,
    getResult: getResult
};




export default handleStateForTest;

