import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuttingService } from '../../services/cutting.service';

@Component({
  selector: 'app-urlcutting',
  templateUrl: './urlcutting.component.html',
  styleUrls: ['./urlcutting.component.css']
})
export class UrlcuttingComponent implements OnInit {

  urlForm!: FormGroup;
  urlCutting: any;
  validatorString: string = "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";

  constructor(private urlServices: CuttingService) { }

  ngOnInit(): void {
    this.urlForm = new FormGroup({
      "url": new FormControl('', [Validators.required, Validators.pattern(this.validatorString)])
    })
  }

  onCut(data: any) {
    if (data.invalid) {
      return;
    }
    let urlForm = data.form.controls.url.value;
    this.urlServices.cuttingUrl(urlForm).subscribe((d) => {
      let urlResponse = JSON.parse(JSON.stringify(d))
      this.urlCutting = urlResponse.shortLink;
    }, err => {
      console.log(err)
    })

  }

}


