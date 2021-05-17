"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_toastr_1 = require("ngx-toastr");
var app_component_1 = require("./components/app/app.component");
var home_component_1 = require("./components/home/home.component");
var pagination_component_1 = require("./components/shared/pagination.component");
var nav_menu_component_1 = require("./components/nav-menu/nav-menu.component");
var vehicle_form_component_1 = require("./components/vehicle-form/vehicle-form.component");
var vehicle_list_component_1 = require("./components/vehicle-list/vehicle-list.component");
var view_vehicle_component_1 = require("./components/view-vehicle/view-vehicle.component");
var core_2 = require("@angular/core");
var app_error_handler_1 = require("./app.error-handler");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                pagination_component_1.PaginationComponent,
                vehicle_form_component_1.VehicleFormComponent,
                vehicle_list_component_1.VehicleListComponent,
                view_vehicle_component_1.ViewVehicleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-bottom-right',
                    //preventDuplicates: true,
                }),
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
                    { path: 'vehicles/new', component: vehicle_form_component_1.VehicleFormComponent },
                    { path: 'vehicles/edit/:id', component: vehicle_form_component_1.VehicleFormComponent },
                    { path: 'vehicles/:id', component: view_vehicle_component_1.ViewVehicleComponent },
                    { path: 'vehicles', component: vehicle_list_component_1.VehicleListComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [
                { provide: core_2.ErrorHandler, useClass: app_error_handler_1.AppErrorHandler }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map