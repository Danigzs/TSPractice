export class Payment {
    order_id:number;
    paymentWay: String;
    date: Date;
    concept: String;
    amount: number;
    constructor(){
        this.order_id = -1;
        this.paymentWay="";
        this.date= new Date;
        this.concept="";
        this.amount=0;
    }
    setPayment(order_id:number,paymentWay:string,date:Date,concept:string,amount:number){
        this.order_id =order_id;
      this.paymentWay=paymentWay;
      this.date = date;
      this.concept=concept;
      this.amount=amount;
    }

}