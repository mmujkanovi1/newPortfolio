import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { BackToTopComponent } from './ui-components/back-to-top/back-to-top';
import { ChatBotComponent } from './ui-components/chat-bot/chat-bot';
import { SkillsComponent } from './components/skills/skills';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    ChatBotComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
