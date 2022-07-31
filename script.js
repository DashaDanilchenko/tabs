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
<div class="javaScript design">Java Script</div>
<div class="ruby design">Ruby</div>
<div class="pyp design">PHP</div>
`

contents.innerHTML = `
<div class="javaScript display">Java Script is great</div>
<div class="ruby display">Ruby great</div>
<div class="pyp display">PHP great</div>
`