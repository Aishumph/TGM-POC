import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FileComponent } from './file/file.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {path:'',component:SignupFormComponent},
{path: 'file', component: FileComponent},
{path: 'edit', component: ContentComponent},
{path: 'view', component: ContentComponent},
{path: 'go', component: ContentComponent},
{path: 'tools', component: ContentComponent},
{path: 'help', component: ContentComponent},
{path:'poc',component:ContextMenuComponent},
{path:'forms',component:AngularFormsComponent},
{path:'signup',component:SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
