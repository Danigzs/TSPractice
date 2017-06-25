export class RequestMessage {
  
  status:number;
  message:string;
  success:boolean;

  constructor() {
    this.status = -1;
    this.message = "";
    this.success = false;
  } 

  setRequestMessage(status:number,message:string,success:boolean){
    this.status = status;
    this.message = message;
    this.success = success
  }
}
