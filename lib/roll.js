export default function roll(s,d,r){
    if(s==-1){
        s = 6
    }
    if(d==-1){
        d = 2
    }
    if(r==-1){
        r = 1
    }
    let res = [];
    for(let i=0;i<r;i++){
        res.push(Math.floor(Math.random()*(s*d)+1));
    }
    let mes = {'sides': s, 'dice':d, 'rolls':r, 'results': res}
    return JSON.stringify(mes)
};