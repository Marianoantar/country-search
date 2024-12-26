import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  private countriesService = inject( CountriesService )

  public countries:Country[] = [];


  searchByCapital( term: string ): void {

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log( countries );
      })

  }

}