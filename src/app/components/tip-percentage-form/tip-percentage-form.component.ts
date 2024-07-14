import { Component } from '@angular/core';
import { Tip } from 'src/app/interface/menu.interfaces';
import { UseOderService } from 'src/app/use-oder.service';

@Component({
  selector: 'app-tip-percentage-form',
  templateUrl: './tip-percentage-form.component.html',
  styleUrls: ['./tip-percentage-form.component.css']
})
export class TipPercentageFormComponent {

  constructor(private UseOderService: UseOderService) { }

  public tipOptions:Tip[] = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%',
        check:false,
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%',
        check:false,
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%',
        check:false,
    },
]




optionChange(element:Tip){
  this.UseOderService.tipAmount(element)
}

}
