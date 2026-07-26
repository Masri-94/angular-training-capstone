import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Countries} from '../../services/countries';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  
  ReactiveFormsModule,

  MatTableModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
 ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
displayedColumns: string[] = [
'name',
'region',
'capital',
'population'
];

dataSource = new MatTableDataSource<any>();

countries: any[] = [];

filteredCountries: any[] = [];

countryControl = new FormControl('');


  constructor(
    private countriesService: Countries, 
     private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countriesService.getCountries().subscribe({next: (data) => {
      this.countries = data;
       this.dataSource.data = data;
       this.filteredCountries = data;

this.countryControl.valueChanges.subscribe(value => {
  
let text=(value || '').toLowerCase();


this.filteredCountries =
this.countries.filter(country=>
country.name.toLowerCase()
.includes(text)
);



this.dataSource.data=
this.filteredCountries;



});


},


error:()=>{

this.snackBar.open(
'Failed to load countries',
'Close',
{
duration:3000
}
);


}


});


}



}