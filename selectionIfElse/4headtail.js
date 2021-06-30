const HEAD = 0;

let toss = Math.floor((Math.random() * 10) % 2);

if (toss == HEAD){
    status = console.log("Heads");
}else{
    status = console.log("Tails");
}