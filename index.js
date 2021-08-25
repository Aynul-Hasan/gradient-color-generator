const getId=(id_name)=>{
   let tag= document.getElementById(id_name)
   return tag;
}
let dir='right top';

const direction=(value)=>{
    dir=value
}
document.getElementById('color_generate').addEventListener("click",(e)=>{
    e.preventDefault()
    const color= getId('input_1st').value
    const color_2nd=getId('input_2nd').value
    const bg= getId('bg')
    const show_css=getId('css_show')
    
    // console.log(color,color_2nd)
    if(dir==='circle'){
        bg.style.background=`radial-gradient( ${dir},${color}, ${color_2nd})`
        show_css.innerText=`radial-gradient( ${dir},${color}, ${color_2nd})`;
    }else{
        bg.style.background=` linear-gradient(to ${dir},${color}, ${color_2nd})`
        show_css.innerText=`linear-gradient( to ${dir} ,${color}, ${color_2nd})`
    }
    bg.style.backgroundRepeat="no-repeat"
})
// linear-gradient(to ${dir},${tag}, ${tags});