import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app sass
require("./styles.css");

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);
