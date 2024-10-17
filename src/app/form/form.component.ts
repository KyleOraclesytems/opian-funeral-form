import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Define an interface for table rows
interface TableRow {
  isSelected: boolean;
  static1: string;
  static2: string;
  static3: string;
  static4: string;
  static5: string;
  static6: string;
  static7: string;
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  checkbox5: boolean;
  checkbox6: boolean;
  checkbox7: boolean;
  checkbox8: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personalInfoForm: FormGroup;
  currentStep: number = 1;
  totalSteps: number = 8;
  tableRows: TableRow[] = []; // Use the interface for typing

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
    this.tableRows = this.initializeTableRows();
  }

  ngOnInit() {}

  // Method to initialize table rows with default values
  initializeTableRows(): TableRow[] {
    return Array.from({ length: 7 }, (_, index) => ({
      isSelected: false,
      static1: `Row ${index + 1} Value 1`,
      static2: `Row ${index + 1} Value 2`,
      static3: `Row ${index + 1} Value 3`,
      static4: `Row ${index + 1} Value 4`,
      static5: `Row ${index + 1} Value 5`,
      static6: `Row ${index + 1} Value 6`,
      static7: `Row ${index + 1} Value 7`,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
    }));
  }

  selectRow(index: number) {
    // Deselect other rows when one is selected
    this.tableRows.forEach((row, i) => {
      row.isSelected = i === index;
    });
  }
  toggleRowSelection(index: number) {
    // Deselect all other rows and select the current one
    this.tableRows.forEach((row, i) => {
      row.isSelected = i === index;
    });
  }
  // Function to generate account number (replace with actual database logic)
  generateAccountNumber(): string {
    // Simulate fetching a unique account number from the database
    return 'OFR' + Math.floor(100000 + Math.random() * 900000);
  }

  // Function to copy physical address to postal address if the checkbox is checked
  copyPhysicalAddress(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.personalInfoForm.patchValue({
        postalAddress: this.personalInfoForm.get('physicalAddress')?.value,
        postalSuburb: this.personalInfoForm.get('physicalSuburb')?.value,
        postalPostalCode: this.personalInfoForm.get('physicalPostalCode')?.value
      });
    } else {
      this.personalInfoForm.patchValue({
        postalAddress: '',
        postalSuburb: '',
        postalPostalCode: ''
      });
    }
  }

  onBankChange(event: any) {
    const selectedBank = event.target.value;
    const branchCode = this.bankBranchCodes[selectedBank];
    this.personalInfoForm.patchValue({ branchCode: branchCode });
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

  calculateTotalExpenses() {
    const formValues = this.personalInfoForm.value;
    const total =
      (formValues.rent || 0) +
      (formValues.utilities || 0) +
      (formValues.groceries || 0) +
      (formValues.transportation || 0) +
      (formValues.otherExpenses || 0);

    this.personalInfoForm.patchValue({
      totalExpenses: total
    });
  }

  // Function to toggle WhatsApp number field iff same as contact number
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
