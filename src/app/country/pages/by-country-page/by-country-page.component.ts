import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  private countryService = inject ( CountriesService );

  public countries:Country[] = []; //


  searchByCountry( term: string):void {

    this.countryService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log( countries );
      });
  }


}
