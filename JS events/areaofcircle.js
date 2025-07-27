function areaofcircle(){
    let r = document.getElementById('t1').value
    const Pi = 3.14
    area = Pi*r*r
    alert(area)
}
function eraseData(){
    document.getElementById('t1').value = ""
}