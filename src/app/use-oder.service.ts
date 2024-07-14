import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { Menu, Order, Tip } from './interface/menu.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UseOderService {
  private baseUrl: string = 'http://localhost:3000'
  public orden: Menu[] = [];
  private dataSubject = new Subject<Menu[]>(); // Observable - para poder enviar datos
  private dataSubjectTotales = new Subject<Order>();
  private totales: Order = {
    Subtotal: 0,
    Tip: 0,
    Total: 0,
    PropinaCalculada:0,
  }

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}/menuItems`)
      .pipe(
        map(searchResponse => searchResponse

        )
      )
  }

  insertOrden(element: Menu) {
    const itemExists = this.orden.findIndex(x => x.id === element.id) // "x" es el objeto que encontro  en "x" se guarda

    if (itemExists >= 0) {
      this.orden[itemExists].quantity += 1
    } else {
      element.quantity = 1
      // element.price*element.quantity
      this.orden.push(element);
    }


    this.dataSubject.next(this.orden)// emite un cambio // cuando el usuario preciona una nueva opcion el mira q hay un nuevo cambio y reenvia los datos nuevos
    this.totalAmount()

  }



  getOrder(): Observable<Menu[]> {   // Se crea esta funcion para poder enviar datos a otro componente
    return this.dataSubject.asObservable()
  }

  getTotales(): Observable<Order> {   // Se crea esta funcion para poder enviar datos a otro componente
    return this.dataSubjectTotales.asObservable()
  }



  removeItem = (id: string) => {
    this.orden = this.orden.filter(item => item.id !== id)
    this.dataSubject.next(this.orden)
    this.totalAmount()
  }


  totalAmount = () => {
    let subtotalAmount = 0
    for (let a = 0; a < this.orden.length; a++) {
      subtotalAmount += this.orden[a].price * this.orden[a].quantity
    }
    this.totales.Subtotal = subtotalAmount
    this.totales.PropinaCalculada=this.totales.Tip*this.totales.Subtotal
    this.totales.Total=this.totales.Subtotal+this.totales.PropinaCalculada
    this.dataSubjectTotales.next(this.totales)

  }



  tipAmount(tip: Tip) {
    this.totales.Tip = tip.value
    this.totalAmount()
  }

  clearOrder(){
    this.orden = [];
    this.totales = {
      Subtotal: 0,
      Tip: 0,
      Total: 0,
      PropinaCalculada:0,};
    this.dataSubjectTotales.next(this.totales)
    this.dataSubject.next(this.orden)
  }








}
