import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  param : any;
  queryParam : any;

  constructor(
    private activatedRoute : ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
      console.log(this.activatedRoute)
      this.param = this.activatedRoute.snapshot.params['username'];
      this.queryParam = this.activatedRoute.snapshot.queryParams['Courses'];
  }

}
