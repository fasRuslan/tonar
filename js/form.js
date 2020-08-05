let btn = document.querySelector('.call-form');
let form = document.querySelector('.form');
let btnCancel = document.querySelector('.btnCancel')
// открыть форму
btn.addEventListener('click', openForm)

function openForm(){
	form.style.display = 'block';
}
// закрыть форму
btnCancel.addEventListener('click', cancelForm)
function cancelForm(){
	form.style.display = 'none';
}