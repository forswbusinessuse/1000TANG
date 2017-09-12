import { Component, OnInit, OnDestroy } from "@angular/core";

//Http
import { ActivatedRoute } from "@angular/router";

//Consts
import { CATEGORY_CODE as $ } from "../../consts/category-codes"; 

//Services
import { HeaderService } from "../../services/header.service";

@Component({ 
	selector: "about", 
	templateUrl: "./about.component.html", 
	styleUrls: ["./about.component.css"]
})

export class AboutComponent implements OnInit, OnDestroy {
	
	private _routeSubscription;
	private _category: string = "";
	private _categoryCode: string = "";
	
	private get _about_us(): boolean { return this._categoryCode == $.ABOUT.ABOUT_US; }
	private get _origin(): boolean { return this._categoryCode == $.ABOUT.ORIGIN; }
	private get _staff(): boolean { return this._categoryCode == $.ABOUT.STAFF; }
	private get _space(): boolean { return this._categoryCode == $.ABOUT.SPACE; }
	private get _latest_news(): boolean { return this._categoryCode == $.ABOUT.LATEST_NEWS; }
	private get _contact_us(): boolean { return this._categoryCode == $.ABOUT.CONTACT_US; }
	
	constructor(private route: ActivatedRoute, private headerService: HeaderService) {
	}
	
	ngOnInit(): void {
		this._routeSubscription = this.route.params.subscribe(params => {
			let code = params["category"];
			this._categoryCode = code;
			this.headerService.SetTitle(this.categoryToCHT(code));
		});
	}
	
	private categoryToCHT(category: string): string {
		switch(category) {
			case $.ABOUT.ABOUT_US: 
				return "關於我們";
			case $.ABOUT.ORIGIN: 
				return "創立緣起";
			case $.ABOUT.STAFF: 
				return "師資陣容";
			case $.ABOUT.SPACE: 
				return "文創千塘空間";
			case $.ABOUT.LATEST_NEWS: 
				return "最新消息(連結FB)";
			case $.ABOUT.CONTACT_US: 
				return "聯絡資訊";
			default: 
				return "簡介";
		}
	}
	
	ngOnDestroy(): void {
		this._routeSubscription.unsubscribe();
	}
}