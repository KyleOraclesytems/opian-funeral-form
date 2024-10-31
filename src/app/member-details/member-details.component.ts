import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  @Input() memberForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize form structure with validators if not passed from the parent
    if (!this.memberForm) {
      this.initializeForm();
    }

    // Subscribe to changes in the date of birth to calculate age
    this.memberForm.get('dob')?.valueChanges.subscribe(() => {
      this.calculateAge(); // Call calculateAge on date of birth change
    });
  }

  private initializeForm(): void {
    this.memberForm = this.fb.group({
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
      postalAddress: [''],
      postalSuburb: [''],
      postalPostalCode: [''],
    });
  }

  private generateAccountNumber(): string {
    const accountNumber = 'OFR' + Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated Account Number:', accountNumber); // Log the generated account number
    return accountNumber;
}

  copyPhysicalAddress(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      // Copy values from physical address fields to postal address fields
      this.memberForm.patchValue({
        postalAddress: this.memberForm.get('physicalAddress')?.value,
        postalSuburb: this.memberForm.get('physicalSuburb')?.value,
        postalPostalCode: this.memberForm.get('physicalPostalCode')?.value
      });
    } else {
      // Clear postal address fields if unchecked
      this.memberForm.patchValue({
        postalAddress: '',
        postalSuburb: '',
        postalPostalCode: ''
      });
    }
  }

  public toggleWhatsApp(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Type assertion to HTMLInputElement
    if (inputElement.checked) {
      const contactNumber = this.memberForm.get('contactNumber')?.value;
      this.memberForm.get('whatsappNumber')?.setValue(contactNumber);
    } else {
      this.memberForm.get('whatsappNumber')?.setValue('');
    }
  }

  public calculateAge(): void {
    const dobValue = this.memberForm.get('dob')?.value;
    if (!dobValue) return;

    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    this.memberForm.get('age')?.setValue(age);
  }
}
