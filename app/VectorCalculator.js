exports.sum = (v1,v2) => {
    return {x:v1.x+v2.x,y:v1.y+v2.y};
}

exports.sub = (v1,v2) => {
    return {x:v1.x-v2.x,y:v1.y-v2.y};
}

exports.scalar = (v1,s) => {
    return {x:v1.x*s,y:v1.y*s};
}

exports.dot = (v1,v2) => {
    return (v1.x*v2.x) + (v1.y*v2.y)
    
}

