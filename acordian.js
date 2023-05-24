const heads = document.querySelectorAll(".head")
const paras = document.querySelectorAll(".para")
// console.log(heads)
// console.log(paras)


heads.forEach(handleClick)

function handleClick(head, i) {
    head.addEventListener('click', () => {
        // console.log(head)
        if (paras[i].style.display === "none") {
            paras[i].style.display = "block"
        } else {
            paras[i].style.display = "none"
        }
    })
}
