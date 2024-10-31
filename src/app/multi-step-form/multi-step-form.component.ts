import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent {
  form: FormGroup;
  step = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      memberDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(18)]],
      }),
      spouseDetails: this.fb.group({
        spouseName: ['', Validators.required],
        spouseAge: ['', [Validators.required, Validators.min(18)]],
      }),
    });
  }

  get memberForm() {
    return this.form.get('memberDetails') as FormGroup;
  }

  get spouseForm() {
    return this.form.get('spouseDetails') as FormGroup;
  }

  nextStep() {
    if (this.step === 1 && this.memberForm.valid) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    }
  }
}
