import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FileComponent } from './file/file.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';

const routes: Routes = [
{path: 'file', component: FileComponent},
{path: 'edit', component: ContentComponent},
{path: 'view', component: CardSkeletonComponent},
{path: 'go', component: ContentComponent},
{path: 'tools', component: ContentComponent},
{path: 'help', component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
