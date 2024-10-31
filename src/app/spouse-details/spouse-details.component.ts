import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spouse-details',
  templateUrl: './spouse-details.component.html',
  styleUrls: ['./spouse-details.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class SpouseDetailsComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  ngOnInit() {
    // Subscribe to changes in the spouse's date of birth
    this.spouseForm.get('dob')?.valueChanges.subscribe(() => {
      this.calculateAge(); // Call calculateAge on date of birth change
    });
  }

  get spouseForm() {
    return this.formGroup.get('spouseDetails') as FormGroup;
  }

  copyPhysicalAddress(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.spouseForm.patchValue({
        postalAddress: this.formGroup.get('physicalAddress')?.value,
        postalSuburb: this.formGroup.get('physicalSuburb')?.value,
        postalPostalCode: this.formGroup.get('physicalPostalCode')?.value
      });
    } else {
      this.spouseForm.patchValue({
        postalAddress: '',
        postalSuburb: '',
        postalPostalCode: ''
      });
    }
  }

  toggleWhatsApp() {
    const contactNumber = this.spouseForm.get('contactNumber')?.value;
    const isChecked = (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked;

    if (isChecked) {
      this.spouseForm.get('whatsappNumber')?.setValue(contactNumber);
    } else {
      this.spouseForm.get('whatsappNumber')?.setValue('');
    }
  }

  calculateAge() {
    const dob = this.spouseForm.get('dob')?.value;
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      // Adjust age if the birthday hasn't occurred this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.spouseForm.get('age')?.setValue(age);
    } else {
      this.spouseForm.get('age')?.setValue(null); // Set to null if no DOB
    }
  }
}
