import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Countries} from '../../services/countries';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private countriesService: Countries) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.countriesService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  populationInMillions(population: number): string {
    return (population / 1000000).toFixed(1);
  }

}