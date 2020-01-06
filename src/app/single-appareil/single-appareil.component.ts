import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/service/appareil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  appareil: any;

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.appareil = this.appareilService.getAppareilById(+id);
    if (this.appareil === undefined) {
      this.router.navigate(['appareils']);
    }
  }

}
