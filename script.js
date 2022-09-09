const container = document.createElement('div')
container.classList.add('container')
document.body.prepend(container)

const tabs = document.createElement('div')
tabs.classList.add('tabs')
container.append(tabs)

const contents = document.createElement('div')
contents.classList.add('contents')
container.append(contents)

tabs.innerHTML = `
<div class="javaScript design active">Java Script</div>
<div class="ruby design">Ruby</div>
<div class="pyp design">PHP</div>
`

contents.innerHTML = `
<div class="javaScript display active">Java Script is great!</div>
<div class="ruby display">Ruby great!</div>
<div class="pyp display">PHP great!</div>
`

const javaScript = document.querySelectorAll('.javaScript')
const ruby = document.querySelectorAll('.ruby')
const pyp = document.querySelectorAll('.pyp')

tabs.addEventListener('click', activeTab)

function activeTab (event) {
    if (event.target.closest('.ruby')) {
        ruby.forEach((i) => {
            i.classList.add('active')
        }) 
        javaScript.forEach((i) => {
            i.classList.remove('active')
        }) 
        pyp.forEach((i) => {
            i.classList.remove('active')
        })
    }

    if (event.target.closest('.pyp')) {
        pyp.forEach((i) => {
            i.classList.add('active')
        }) 
        javaScript.forEach((i) => {
            i.classList.remove('active')
        }) 
        ruby.forEach((i) => {
            i.classList.remove('active')
        })
    }

    if (event.target.closest('.javaScript')) {
        javaScript.forEach((i) => {
            i.classList.add('active')
        }) 
        pyp.forEach((i) => {
            i.classList.remove('active')
        }) 
        ruby.forEach((i) => {
            i.classList.remove('active')
        })
    }
}

import { x } from './script_2'
console.log ('x ===>', x)