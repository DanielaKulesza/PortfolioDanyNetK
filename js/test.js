/**
 * 
 * @property {HTMLElement} element 
 */

class Lightbox{
  static init(){
    const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg], a[href$=".jpeg]')
    .forEach(link => link.addEventListner('click', e => {
      e.preventDefault()
      new Lightbox(e.currentTarget.getAttribute('href'))
    }))
  }



/**
 * 
 * @param {string} url 
 */
 
constructor (url){
  this.element = this.buildDOM(url)
  this.loadImage(url)
  document.body.appendChild(this.element)
 }


 /**
 * 
 * @param {string} url 
 */
 loadImage (url){
   const image = new Image()
   cont container = this.element.querySelector('.lightbox__container')
   const loader = document.createElement('div')
   loader.classList.add('lightbox__loader')
   container.appendChild(loader)
   image.onload = function(){
     container.removeChild(loader)

   }
   image.src = url
 }

 /**
 * @param {string} url
 * @param {HTMLElement} 
 */

/**
 * 
 * @param {string} url 
 */

buildDOM =document.createElement('div')
  dom.classList.add('lightbox')
  dom.innerHTML = '<button class="lightbox__close"></button><button class="lightbox__next"></button><button class="lightbox__prev"></button><div class="lightbox__container"><div class="lightbox__loader"></div></div>'
  return dom


}