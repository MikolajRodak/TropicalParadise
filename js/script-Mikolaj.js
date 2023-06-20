const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = querySelectorAll('.nav__item')

const navBtnActive = () => {
	nav.classList.toggle('nav--active')

	// allNavItems.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		nav.classList.remove('nav--active')
	// 	})
	// })
}

navBtn.addEventListener('click', navBtnActive)
