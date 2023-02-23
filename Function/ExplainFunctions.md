# Explicación de funciones.

### Skills section.

```javascript
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

  
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    } if(itemClass === 'skills__content skills__close'){ // Change class close to class open
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el =>{el.addEventListener('click', toggleSkills)}))


```

+ `this.parentNode`: Por medio de `parentNode` podemos seleccionar el elemento padre de otro elemento. Por ejemplo si el ID de un `<p>` es un `<div>` tomara ese lemento ya que es el padre de `<p>`.
  [Fuente](http://www.codexexempla.org/curso/curso_4_3_b.php#pN)
+ `document-querrySelectorAll`: Devuelve una lista de elementos que coincidad con los parametros introducidos, en este caso devolvera la lista de nodos que tengan como clase `.skills__header`.
  [Fuente](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)

---

```javascript
const modalViews = document.querySelectorAll('.services__modal'),

      modalBtns = document.querySelectorAll('.services__button'),

      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){

    modalViews[modalClick].classList.add('active-modal')
}
```

+ `classList:` La propiedad de sólo lectura `Element.classList` devuelve una colección activa de [`DOMTokenList` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList "Currently only available in English (US)") de los atributos de clase del elemento.
> Usar `classList` es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de [`element.className`](https://developer.mozilla.org/es/docs/Web/API/Element/className).

En el caso de este pequeño bloque de código, al momeno de activar el boton, se añadiran la clase `active-modal` para que se muestre _(En css se declaran los estilos para que se muestre en pantalla)_ cuando se cierre, se ejecutara el close para que quite la clase `aactive-modal`.

---

<p align="right"> Thanks for watching! <img align="right" alt="xd" width="35" height="35" src="https://i.gifer.com/origin/08/089af74235a38edcc7b433321f0a5472_w200.webp" /></p>