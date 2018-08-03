//It import the angular components
import { Component } from '@angular/core';
//Its kind of decorator
@Component({
//Selector should be unique should not be the same
selector:'app-server',
//This is the templete to use for this component
templateUrl:'./server.component.html'
})
//Export this class to another component
export class ServerComponent
{

}