import { Orchard } from './orchard';
import { Tree } from './tree';

describe('Orchard', () => {
    it('should create a 0 size Orchard instance', ()=>{
        expect(new Orchard(0)).toBeTruthy();
	    expect((new Orchard(0)).size).toEqual(0);
    });
	it('should create a given size Orchard instance',()=>{
		let newOrchard = new Orchard(100);
		expect(newOrchard.size).toEqual(100);
	});
	it('should calculate the total available fruits',()=>{
		let tree1 =new Tree(100,0);
		let tree2 =new Tree(1000,1);
		let tree3 =new Tree(10000,2);
		let newOrchard = new Orchard(1000);
		newOrchard.addTree(tree1);
		newOrchard.addTree(tree2);
		newOrchard.addTree(tree3);
		expect(newOrchard.totalFruitAvailable()).toEqual(6);
		
	});
	it('should calculate the total available fruits with all zero growth trees',()=>{
		let tree1 =new Tree(0,0);
		let tree2 =new Tree(0,1);
		let tree3 =new Tree(0,2);
		let newOrchard = new Orchard(1000);
		newOrchard.addTree(tree1);
		newOrchard.addTree(tree2);
		newOrchard.addTree(tree3);
		expect(newOrchard.totalFruitAvailable()).toEqual(0);
		
	});
	it('the given tree is not able to fit the orchard',()=>{
		let tree1 =new Tree(100,0);
		let tree2 =new Tree(100,1);
		let tree3 =new Tree(100,2);
		let newOrchard = new Orchard(60);
		newOrchard.addTree(tree1);
		newOrchard.addTree(tree2);
		newOrchard.addTree(tree3);
		let testTree = new Tree(20,0);
		expect(newOrchard.canFit(testTree)).toEqual(false);
		
	});
	it('the given tree is able to fit the orchard',()=>{
		let tree1 =new Tree(100,0);
		let tree2 =new Tree(100,1);
		let tree3 =new Tree(100,2);
		let newOrchard = new Orchard(100);
		newOrchard.addTree(tree1);
		newOrchard.addTree(tree2);
		newOrchard.addTree(tree3);
		let testTree = new Tree(5,0);
		expect(newOrchard.canFit(testTree)).toEqual(true);
		
	});
});

