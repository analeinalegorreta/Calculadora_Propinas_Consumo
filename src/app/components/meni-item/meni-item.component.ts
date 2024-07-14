import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu.interfaces';
import { UseOderService } from 'src/app/use-oder.service';

@Component({
  selector: 'app-meni-item',
  templateUrl: './meni-item.component.html',
  styleUrls: ['./meni-item.component.css']
})
export class MeniItemComponent implements OnInit {

  public menu: Menu[] = [];

  constructor(private UseOderService: UseOderService) { }


  ngOnInit(): void {
  this.UseOderService.getMenu()
  .subscribe(item=>this.menu=item)
  }

  addCar(element:Menu){
    this.UseOderService.insertOrden(element)
  }


}
