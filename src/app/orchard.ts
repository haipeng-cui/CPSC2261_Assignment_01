import { Tree } from './tree';
export class Orchard {
	size:number;
	trees:Tree[];
	constructor(size:number){
		this.size=size;
		this.trees=[];
	}
	addTree(newTree:Tree): void{
		this.trees.push(newTree);
	}
	totalFruitAvailable():number{
		let sum=0;
		for(let i=0;i<(this.trees).length;i++){
			sum+= this.trees[i].fruitAvailable();
		}
		return sum;
	}
	canFit(newTree:Tree) :boolean{
		let sum=0;
		for(let i=0;i<(this.trees).length;i++){
			sum+= this.trees[i].size();
		}
		if(this.size - sum>=0) 
			return true;
		else 
			return false;
	}
}
