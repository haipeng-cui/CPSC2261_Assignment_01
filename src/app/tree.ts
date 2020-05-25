export class Tree {
	growth:number;
	fruitTaken:number;
	constructor(growth:number=0, fruitTaken:number=0){
		if(growth <0 ) 
			growth=0;
		if(fruitTaken <0) 
			fruitTaken=0;
		this.growth = growth;
		this.fruitTaken = fruitTaken;
	}
	grow(count:number=1): void{
		if(count < 1) count = 0;
		this.growth+=count;
	}
	fruitAvailable(): number{
		if (this.growth == 0) 
			return 0;
		if ((Math.floor(Math.log10(this.growth)) - this.fruitTaken)<0) 
			return 0;
		else
			return Math.floor(Math.log10(this.growth)) - this.fruitTaken;
		
	}
	size(): number{
		return Math.pow(this.growth,2/3);
	}
	
}
