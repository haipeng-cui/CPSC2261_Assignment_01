import { BankAccount } from './bank-account';

describe('BankAccount', () => {
	  it('should create an instance', () => {
		expect(new BankAccount()).toBeTruthy();
	  });
	it ('should create an empty account with 0 ', ()=>{
		expect((new BankAccount()).balance).toEqual(0);
	});
	  it('should transfer 100 dollars from one account to another',()=>{
		let account1= new BankAccount(100);
		let account2= new BankAccount(100);
		 account1.transferTo(account2,100);
		expect(account1.balance).toEqual(0);
		expect(account2.balance).toEqual(200);
	  });
		
	it('should remian unchanged if it transfering to itself',()=>{
		let account=new BankAccount(100);
		account.transferTo(account,100);
		expect(account.balance).toEqual(100);
	});
});
