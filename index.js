// arr = ['Measum Abbas',56,67,'Hasnain Abbas']


// arr.forEach(function(a,i){
//     console.log(`${a} is at index ${i} `)
// })


const heads = document.querySelectorAll('.haed')
const contents = document.querySelectorAll('.content')
console.log(heads)

console.log(contents)
heads.forEach((head,i)=>{
    head.addEventListener('click',function(e){
    if(contents[i].style.display === 'none'){
        contents[i].style.display = 'block'
    }else{
        contents[i].style.display = 'none'
    }
       
        
    })
})



// const func = ()=>{

// }




//how to declare function
// function num(){

// }

// const func = function(){

// }
// const func1 = ()=>{

// }