import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-documents',
  templateUrl: './submit-documents.component.html',
  styleUrls: ['./submit-documents.component.scss']
})
export class SubmitDocumentsComponent implements OnInit {
  @Input() personalInfoForm!: FormGroup;
  @Input() memberForm!: FormGroup;
  @Input() package!: FormGroup; 
  selectedPackage: any = null; // Store the selected package
  originalPrice: number = 0; // Store the original price
  totalPrice: number = 0; // Store the total price including optional features
  packages = [
    { name: 'Iron', member: 'Incl', price: 38, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Bronze', member: 'Incl', price: 185, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Silver', member: 'Incl', price: 285, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Gold', member: 'Incl', price: 385, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Platinum', member: 'Incl', price: 525, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Diamond', member: 'Incl', price: 695, selected: false, upgradable: false, salaryBenefit: '', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
    { name: 'Black', member: 'Incl', price: 795, selected: false, upgradable: false, salaryBenefit: 'Incl', optParentCover: false, optExtendedCover: false, limoHearse: false, familyCars: false, tombstone: false },
  ];

  constructor(private fb: FormBuilder) {}

  // Initialize the form
  ngOnInit() {
    this.personalInfoForm = this.fb.group({
      // Member Details
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', Validators.required],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }]
    });
  }

  // Handle package selection and assign selected package to display it in the template
  onSelect(selectedPackage: any) {
    this.packages.forEach(pkg => {
      pkg.selected = pkg === selectedPackage; // Set selected to true only for the selected package
    });
    this.selectedPackage = selectedPackage.selected ? selectedPackage : null; // Set the selected package
    this.updatePrice(); // Update price when a package is selected
  }

  // Ensure only one row can be selected at a time
  isAnyOtherRowSelected(currentPackage: any): boolean {
    return this.packages.some(pkg => pkg.selected && pkg !== currentPackage);
  }

  // Calculate age based on DOB (for the member or spouse)
  calculateAge() {
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

  // Update price based on selected package and options
  // Update price based on selected package and options
  updatePrice() {
    if (this.selectedPackage) {
      // Start with the base price of the selected package
      let totalPrice = this.originalPrice; // Use the original price

      // Add costs based on selected options
      if (this.selectedPackage.optParentCover) totalPrice += 150;
      if (this.selectedPackage.optExtendedCover) totalPrice += 190;
      if (this.selectedPackage.limoHearse) totalPrice += 210;
      if (this.selectedPackage.familyCars) totalPrice += 240;
      if (this.selectedPackage.tombstone) totalPrice += 250;

      // Ensure totalPrice does not go below zero
      totalPrice = Math.max(totalPrice, 0);

      // Update the package price
      this.selectedPackage.price = totalPrice;
    }
  }

  // Handle checkbox change to adjust price
  onCheckboxChange(option: string) {
    if (this.selectedPackage) {
      // If checkbox is checked, update the price accordingly
      if (this.selectedPackage[option]) {
        this.selectedPackage[option] = false; // Uncheck
        this.updatePrice(); // Recalculate price after unchecking
      } else {
        this.selectedPackage[option] = true; // Check
        this.updatePrice(); // Recalculate price after checking
      }
    }
  }
  // Expose member details as a getter for use in the template
  get memberDetails() {
    return this.personalInfoForm.value;
  }
}
