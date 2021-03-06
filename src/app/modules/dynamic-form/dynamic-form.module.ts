import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuestionFormComponent } from './components/question-form-component/question-form-component.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control.service';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [QuestionFormComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    
    ItemModule,
  ],
  exports: [QuestionFormComponent, DynamicFormComponent],
  providers: [QuestionControlService]
})
export class DynamicFormModule { }
