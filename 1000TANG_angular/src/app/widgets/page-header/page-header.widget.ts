import { Component, Input } from "@angular/core";

//Services
import { HeaderService } from "../../services/header.service"; 

@Component({ 
	selector: "page-header", 
	templateUrl: "./page-header.widget.html", 
	styleUrls: ["./page-header.widget.css"]
})

export class PageHeader {
	
	private get _title(): string { return this.headerService.Title; }
	
	constructor(private headerService: HeaderService) {
	}
}