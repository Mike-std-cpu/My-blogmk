# Explicación de funciones.

### Skills section.

```js
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
