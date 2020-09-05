import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() phone: string;
  @Input() email: string;

  @Input() copyright: string; 

  fbIcon = 'https://lh3.googleusercontent.com/p0M1woGGsQ17KPYeG6tFXXSRHwL4ZocnzeNj3LkPi5UZF8egG8pr1_HDdTQcWrRwoler5MK7aVJswTuJWK2B4Fo2tWsaTBQrUNdThMGTkJ5vKmfisk_OEOoQhBkUR_-reFtaZQvR9w=s256-p-k';
  fbAlt = 'facebook';
  fbHref = 'https://www.facebook.com/WaveTheGRAIN/';

  igIcon = 'https://lh3.googleusercontent.com/mIhLMzBK3YRVGAB-qhrlzzyLzR1ZxwLjwsAQYyXpDo0_-LHdMtDNk-s5k9jq4ylE5HXmzQhwdXtkWazXQWHa5z_aLp3-0B1pLzwReC1a5nFwW9AcrrCiA2ioGRLs0HNsvccBL-SAZg=s256-p-k';
  igAlt = 'instagram';
  igHref = 'https://www.instagram.com/wavethegrain/';

  

  constructor() { }

  ngOnInit(): void {
  }

}
