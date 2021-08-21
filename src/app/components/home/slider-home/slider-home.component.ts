import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss']
})


export class SliderHomeComponent implements OnInit {

  // Variables globales
  diapo : any;
  compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
  timer: any;
  elements: any;
  slides: any;
  slideWidth: any;

  indicators! : any ;
  indicatorsItems :  any;

  // Mise en oeuvre du "responsive"
  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.slideWidth = this.diapo.getBoundingClientRect().width
    this.slideNext();
  }

  constructor() { }

  ngOnInit(): void {


    // On récupère le conteneur principal du diaporama
    this.diapo = document.querySelector("#carousel-home")

    // On récupère le conteneur de tous les éléments
    this.elements = document.querySelector("#carousel-home-items")

    // On récupère un tableau contenant la liste des diapos
    if (this.elements) {
      this.slides = Array.from(this.elements.children)
    }

    // On calcule la largeur visible du diaporama
    if (this.diapo) {
      this.slideWidth = this.diapo.getBoundingClientRect().width
    }

    // Automatiser le diaporama
    this.timer = setInterval(()=>{this.slideNext()},4000)

    // Gérer le survol de la souris
    // this.diapo.addEventListener("mouseover", this.stopTimer())
    // this.diapo.addEventListener("mouseout", this.startTimer())

    // On récupère le conteneur de tous les indicateurs

    this.indicators = document.querySelector("#carousel-home-indicators")
    this.slides.forEach(()=> {
      let div = document.createElement('div')
      div.setAttribute('class','carousel-home-indicators--item')
      this.indicators.appendChild(div)
    });

    this.indicatorsItems = Array.from(this.indicators.children)

    //mise à jour du style de l'indicateur actif
    this.styleIndicators(0)

  }

  /**
   * Cette fonction fait défiler le diaporama vers la droite
   */
  slideNext(){
    // On incrémente le compteur
    this.compteur++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if (this.slides) {
      if(this.compteur == this.slides.length){
        this.compteur = 0
      }
    }

    //mise à jour du style de l'indicateur actif
    this.styleIndicators(this.compteur)

    //Se déplacer vers ce item
    this.goToItem(this.compteur)


  }


  /**
  * Cette fonction fait défiler le diaporama vers la gauche
  */
  slidePrev(){
    // On décrémente le compteur
    this.compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(this.compteur < 0){
        this.compteur = this.slides.length - 1
    }

    //mise à jour du style de l'indicateur actif
    this.styleIndicators(this.compteur)

    //Se déplacer vers ce item
    this.goToItem(this.compteur)

  }

  /**
   * Cette fonction applique le style de l'indicateur actif
   * @param index
   */
   styleIndicators(compteur : number){
    let index = 0;
    for (const indicator of this.indicatorsItems) {
      if (compteur != index) {
        indicator.classList.remove('active')
      } else {
        indicator.classList.add('active')
      }
      index++
    }
  }

  /**
   *  Déplace le diaporama vers l'élément ciblé
   * @param index
   */
  goToItem(index : number){
    // On calcule la valeur du décalage
    let decal = -this.slideWidth * index
    this.elements.style.transform = `translateX(${decal}px)`
  }

  /**
   * On stoppe le défilement
   */
  stopTimer(){
    clearInterval(this.timer)
  }

  /**
  * On redémarre le défilement
  */
  startTimer(){
    this.timer =  setInterval(()=>{this.slideNext()},4000)
  }






}
