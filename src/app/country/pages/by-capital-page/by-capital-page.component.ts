import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{
  
  private countriesService = inject( CountriesService )
  
  public countries:Country[] = [];
  public busqueda:string = 'capital';
  public isLoading:boolean = false;
  public initialValue: string = '';
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ): void {

    this.isLoading = true;
    
    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;
      console.log( countries );
      this.isLoading = false;
      })

  }

}
