//Modules
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

//Components
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { USRComponent } from "./components/usr/usr.component";
import { DreamworksComponent } from "./components/dreamworks/dreamworks.component";
import { ProjectComponent } from "./components/project/project.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

//Widgets
import { SidebarLeft } from "./widgets/sidebar-left/sidebar-left.widget";
import { AppHeader } from "./widgets/app-header/app-header.widget";
import { PageHeader } from "./widgets/page-header/page-header.widget";

//Directives
import { BasicHighlightDirective } from "./directives/basic-highlight/basic-highlight.directive";

//Services
import { HeaderService } from "./services/header.service";

let modules = [
	HttpModule, 
	CommonModule,  
	BrowserModule
];

let components = [
	AppComponent, 
	HomeComponent, 
	AboutComponent, 
	USRComponent, 
	DreamworksComponent, 
	ProjectComponent, 
	NotFoundComponent
];

let widgets = [ 
	SidebarLeft, 
	AppHeader, 
	PageHeader
];

let directives = [
	BasicHighlightDirective
];

let services = [
	HeaderService
];

const routeModule = [
	RouterModule.forRoot([ 
		{ path: "", component: HomeComponent }, 
		{ path: "home", redirectTo: "/", pathMatch: "full" }, 
		{ path: "about/:category", component: AboutComponent }, 
		{ path: "usr/:category", component: USRComponent }, 
		{ path: "dreamworks/:category", component: DreamworksComponent }, 
		{ path: "project/:category", component: ProjectComponent }, 
		{ path: "**", component: NotFoundComponent }
	])
];

@NgModule({
  declarations: [
	...components, 
	...widgets, 
    ...directives
  ],
  imports: [
    ...modules, 
	...routeModule
  ],
  providers: [
	...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
