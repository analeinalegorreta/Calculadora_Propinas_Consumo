import { Component, OnInit } from '@angular/core';
import { Menu, Order } from 'src/app/interface/menu.interfaces';
import { UseOderService } from 'src/app/use-oder.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent  implements OnInit {

  public totales: Order =
  {
    Subtotal: 0,
    Tip: 0,
    Total: 0,
    PropinaCalculada:0,
  };

  constructor(private UseOderService: UseOderService) { }

  ngOnInit(): void {
    this.UseOderService.getTotales()  // solo nos subscribimos a getOrder para ver los cambios
    .subscribe(resp =>
     this.totales= resp)
  }


  clearOrder(){
    this.UseOderService.clearOrder()
  }



}
