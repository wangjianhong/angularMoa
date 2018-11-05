import {Component, Input, OnInit} from '@angular/core';
import {AgencyModule} from '../../../services/agency.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-agencydetail',
  templateUrl: './agencydetail.component.html',
  styleUrls: ['./agencydetail.component.css']
})
export class AgencydetailComponent implements OnInit {
  public agencyItem: AgencyModule; // = new AgencyModule('11111', '21111', '111111title11111', '0', '5', '0', '');
  public title: string;
  public data: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.params.subscribe((params: Params) => this.data = params );

    /**
    this.route.params.subscribe(function(data) {
        this.agencyItem = data;
        this.title = data.title;
        console.log('AgencydetailComponent>>>接收列表页面传来的数据' + this.agencyItem);
        console.log(this.agencyItem)
      });
     */
  }

  clickbtn(): void {
    console.log('onclickbtn');
  }

}

