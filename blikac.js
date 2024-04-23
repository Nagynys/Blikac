﻿// Funkce timeru
const zmenBarvu = () => {
	const r = Math.round(Math.random() * 255)
	const g = Math.round(Math.random() * 255)
	const b = Math.round(Math.random() * 255)
	document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`
}

// Načtení stránky
window.onload = () => {
	setInterval(zmenBarvu, 2000)
	zmenBarvu()
}