import { Injectable } from "@angular/core";

@Injectable()
export class HeaderService {
	
	private _title: string = "";
	
	public get Title(): string { return this._title; }
	
	constructor() {
	}
	
	public SetTitle(title: string): void {
		this._title = title;
	}
}