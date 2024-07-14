export interface Menu {
  id:    string;
  name:  string;
  price: number;
  quantity:number;
}


export interface Order{
  Subtotal:number;
  Tip:number;
  Total:number;
  PropinaCalculada:number;
}



export interface Tip{
  id: string;

  value: number;

  label: string;

  check:boolean;

}
