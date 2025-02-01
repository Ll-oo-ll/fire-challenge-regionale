up.onchange = function () {
    down.style.display = "block" ;
    rest.style.display = "block" ;
    imgbox.style.display = "block" ;
    let file = new FileReader();
    file.readAsDataURL(up.files[0]);
    file.onload = () => {
        img.src = file.result ;
        console.log(img.src);
        
    }
}
filters.forEach( filter => {
    filter.addEventListener("input", function () {
        img.style.filter = `
            saturate(${s.value}%)
            contrast(${c.value}%)
            brightness(${b.value}%)
            sepia(${se.value}%)
            grayscale(${g.value})
            blur(${bl.value}px)
            hue-rotate(${h.value}deg)
        `
    })
})

