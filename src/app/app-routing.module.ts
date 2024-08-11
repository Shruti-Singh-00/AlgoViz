import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingComponent } from './landing/landing.component';
import { VizualizerComponent } from './vizualizer/vizualizer.component';

const routes: Routes = [
  {path:'', redirectTo:'landing',pathMatch:"full"},
  {path:"landing", component:LandingComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:"vizualizer", component:VizualizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
