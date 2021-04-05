function Bai6(){
    let str = document.getElementById("input6").value;
    let obj = {};
    for (let i of str){
        if (obj[i])
            obj[i]++;
        else obj[i] = 1;
    }
    let max = 0;
    let j;
    for (let i in obj){
        if (obj[i] > max){
            max = obj[i];
            j = i;
        }
    }
    document.getElementById("KQ6").innerText = "'"+j+"'" + " xuất hiện " + max +" lần trong chuỗi";
}