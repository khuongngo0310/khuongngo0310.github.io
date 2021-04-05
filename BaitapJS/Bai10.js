function Bai10(){
    let sieve = {
        0: true,
        1: true,
        2: false
    };
    let l = parseInt(document.getElementById("input10-1").value);
    let r = parseInt(document.getElementById("input10-2").value);
    for (let i = 3; i*i < r; i+=2){
        if (!sieve[i])
        for (let j = i*i; j < r; j += i){
            sieve[j] = true;
        }
    }
    let str = (l <= 2) ? "2 " : "";
    for (let i = l % 2 ? l : l + 1; i < r; i += 2){
        if (!sieve[i])
            str += i.toString() + " ";
    }
    document.getElementById("KQ10").innerText = str;
}