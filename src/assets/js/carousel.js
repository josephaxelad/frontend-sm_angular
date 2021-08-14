//Création de la classe Carousel
class Carousel {

  /**
   * @param {HTMLElement} element
   * @param {Objet} options
   * @param {Objet} options.slidesToScroll Nombre d'éléments à faire défiler
   * @param {Objet} options.slidesVisible Nombre d'éléments visible dans un slide
   */
  constructor(element, options = {}){
    this.element = element;
    this.options = Object.assign({}, {
      slidesToScroll : 1,
      slidesVisible: 1
    }, options)

    this.isMobile = true
    this.currentItem = 0

    let children_ = [].slice.call(element.children)
    let children = children_.filter((child) => child.tagName != "A")



    this.root = this.createDivWithClass('carousel')
    this.container = this.createDivWithClass('carousel--container')
    this.root.appendChild(this.container)
    this.element.appendChild(this.root)


    this.items = children.map(child => {
      let item = this.createDivWithClass('carousel--item')
      item.appendChild(child)
      this.container.appendChild(item)
      return item
    });

    this.setStyle()
    this.createNavigation()

    this.onWindowResize()
    window.addEventListener('resize',this.onWindowResize.bind(this))
  }

  onWindowResize(){
    let mobile = window.innerWidth < 600
    if (mobile !== this.isMobile) {
      this.isMobile = mobile
      this.setStyle()
    }
  }

  /**
   * Fonction pour créer un div avec une classe
   * @param {String} className
   * @returns(HTMLElement)
   */
  createDivWithClass(className){
    let div = document.createElement('div')
    div.setAttribute('class',className)
    return div
  }

  /**
   * Applique les bonnes dimensions aux éléments du caroussel
   */
  setStyle(){
    this.ratio = this.items.length  / this.slidesVisible
    this.container.style.width = (this.ratio * 100) + "%"
    this.items.forEach(item  => item.style.width = ((100 / this.slidesVisible ) / this.ratio) + "%" );
  }

  createNavigation(){
    // let nextButton = this.createDivWithClass('carousel--next')
    // let prevButton = this.createDivWithClass('carousel--prev')

    let prevButton = this.element.querySelector('.btn-prev')
    let nextButton = this.element.querySelector('.btn-next')


    // this.root.appendChild(nextButton)
    // this.root.appendChild(prevButton)

    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))
  }

  next(){
    if (this.currentItem + this.slidesToScroll + this.slidesVisible <= this.items.length) {
      this.gotToItem(this.currentItem + this.slidesToScroll)
    }

  }

  prev(){
    if (this.currentItem - this.slidesToScroll >= 0) {
      this.gotToItem(this.currentItem - this.slidesToScroll)
    }

  }

  /**
   * Déplace le carousel vers l'élément ciblé
   * @param {Number} index
   */
  gotToItem(index){
    // console.log(index)
    // if (index < 0){
    //   index = this.items.length - this.options.slidesVisible
    // }
    // if(index + this.options.slidesVisible > this.items.length){
    //   index = 0
    //   console.log('ok')
    // }
    let translateX = index * -100 / this.items.length
    this.container.style.transform = 'translate3d(' +translateX+ '%,0,0)'
    this.currentItem = index;
  }

  get slidesToScroll(){
    return this.isMobile ? 1 : this.options.slidesToScroll
  }

  get slidesVisible(){
    return this.isMobile ? 1 : this.options.slidesVisible
  }
}


//attendre le chargement de la page (chargement du DOM)
document.addEventListener('DOMContentLoaded', function () {
  new Carousel(document.querySelector('#carousel-featured-product'), {
    slidesToScroll: 1,
    slidesVisible: 3,
  })
})

