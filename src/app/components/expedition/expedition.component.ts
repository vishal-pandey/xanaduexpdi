import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.css']
})
export class ExpeditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expeditions = [
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	},
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	},
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	},
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	},
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	},
  	{
  		"name" : "Expedition 1",
  		"duration" : "1 Week",
  		"price" : "5000 Rs",
  		"details" : "Here would be the details of the Expeditions"
  	}
  ]

}
