import { Tree } from './tree';

describe('Tree', () => {
  	it('should create an instance', () => {
    	expect(new Tree()).toBeTruthy();
  	});
	it('should create a Tree with default values',() =>{	
		expect((new Tree()).growth).toEqual(0);
		expect((new Tree()).fruitTaken).toEqual(0);
	});
	it('should create a Tree with given values', () =>{
		let testTree=new Tree(100,1);
		expect(testTree.growth).toEqual(100);
		expect(testTree.fruitTaken).toEqual(1);
	});
	it('should calculate the right avalible fruits',() =>{
		let testTree=new Tree(100,1);
		expect(testTree.fruitAvailable()).toEqual(1);
	});
		it('should calculate the right negative number avalible fruits',() =>{
		let testTree=new Tree(100,10);
		expect(testTree.fruitAvailable()).toEqual(0);
	});
		it('should get right area for a 0 growth tree', ()=>{
			let testTree= new Tree;
			expect(testTree.size()).toEqual(0);
		});
		it('should get right area for growth tree', ()=>{
			let testTree= new Tree(100,1);
			expect(testTree.size()).toEqual(Math.pow(100, 2/3));
		});
	
});
