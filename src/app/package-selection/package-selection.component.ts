import { Component } from '@angular/core';

@Component({
  selector: 'app-package-selection',
  templateUrl: './package-selection.component.html',
  styleUrl: './package-selection.component.scss'
})
export class PackageSelectionComponent {
  cards = [
    {
      name: 'Silver Package',

      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    },
    {
      name: 'Iron',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },
    {
      name: 'Bronze',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },
    {
      name: 'Silver',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },
    {
      name: 'Gold',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },
    {
      name: 'Platinum',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },  
     {
      name: 'Diamond',
      hover: ' Hover for benefits',
      benefits: ['Member and Spouse : R15 000,00 Funeral Cover each','Children aged 13-20 : R10 000, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 6 – 12 : R7 500, 00 Funeral Cover each', 'Children aged 0 – 5 : R5 000, 00 Funeral Cover each'],
      premium : 'R185,00 per month',
      option : 'Parent Funeral Cover, Extended Family Cover, Accidental Death Cover'
    },
  ];

}
