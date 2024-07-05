function rain(){
    let container = document.getElementById('rain');
    let e = document.createElement('div');
    e.classList.add('raindrop');
    container.appendChild(e);
    e.style.left = `${Math.random() * 98}%`
    e.style.width = `${Math.random() * 5}px`
    e.style.height = `${Math.random() * 15}px`

    setTimeout(()=>{container.removeChild(e)},4000)
}


setInterval(()=>{
    rain();
    console.log('awa')
},50)