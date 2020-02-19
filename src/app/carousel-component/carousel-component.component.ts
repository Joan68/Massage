import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.scss']
})
export class CarouselComponentComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      title: 'Massage Ayurvédique Abhyanga',
      description: 'Massage à l’huile chaude pour harmoniser les trois doshas',
      // img: 'https://images.pexels.com/photos/275752/pexels-photo-275752.jpeg?cs=srgb&dl=massage-physio-physiotherapy-275752.jpg&fm=jpg'
    },
    // {
    //   title: 'Soin Etoile Tête Mains Pieds',
    //   description: 'Massage à l’huile chaude pour apaiser le mental et libèrer les tensions',
    // },
    {
      title: 'Udvartana',
      description: 'Massage détoxifiant à la farine de pois chiche',
      // img: 'https://images.pexels.com/photos/275752/pexels-photo-275752.jpeg?cs=srgb&dl=massage-physio-physiotherapy-275752.jpg&fm=jpg'
    },
    // {
    //   title: 'Ananda',
    //   description: 'Soin énergétique de la colonne vertébrale',
    // },
    // {
    //   title: 'Mardana',
    //   description: 'Massage tonique du dos, du torse, des bras et jambe à l’huile chaude',
    // },
    {
      title: 'Massage maternité',
      description: 'Massage à l’huile chaude adapté aux besoins de la maman pour vivre sereinement la grossesse',
      // img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Massage post-natal',
      description: 'Massage revitalisant à l’huile chaude',
      // img: 'https://images.pexels.com/photos/275752/pexels-photo-275752.jpeg?cs=srgb&dl=massage-physio-physiotherapy-275752.jpg&fm=jpg'
    },
    {
      title: 'Massage du nourrisson',
      description: 'Apprendre à masser son bébé sous forme d’atelier',
      // img: 'https://images.pexels.com/photos/275752/pexels-photo-275752.jpeg?cs=srgb&dl=massage-physio-physiotherapy-275752.jpg&fm=jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}