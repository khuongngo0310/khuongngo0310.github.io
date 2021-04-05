function Bai9() {
    let str = document.getElementById("input9").value;
    let strings = str.split(' ');
    document.getElementById("KQ9").innerText = strings.reduce((acc,cur) => {
        if (cur.length > acc.length) return cur;
            else return acc;
    });
}