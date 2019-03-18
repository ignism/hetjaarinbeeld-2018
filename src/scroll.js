import zenscroll from 'zenscroll'

let navItems = Array.from(document.getElementsByClassName('nav-item'))
let pages = Array.from(document.getElementsByClassName('page'))

navItems.forEach((item) => {
  let target = item.getAttribute('data-target')
  let element = pages[target].querySelector('.container')
  
  item.addEventListener('click', (event) => {
    zenscroll.to(element, 600)
  })
})

let upItem = document.querySelector('.up')

if (upItem) {
  upItem.addEventListener('click', (event) => {
    let element = document.querySelector('.header')
    zenscroll.to(element, 600)
  })
}
