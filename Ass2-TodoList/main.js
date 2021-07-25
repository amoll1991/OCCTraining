let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
let delBtn = document.querySelector('#del-btn');

btn.addEventListener('click', () => {
    let txt = input.value;
    if (txt === "") {
        alert('you must write something');
    } else {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let removeBtn = document.createElement('button');
        name.innerHTML = txt;
        removeBtn.innerHTML = "Remove";

        li.appendChild(name);
        li.appendChild(removeBtn);
        list.insertBefore(li, list.childNodes[0]);
        removeBtn.classList.add('del-btn');
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
        });
    }
})
