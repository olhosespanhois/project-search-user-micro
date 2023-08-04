import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: 
    [
        //HeaderComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
        HeaderComponent,
        // FooterComponent,
        RouterModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class CoreModule { }