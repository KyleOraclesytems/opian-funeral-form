import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personalInfoForm: FormGroup;
  currentStep: number = 1;
  totalSteps: number = 8;

  constructor(private fb: FormBuilder) {this.personalInfoForm = this.fb.group({
      // Member Details
      memberDetails: this.fb.group({
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
      whatsappNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      physicalAddress: ['', Validators.required],
      physicalSuburb: ['', Validators.required],
      physicalPostalCode: ['', Validators.required],
      postalAddress: ['', Validators.required],
      postalSuburb: ['', Validators.required],
      postalPostalCode: ['', Validators.required],
    }),
      // Spouse Details
      spouseDetails: this.fb.group({
        title: ['Mr', Validators.required],
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required], // This is "Maiden Name" in the form
        nationality: ['', Validators.required],
        idNumber: ['', Validators.required],
        dob: ['', Validators.required],
        age: [{ value: '', disabled: true }],
        gender: ['Male', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', Validators.required],
        whatsappNumber: [''],
      })
    });}

  ngOnInit(): void{
    

    // Subscribe to value changes for both member and spouse dob
    this.personalInfoForm.get('dob')?.valueChanges.subscribe(() => {
      this.calculateMemberAge();
    });
    
    this.personalInfoForm.get('spouseDetails.dob')?.valueChanges.subscribe(() => {
      this.calculateSpouseAge();
    });
  }
  get memberForm() {
    return this.personalInfoForm.get('memberDetails') as FormGroup;
  }

  get packageForm() {
    return this.personalInfoForm.get('package') as FormGroup;
  }
  calculateMemberAge() {
    const dob = this.personalInfoForm.get('dob')?.value;
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.personalInfoForm.get('age')?.setValue(age);
    }
  }

  private generateAccountNumber(): string {
    const accountNumber = 'OFR' + Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated Account Number:', accountNumber); // Log the generated account number
    return accountNumber;
  }

  calculateSpouseAge() {
    const dob = this.personalInfoForm.get('spouseDetails.dob')?.value;
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.personalInfoForm.get('spouseDetails.age')?.setValue(age);
    }
  }

  toggleWhatsApp() {
    const contactNumber = this.personalInfoForm.get('contactNumber')?.value;
    const spouseContactNumber = this.personalInfoForm.get('spouseDetails.contactNumber')?.value;
    
    // Assuming you have a checkbox to toggle WhatsApp for both
    const isWhatsAppChecked = (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked;

    if (isWhatsAppChecked) {
      this.personalInfoForm.get('whatsappNumber')?.setValue(contactNumber);
      this.personalInfoForm.get('spouseDetails.whatsappNumber')?.setValue(spouseContactNumber);
    } else {
      this.personalInfoForm.get('whatsappNumber')?.setValue('');
      this.personalInfoForm.get('spouseDetails.whatsappNumber')?.setValue('');
    }
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }
  
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
