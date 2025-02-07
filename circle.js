const PI = 3.14;

const calculateArea = (radius)=>{
    return PI * radius*radius;
}

module.exports = {
    area:calculateArea
}