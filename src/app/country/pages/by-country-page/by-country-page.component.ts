import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  
  private countryService = inject ( CountriesService );

  public countries:Country[] = []; //
  public isLoading:boolean = false;
  public busqueda:string = 'pais';
  public initialValue:string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }


  searchByCountry( term: string):void {

    this.isLoading = true;

    this.countryService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log( countries );
        this.isLoading = false
      });
  }


}
