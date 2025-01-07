import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region-type.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  private countriesService = inject( CountriesService );

  public countries: Country[] = [];
  public regions:Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selecttedRegion?: Region;
  public busqueda:string = 'region';
  public isLoading:boolean = false;
  public initialValue: Region = '';

  ngOnInit(): void { 
    this.selecttedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }
    

  searchByRegion ( region: Region ): void {

    this.selecttedRegion = region;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        console.log( countries );
        this.isLoading = false;
      })
  }

}
