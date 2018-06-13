import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server-tag',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName: String = "" ;
  serverStatus: String = "Down";
  

  changedName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  turnServerOn(){
    this.serverStatus = "Up";
  }

  turnServerOff(){
    this.serverStatus = "Down"
  }
  
  
  
  constructor() { 
    
  }

  ngOnInit() {

  }
  

}
