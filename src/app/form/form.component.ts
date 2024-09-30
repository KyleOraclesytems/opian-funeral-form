import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']  // Corrected this line
})
export class FormComponent implements OnInit {
  personalInfoForm: FormGroup;
  currentStep: number = 1;
  totalSteps: number = 8;
  
  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      title: ['Mr', Validators.required],
      accountNumber: [{ value: this.generateAccountNumber(), disabled: true }, Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      idNumber: ['', Validators.required],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      gender: ['Male', Validators.required],
      contactNumber: ['', Validators.required],
      whatsappNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  // Function to generate account number (replace with actual database logic)
  generateAccountNumber(): string {
    // Simulate fetching a unique account number from the database
    return 'OFR' + Math.floor(100000 + Math.random() * 900000);
  }

  // Function to calculate age based on date of birth
  calculateAge() {
    const dob = new Date(this.personalInfoForm.get('dob')?.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    // Adjust age if the birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    this.personalInfoForm.get('age')?.setValue(age);
  }

  // Function to toggle WhatsApp number field if same as contact number
  toggleWhatsApp() {
    const contactNumber = this.personalInfoForm.get('contactNumber')?.value;
    const isChecked = (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked;
    
    if (isChecked) {
      this.personalInfoForm.get('whatsappNumber')?.setValue(contactNumber);
    } else {
      this.personalInfoForm.get('whatsappNumber')?.setValue('');
    }
  }

  // Method to move to the next step
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  // Method to move to the previous step
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
