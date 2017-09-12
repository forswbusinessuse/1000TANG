import { Component, OnInit, OnDestroy } from "@angular/core";

//Http
import { ActivatedRoute } from "@angular/router";

//Consts
import { CATEGORY_CODE as $ } from "../../consts/category-codes"; 

//Services
import { HeaderService } from "../../services/header.service";

@Component({ 
	selector: "dreamworks", 
	templateUrl: "./dreamworks.component.html", 
	styleUrls: ["./dreamworks.component.css"]
})

export class DreamworksComponent implements OnInit, OnDestroy {
	
	private _routeSubscription;
	private _category: string = "";
	private _categoryCode: string = "";
	
	private get _home(): boolean { return this._categoryCode == $.DREAMWORK.HOME; }
	private get _takeOff(): boolean { return this._categoryCode == $.DREAMWORK.TAKE_OFF; }
	private get _interpretation(): boolean { return this._categoryCode == $.DREAMWORK.INTERPRETATION; }
	private get _journey(): boolean { return this._categoryCode == $.DREAMWORK.JOURNEY; }
	private get _buildAndPursue(): boolean { return this._categoryCode == $.DREAMWORK.BUILD_AND_PURSUE; }
	
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
		this._categoryCode = category;
		switch(category) {
			case $.DREAMWORK.HOME: 
				return "工廠的家";
			case $.DREAMWORK.TAKE_OFF: 
				return "夢想起飛";
			case $.DREAMWORK.INTERPRETATION: 
				return "解夢分享";
			case $.DREAMWORK.JOURNEY: 
				return "踏夢之旅";
			case $.DREAMWORK.BUILD_AND_PURSUE: 
				return "築夢逐夢";
			default: 
				return "頑皮塘101數位文創智造夢工廠";
		}
	}
	
	ngOnDestroy(): void {
		this._routeSubscription.unsubscribe();
	}
}