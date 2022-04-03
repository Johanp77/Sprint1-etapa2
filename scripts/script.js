window.onload = function () {
    let btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            let menu_items = document.querySelector('.menu_items')
            let menu_color = document.querySelector('.menu_color')
            menu_color.classList.toggle('hidden')
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        })
    }
}
