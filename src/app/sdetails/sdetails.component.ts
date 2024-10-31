import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.scss']
})
export class SdetailsComponent {
  @Input() spouseForm!: FormGroup; // Receive the spouse form group from the parent
  @Input() memberForm!: FormGroup;  // To display member details in this step
}
