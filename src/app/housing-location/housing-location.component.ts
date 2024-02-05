import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img style="width:300px;height:300px;padding:10px;" class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 style="font-size:20px;" class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </section>
  `
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}

