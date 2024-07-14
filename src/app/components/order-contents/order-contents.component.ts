import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu.interfaces';
import { UseOderService } from 'src/app/use-oder.service';

@Component({
  selector: 'app-order-contents',
  templateUrl: './order-contents.component.html',
  styleUrls: ['./order-contents.component.css']
})
export class OrderContentsComponent implements OnInit {

  public orden: Menu[] = [];

  constructor(private UseOderService: UseOderService) { }


  ngOnInit(): void {
    this.UseOderService.getOrder()
    .subscribe(resp =>this.orden=resp)
  }


  deleteElement(id:string){
    this.UseOderService.removeItem(id)

   //this.orden= this.orden.filter(item => item.id !== id)
  }


}
