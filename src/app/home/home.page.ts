import { Component } from '@angular/core';
import { ConfigService} from '../config.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	gallery = {};
	searchInput: any = "";
	loading: boolean = false;
	res:any = "";
  constructor(private config:ConfigService) { }

  // searchbar = document.querySelector('ion-searchbar');
ngOnInit() {
  	this.gallery = this.getGallery();
  }
getGallery(){
	return this.config.getConfig().gallery;
}

onInput() {
        this.loading = true;
        console.log(this.searchInput);
        if (this.searchInput == "#sandals") {
        	console.log('display both heels and flatshoes');
        	return this.config.getConfig().gallery.sandals;
        }else if(this.searchInput == "#shoes" || this.searchInput == "#flatshoes" || this.searchInput == "#sportshoes"){
           console.log('display' +this.searchInput);
           return this.config.getConfig().gallery;
        }else{
        	this.loading = false;
        }
    }

}
