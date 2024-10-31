import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrl: './banking-details.component.scss'
})
export class BankingDetailsComponent {
  @Input() formGroup!: FormGroup;

   
  bankBranchCodes: { [key: string]: string } = {
    'Absa Bank Limited': '632005',
    'African Bank Limited': '430000',
    'Capitec Bank Limited': '470010',
    'Discovery Bank Limited': '679000',
    'First National Bank (FNB)': '250655',
    'FirstRand Bank': '250655',
    'Grindrod Bank Limited': '223626',
    'Investec Bank Limited': '580105',
    'Merchantile Bank Limited': '450105',
    'Nedbank Limited': '198765',
    'Old Mutual': '462005',
    'OraclePay': '51001',
    'Sasfin Bank Limited': '683000',
    'Standard Bank of South Africa': '51001',
    'SA Post Bank (Post Office)': '460005',
    'Tyme Bank': '678910'
  };
  constructor(private fb: FormBuilder) {
    // Define the form structure with validators
    this.formGroup= this.fb.group({
      title: ['Mr', Validators.required],

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
      email: ['', [Validators.required, Validators.email]],
      physicalAddress: ['', Validators.required],
      physicalSuburb: ['', Validators.required],
      physicalPostalCode: ['', Validators.required],
      postalAddress: [''],
      postalSuburb: [''],
      postalPostalCode: [''],
      streetAddress: [''],
      city: [''],
      accountHolder: [''],
      bankInstitution: [''],
      branchCode: [''],
      accountType: [''],
      rent: [0],
      utilities: [0],
      groceries: [0],
      transportation: [0],
      otherExpenses: [0],
      totalExpenses: [{ value: 0, disabled: true }],
    });

    // Initialize table rows

  }
  onBankChange(event: any) {
    const selectedBank = event.target.value;
    const branchCode = this.bankBranchCodes[selectedBank];
    this.formGroup.patchValue({ branchCode: branchCode });
  }
}
