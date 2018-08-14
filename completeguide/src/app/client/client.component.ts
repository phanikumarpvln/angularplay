import { Component, OnInit } from '@angular/core';
@Component
({
    selector:'app-client',
    templateUrl:'./client.component.html'
    //inline templete usage
   //template:'<app-server></app-server>'

})
export class ClientComponent implements OnInit{
    allowserver=false;
    serverCreationStatus='No Server Created!';
    serverName='';
    constructor()
    {
        setTimeout(() => {
            this.allowserver=true;
        }, 3000);
    }
    ngOnInit()    { }
    onCreateServer()
    {
        this.serverCreationStatus='Server was created';
    }
    onUpdateServerName(event: Event)
    {
        this.serverName=(<HTMLInputElement>event.target).value;
    }
}
{
}