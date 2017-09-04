import { Component, OnInit, OnDestroy } from "@angular/core";

//Http
import { ActivatedRoute } from "@angular/router";

//Consts
import { CATEGORY_CODE as $ } from "../../consts/category-codes"; 

@Component({ 
	selector: "usr", 
	templateUrl: "./usr.component.html", 
	styleUrls: ["./usr.component.css"]
})

export class USRComponent implements OnInit, OnDestroy {
	
	private _routeSubscription;
	private _category: string = "";
	private _categoryCode: string = "";
	
	private get _get_to_know(): boolean { return this._categoryCode == $.USR.GET_TO_KNOW; }
	private get _happiness(): boolean { return this._categoryCode == $.USR.HAPPINESS; }
	private get _organization(): boolean { return this._categoryCode == $.USR.ORGANIZATION; }
	private get _care(): boolean { return this._categoryCode == $.USR.CARE; }
	private get _experience(): boolean { return this._categoryCode == $.USR.EXPERIENCE; }
	
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
			case $.USR.GET_TO_KNOW: 
				return "認識家園";
			case $.USR.HAPPINESS: 
				return "幸福家園";
			case $.USR.ORGANIZATION: 
				return "家園組織";
			case $.USR.CARE: 
				return "長照關懷家園";
			case $.USR.EXPERIENCE: 
				return "人文體驗家園";
			default: 
				return "共創千塘好家園(USR)";
		}
	}
	
	ngOnDestroy(): void {
		this._routeSubscription.unsubscribe();
	}
}