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

let simple = document.getElementById('simple')
let speedy = document.getElementById('speedy')
let easy = document.getElementById('easy')
let content = document.getElementById('insert_content')

simple.addEventListener('click', () => {
    content.innerHTML = ``
    content.innerHTML += `<div class="container_drop">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <img class="img-card" src="../images/captura_boton_1.PNG"></img>
                    <h5 class="card-title">Bookmark in one click</h5>
                    <p class="card-text">organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                </div>
            </div>
        </div>
    </div>
</div>`
})

speedy.addEventListener('click', () => {
    content.innerHTML = ``
    content.innerHTML += `<div class="container_drop">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <img class="img-card" src="../images/captura_boton_2_peque.PNG"></img>
                    <h5 class="card-title">Intelligent Search</h5>
                    <p class="card-text">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
                    <div class="card-button">
                        <button>More info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})

easy.addEventListener('click', () => {
    content.innerHTML = ``
    content.innerHTML += `<div class="container_drop">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <img class="img-card" src="../images/captura_boton_3_peque.PNG"></img>
                    <h5 class="card-title">Share your bookmarks</h5>
                    <p class="card-text">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <div class="card-button">
                        <button>More info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})