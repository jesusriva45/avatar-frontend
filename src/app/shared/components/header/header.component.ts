import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('carouselInner') carouselInner!: ElementRef<HTMLParagraphElement>
  @ViewChild('carouselIndicators') carouselIndicators!: ElementRef

  slides = [
    { 'image': 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg' },
    { 'image': 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg' },
    { 'image': 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg' }

  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }




  ngAfterViewInit() {
    
  

  }


  crearCarrusel() {

    const carrusel = this.carouselInner.nativeElement

    console.log(carrusel)

    this.slides.forEach((value, index: number) => {
      this.renderer.appendChild(carrusel, '<div class="carousel-item active">' +
        `<img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 100}.svg" class="d-block w-25" alt="">` +
        '</div>');
    })

  }




}
