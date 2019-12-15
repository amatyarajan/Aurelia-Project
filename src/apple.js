import {HttpClient, json} from 'aurelia-fetch-client';

export class Apple {
  
  activate(params, routeConfig, navigationInstruction) {
    let httpClient= new HttpClient();
    httpClient.fetch("https:/api.ipify.org/?format=json", {methond: 'get'})
    .then(response=>response.json())
    .then(data=>this.message= JSON.stringify(data))
  }

  changeMessage(){
    this.message="goodbye";
  }
 
}
