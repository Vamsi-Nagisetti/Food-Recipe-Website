var animation = bodymovin.loadAnimation({
    container:document.getElementById("anim"),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'https://assets8.lottiefiles.com/packages/lf20_e12qdphg.json'
})
var animate = bodymovin.loadAnimation({
    container:document.querySelector(".loading"),
    renderer:"svg",
    autoplay:true,
    loop:true,
    path:"https://assets2.lottiefiles.com/packages/lf20_rPGSco.json"
})