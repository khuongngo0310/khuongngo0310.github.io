function showBai(tenBai){
    for (let i of document.getElementsByClassName("Bai")){
        i.style.display = "none";
    }  
    document.getElementById(tenBai).style.display = "block";
}