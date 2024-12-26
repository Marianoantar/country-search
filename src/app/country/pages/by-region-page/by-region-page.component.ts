import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  private countriesService = inject( CountriesService );

  public countries: Country[] = [];

  searchByRegion ( term: string ): void {

    this.countriesService.searchRegion( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log( countries );
      })
  }

}
