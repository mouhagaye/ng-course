import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'TestServer';
  serverCreated = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created successfully And his Name is ' + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
