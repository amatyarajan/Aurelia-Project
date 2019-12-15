import {HttpClient, json} from 'aurelia-fetch-client';


export class mymodal{

  async activate(params, routeConfig, navigationInstruction) {
    let httpClient= new HttpClient();
    const key= 'cf00052d5dd64d94693c7b80b6e9d73d';
    let query= 'pizza';
    let result = await fetch(`https://www.food2fork.com/api/search?key=cf00052d5dd64d94693c7b80b6e9d73d&q=${query}`)

  
    //using async await method
    let values= await result.json();
    this.reci= values.recipes;
 //    console.log(values);
   // console.log(reci[0].publisher);

    }
}



