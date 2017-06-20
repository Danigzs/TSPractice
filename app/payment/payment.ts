export class Payment {
    paymentWay: String;
    paymentDate: String;
    concept: String;
    amount: Number;
    constructor(){
        this.paymentWay="";
        this.paymentDate="";
        this.concept="";
        this.amount=0;
    }
    setPayment(paymentWay:string,paymentDate:string,concept:string,amount:number){
      this.paymentWay=paymentWay;
      this.paymentDate=paymentDate;
      this.concept=concept;
      this.amount=amount;  
    }

}