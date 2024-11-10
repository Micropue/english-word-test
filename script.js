const arr_word = words.split("\n")
const arr_trans = trans.split("\n")
const all = []
const persent = document.getElementById("persent")
const searchInput = document.querySelector(".search")
var persentItem = []
for (var i = 0; i < arr_word.length; i++) {
    all[i] = [
        arr_word[i],
        arr_trans[i]
    ]
}
function shuffleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        const s = parseInt(Math.random() * arr.length)
        for (var j = 0; j < i; j++) {
            const temp = arr[j]
            arr[j] = arr[s]
            arr[s] = temp
        }
    }
}
// shuffleArray(all)
const listContent = document.querySelector("#list #content")
for (let i = 0; i < all.length; i++) {
    const ele = document.createElement("div")
    ele.classList = "items"
    ele.innerHTML = `<p>${i + 1}.${all[i][1]}</p>`
    ele.setAttribute("data-num", i)
    ele.setAttribute("wave", "")
    ele.addEventListener("click", () => {
        change(i)
    })
    listContent.append(ele)
}
const main = document.querySelector("#main")
const mainH1 = document.querySelector("#main h1")
const mainInput = document.querySelector("#main input")
change(0)
function checkWho() {
    var listAll = document.querySelectorAll("#list #content .items")
    const s = document.querySelector("#main input").getAttribute("data-num")
    for (var p = 0; p < listAll.length; p++) {
        listAll[p].classList.remove("active")
    }
    for (var i = 0; i < listAll.length; i++) {
        const attr = listAll[i].getAttribute("data-num")
        if (attr == s)
            listAll[i].classList.add("active")
    }
}
const input = document.querySelector("#main input")
input.addEventListener("input", () => {
    const val = input.value
    const num = input.getAttribute("data-num")
    const real = all[num][0]
    for (var s = 0; s < all[num][0].length; s++) {
        if (all[num][0][s] == val[s]) {
            persentItem[s].classList.remove("wrong")
            persentItem[s].classList.add("right")
        } else if (val[s] == undefined || val[s] == "") {
            persentItem[s].classList.remove("right")
            persentItem[s].classList.remove("wrong")
        } else {
            persentItem[s].classList.add("wrong")
            persentItem[s].classList.remove("right")
        }
    }
    const listItme = document.querySelector(`#list [data-num="${num}"]`)
    var e = document.createElement("p")
    e.classList = "tip"
    e.innerText = real
    if (val == real) {
        next()
        if (!document.querySelector(`#list #content .items[data-num="${num}"] .tip`))
            listItme.appendChild(e)
        listItme.classList.add("right")
        listItme.classList.remove("wrong")
    } else if (val.length >= real.length) {
        const s = document.querySelector(`#list #content .items[data-num="${num}"] .tip`)
        if (s) {
            s.remove()
        }
        listItme.classList.remove("right")
        listItme.classList.add("wrong")
    }
})
function change(i) {
    persent.innerHTML = ""
    mainH1.innerText = all[i][1]
    mainInput.setAttribute("data-num", i)
    mainInput.value = ""
    mainInput.setAttribute("placeholder", "请输入单词")
    for (var s = 0; s < all[i][0].length; s++) {
        const ele = document.createElement("span")
        ele.classList = "item"
        ele.setAttribute("persent-data-num", s)
        persent.append(ele)
    }
    persentItem = document.querySelectorAll("#persent .item")
    checkWho()
}
function next() {
    let num = input.getAttribute("data-num")
    num = Number(num)
    if (num < all.length - 1) {
        change(num + 1)
    } else {
        mainH1.innerText = "没有更多了"
        mainInput.setAttribute("placeholder", "请输入单词")
        mainInput.value = ""
    }
}
const wave = document.querySelectorAll("[wave]")
wave.forEach(wave => {
    wave.onclick = function (e) {
        const ele = document.createElement("span")
        ele.classList = "wave"
        ele.style.top = `${e.clientY - this.getBoundingClientRect().top}px`
        ele.style.left = `${e.clientX - this.getBoundingClientRect().left}px`
        wave.append(ele)
        setTimeout(() => {
            ele.remove()
        }, 300)
    }
})
const view = document.getElementById("view")
view.addEventListener("click", () => {
    const n = mainInput.getAttribute("data-num")
    const word = all[n][0].substr(0, parseInt(all[n][0].length * 0.25)) + "..."
    mainInput.setAttribute("placeholder", word)
    mainInput.value = ''
})
searchInput.addEventListener("input", () => {
    var item = [...document.querySelectorAll("#list #content .items")]
    if (searchInput.value != "") {
        removeAll(item)
        for (var i = 0; i < item.length; i++) {
            if (item[i].innerText.includes(searchInput.value)) {
                item[i].style.display = "flex"
            }
        }
    } else {
        showAll(item)
    }
})

function removeAll(item) {
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "none"
    }
}
function showAll(item) {
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "flex"
    }
}
const list = document.querySelector("#list")
const _main = document.querySelector("#main")
list.onclick = () => {
    list.classList.remove("hide")
}
_main.onclick = () => {
    list.classList.add("hide")
}