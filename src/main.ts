import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';

import {
  LucideAngularModule,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Phone,
  ChevronDown
} from 'lucide-angular';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,  // Sin alias, directamente el nombre del import
        X,
        Github,
        Linkedin,
        Mail,
        Twitter,
        Instagram,
        Phone,
        ChevronDown
      })
    )
  ]
});
