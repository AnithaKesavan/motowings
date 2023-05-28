import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { settings } from 'src/app/settings';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  ProductSliderConfig: any = {
    loop: false,
    dots: false,
    navSpeed: 300,
    autoHeight: true,
    responsive: {
      991: {
        items: 4
      },
      767: {
        items: 3
      },
      420: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  }

  products = [];

  filterName = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(route.snapshot.params.id)
    this.filterName = route.snapshot.params.id;
    if (this.filterName == 'refillter') {
      this.products = [
        {
          title: 'Filter Refiller Washer',
          images: [
            { src: 'assets/images/bike/filterrefillerwasher/1.jpg' },
            { src: 'assets/images/bike/filterrefillerwasher/2.jpg' },
            { src: 'assets/images/bike/filterrefillerwasher/3.jpg' }
          ],
          description: ""
        }, {}, {}
      ]
    } else if (this.filterName == 'meteor') {
      this.products = [
        {
          title: 'Chrome',
          subhead: "Magnetor - (J Platform)",
          subtitle: 'Performance increase upto 1.20Bhp on wheels',
          price: "8250",
          images: [
            { src: 'assets/images/bike/Meteor/chrome/3.jpg' },
            { src: 'assets/images/bike/Meteor/chrome/1.jpg' },
            { src: 'assets/images/bike/Meteor/chrome/2.jpg' },
            { src: 'assets/images/bike/Meteor/chrome/4.jpg' }
          ],
          description: "X Pulse 200 EFi stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS6 Models (J Platform)"
        }, {
          title: 'Mattblack',
          subhead: "Magnetor - (J Platform)",
          subtitle: 'Performance increase upto 1.20Bhp on wheels',
          price: "8750",
          images: [
            { src: 'assets/images/bike/Meteor/mattblack/3.jpg' },
            { src: 'assets/images/bike/Meteor/mattblack/1.jpg' },
            { src: 'assets/images/bike/Meteor/mattblack/2.jpg' },
            { src: 'assets/images/bike/Meteor/mattblack/4.jpg' }
          ],
          description: "X Pulse 200 EFi stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS6 Models (J Platform)"
        }
      ]
    } else if (this.filterName == 'type1classic') {
      this.products = [
        {
          title: 'Chrome',
          subhead: "Short Barrel Steel Matt",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "6750",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 classic/Chrome/3.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Chrome/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Chrome/2.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        },
        {
          title: 'Chrome Matte',
          subhead: "Short Barrel Steel Polished",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "6750",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 classic/Chromematte/2.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Chromematte/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Chromematte/3.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }, {
          title: 'Matteblack',
          subhead: "Short Barrel Black Textured",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "7500",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 classic/Matteblack/2.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Matteblack/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 classic/Matteblack/3.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }
      ]
    } else if (this.filterName == 'type1thunder') {
      this.products = [
        {
          title: 'Chrome',
          subhead: "Short Barrel Steel Matt",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "6750",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome/2.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome/3.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        },
        {
          title: 'Chrome Matte',
          subhead: "Short Barrel Steel Polished",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "6750",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome matte/2.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome matte/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Chrome matte/3.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }, {
          title: 'Matteblack',
          subhead: "Short Barrel Black Textured",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "7500",
          images: [
            { src: 'assets/images/bike/Type 1/type 1 thunder/Matte  black/2.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Matte  black/1.jpg' },
            { src: 'assets/images/bike/Type 1/type 1 thunder/Matte  black/3.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance type 1 exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }
      ]
    } else if (this.filterName == 'type2classic') {
      this.products = [
        {
          title: 'Chrome',
          subhead: "Cone Barrel Steel Matt",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "7300",
          images: [
            { src: 'assets/images/bike/Type 2/type 2 classic/Chrome/3.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Chrome/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Chrome/2.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance Type-II exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        },
        {
          title: 'Chrome Matte',
          subhead: "Cone Barrel Steel Polished",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "7300",
          images: [
            { src: 'assets/images/bike/Type 2/type 2 classic/Chromematte/3.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Chromematte/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Chromematte/2.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance Type-II exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }, {
          title: 'Matteblack',
          subhead: "Cone Barrel Steel Polished",
          subtitle: 'Performance increase upto 1.33Bhp on wheels',
          price: "7999",
          images: [
            { src: 'assets/images/bike/Type 2/type 2 classic/Matteblack/3.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Matteblack/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 classic/Matteblack/2.jpg' },
          ],
          description: "RE 500 exhaust (VS) moto wings performance Type-II exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        }
      ]
    } else if (this.filterName == 'type2thunder') {
      this.products = [
        {
          title: 'Chrome',
          images: [
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chrome/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chrome/2.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chrome/3.jpg' },
          ]
        },
        {
          title: 'Chrome Matte',
          images: [
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chromematte/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chromematte/2.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Chromematte/3.jpg' }
          ]
        }, {
          title: 'Matteblack',
          images: [
            { src: 'assets/images/bike/Type 2/type 2 thunder/Matteblack/1.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Matteblack/2.jpg' },
            { src: 'assets/images/bike/Type 2/type 2 thunder/Matteblack/3.jpg' },
          ]
        }
      ]
    } else if (this.filterName == 'exhaust') {
      this.products = [
        {
          title: 'X Pulse',
          subtitle: "Performanace increase upto 2.5 Bhp on wheels",
          images: [
            { src: 'assets/images/bike/Xpulse/1.jpg' },
            { src: 'assets/images/bike/Xpulse/2.jpg' },
            { src: 'assets/images/bike/Xpulse/3.jpg' }
          ],
          price: "10999",
          description: "X Pulse 200 EFi stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4/BS6/BS6 4 valve model X Pulse 200"
        },
        {
          title: 'Himalayan',
          subhead: "",
          subtitle: '',
          price: "",
          images: [
            { src: 'assets/images/bike/himalayan/exhaust.jpg' },
            { src: 'assets/images/bike/himalayan/clamp.jpg' },
            { src: 'assets/images/bike/himalayan/himalayan.jpg' },
          ],
          description: "This stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4&BS6 Models"
        },
        {
          title: 'Hunter',
          subhead: "",
          subtitle: '',
          price: "",
          images: [
            { src: 'assets/images/bike/hunter/exhaust.jpg' },
            { src: 'assets/images/bike/hunter/clamp.jpg' },
            { src: 'assets/images/bike/hunter/hunter.jpg' },
          ],
          description: "This stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4&BS6 Models"
        },
        {
          title: 'raptor',
          subhead: "",
          subtitle: '',
          price: "",
          images: [
            { src: 'assets/images/bike/raptor/2.jpg' },
            { src: 'assets/images/bike/raptor/1.jpg' },
            { src: 'assets/images/bike/raptor/3.jpg' },
          ],
          description: "This stock exhaust (VS) moto wings preformanace trasher exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4&BS6 Models"
        },
        {
          title: 'trident',
          subhead: "trident - 650 twins",
          subtitle: 'Performance increase upto 1.9Bhp on wheels',
          price: "17999",
          images: [
            { src: 'assets/images/bike/trident/2.jpg' },
            { src: 'assets/images/bike/trident/1.jpg' },
            { src: 'assets/images/bike/trident/3.jpg' },
          ],
          description: "RE Interceptor 650 exhaust (VS) moto wings performance trident exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions",
            "Swril flow technology"
          ],
          material: "Stainless steel 316",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4&BS6 Models"
        }

      ]
    } else {
      this.products = [
        {
          title: 'Classic 350 Filter',
          subhead: "MWP - 005 METE 350",
          subtitle: 'Performance increase upto 1.9Bhp on wheels',
          price: "3500",
          images: [
            { src: 'assets/images/bike/classic350filter/2.jpg' },
            { src: 'assets/images/bike/classic350filter/1.jpg' },
            { src: 'assets/images/bike/classic350filter/3.jpg' }
          ],
          description: "This air flow is tested on X-PULSE 200 Efi stock air filter VS MW performance hyper flow air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS6 Models"
        },
        {
          title: 'Classic Reborn Filter',
          subhead: "MWP - 002 CLS 350",
          subtitle: 'Performance increase upto 1.9Bhp on wheels',
          price: "3000",
          images: [
            { src: 'assets/images/bike/classicrebornfilter/2.jpg' },
            { src: 'assets/images/bike/classicrebornfilter/1.jpg' },
            { src: 'assets/images/bike/classicrebornfilter/3.jpg' },
          ],
          description: "This air flow is tested on X-PULSE 200 Efi stock air filter VS MW performance hyper flow air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        },
        {
          title: 'Himalayan Filter',
          subhead: "Throb - Himalayan 450",
          subtitle: 'Performance increase upto 1.9Bhp on wheels',
          price: "8500",
          images: [
            { src: 'assets/images/bike/himalayanfilter/2.jpg' },
            { src: 'assets/images/bike/himalayanfilter/1.jpg' },
            { src: 'assets/images/bike/himalayanfilter/3.jpg' },
          ],
          description: "RE Himalayan 410 exhaust (VS) moto wings performance throb exhaust with stock air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 316",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS3/BS4/BS6 Models"
        },
        {
          title: 'Honda Filter',
          subhead: "",
          subtitle: '',
          price: "",
          images: [
            { src: 'assets/images/bike/hondaFilter/2.jpg' },
            { src: 'assets/images/bike/hondaFilter/1.jpg' },
            { src: 'assets/images/bike/hondaFilter/3.jpg' },
          ],
          description: "This air flow is tested on X-PULSE 200 Efi stock air filter VS MW performance hyper flow air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4/BS6 Models"
        },
        {
          title: 'interceptorfilter',
          subhead: "MWP - 001 INT 650",
          subtitle: 'Performance increase upto 1.9Bhp on wheels',
          price: "3500",
          images: [
            { src: 'assets/images/bike/interceptorfilter/4.jpg' },
            { src: 'assets/images/bike/interceptorfilter/1.jpg' },
            { src: 'assets/images/bike/interceptorfilter/2.jpg' },
            { src: 'assets/images/bike/interceptorfilter/3.jpg' },
          ],
          description: "This air flow is tested on X-PULSE 200 Efi stock air filter VS MW performance hyper flow air filter",
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
          suit: "BS4/BS6 Models"
        },
        {
          title: 'XpulseFilter',
          price: "4500",
          images: [
            { src: 'assets/images/bike/XpulseFilter/3.jpg' },
            { src: 'assets/images/bike/XpulseFilter/1.jpg' },
            { src: 'assets/images/bike/XpulseFilter/2.jpg' },
          ],
          features: [
            "100% Handmade product with high quality",
            "Pass by noise 80db max",
            "Better low end and midrange torque",
            "Tuned tip for Rich, Sportier , Trebel exhaust note",
            "No milage dropout",
            "Engineered to perform on all conditions"
          ],
          material: "Stainless steel 304",
          description: "This air flow is tested on X-PULSE 200 Efi stock air filter VS MW performance hyper flow air filter",
          suit: "Suitable for BS4/BS6 & EURO6 Models",
          warranty: "Lifetime replacement warranty against rusting, manufacturing defacts, core & sound",
        }

      ]
    }

  }


  change(product) {
    settings.product = product;
    this.router.navigateByUrl("/shop/product/left/sidebar/mw");
  }
}
