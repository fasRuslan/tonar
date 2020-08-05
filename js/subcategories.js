let li = document.querySelectorAll('.isothermal-item')

console.log(li[0].firstElementChild.firstElementChild)


for (let i = 0;i<li.length;i++){
		li[i].addEventListener('mouseover',on)
}
for (let i = 0;i<li.length;i++){
		li[i].addEventListener('mouseleave',out)
}


function on(){
		this.style.backgroundColor = '#12398A';
		this.firstElementChild.firstElementChild.style.color = '#FFFFFF';
}
function out(){
		this.style.backgroundColor = '#FFFFFF';
		this.firstElementChild.firstElementChild.style.color = '#12398A';
}