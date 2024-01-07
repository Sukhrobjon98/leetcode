function numberOfBoomerangs(points){
    let count = 0;
    for(let i = 0; i < points.length; i++){
        let map = new Map();
        for(let j = 0; j < points.length; j++){
            if(i !== j){
                let distance = getDistance(points[i], points[j]);
                if(map.has(distance)){
                    map.set(distance, map.get(distance) + 1);
                }else{
                    map.set(distance, 1);
                }
            }
        }
        for(let [key, value] of map){
            count += value * (value - 1);
        }
    }
    return count;
}


function getDistance(point1, point2){
    let x = point1[0] - point2[0];
    let y = point1[1] - point2[1];
    return x * x + y * y;

}
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));


