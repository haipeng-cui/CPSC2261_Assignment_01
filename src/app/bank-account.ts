export class BankAccount {
	balance:number;
	constructor(balance:number = 0) {
		this.balance=balance;
	}
	transferTo(otherAccount:BankAccount, amt:number): void{
		this.balance -=amt;
		otherAccount.balance+=amt;
	}
}
