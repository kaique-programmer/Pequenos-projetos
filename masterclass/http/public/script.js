const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load() {
  const res = await fetch("http://localhost:3000/").then((data) => data.json())
  res.urls.map(({ name, url }) => addElement({ name, url }))
}

load()

function addElement ({ name, url }) {
  const li = document.createElement('li')
  const a = document.createElement('a')
  const trash = document.createElement('span')

  a.href = url
  a.innerHTML = name
  a.target = "_blank"

  trash.innerHTML = "x"
  trash.onclick = () => removeElement(trash)

  li.append(a)
  li.append(trash)
  ul.append(li)

}

function removeElement (el) {
  if(confirm("Do you want to delete?"))
    el.parentNode.remove()
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  let { value } = input

  if(!value)
    return alert('Fill the field');

  const [name, url] = value.split(',')

  if(!url)
    return alert('format the text correctly!');

  if(!/^http/.test(url))
    return alert('Digit the url correcly!');

  addElement({ name, url })

  input.value = ""
})