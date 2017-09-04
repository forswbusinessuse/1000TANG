import { Component, OnInit, OnDestroy } from "@angular/core";

//Http
import { ActivatedRoute } from "@angular/router";

//Consts
import { CATEGORY_CODE as $ } from "../../consts/category-codes"; 

@Component({ 
	selector: "project", 
	templateUrl: "./project.component.html", 
	styleUrls: ["./project.component.css"]
})

export class ProjectComponent {
	
	private _routeSubscription;
	private _category: string = "";
	private _categoryCode: string = "";
	
	private get _origin(): boolean { return this._categoryCode == $.PROJECT.ORIGIN; }
	private get _purpose(): boolean { return this._categoryCode == $.PROJECT.PURPOSE; }
	private get _content(): boolean { return this._categoryCode == $.PROJECT.CONTENT; }
	private get _academic_resources(): boolean { return this._categoryCode == $.PROJECT.ACADEMIC_RESOURCES; }
	
	constructor(private route: ActivatedRoute) {
	}
	
	ngOnInit(): void {
		this._routeSubscription = this.route.params.subscribe(params => {
			this._category = this.categoryToCHT(params["category"]);
		});
	}
	
	private categoryToCHT(category: string): string {
		this._categoryCode = category;
		switch(category) {
			case $.PROJECT.ORIGIN: 
				return "計畫緣起";
			case $.PROJECT.PURPOSE: 
				return "計畫宗旨";
			case $.PROJECT.CONTENT: 
				return "計畫內容";
			case $.PROJECT.ACADEMIC_RESOURCES: 
				return "學術資源";
			default: 
				return "地景文化與永續觀光政策";
		}
	}
	
	ngOnDestroy(): void {
		this._routeSubscription.unsubscribe();
	}
}