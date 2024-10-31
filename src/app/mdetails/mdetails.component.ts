import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdetails',
  templateUrl: './mdetails.component.html',
  styleUrls: ['./mdetails.component.scss' ] // Corrected to styleUrls
})
export class MdetailsComponent {
  @Input() memberForm!: FormGroup;  // Receive the form group from the parent
}
