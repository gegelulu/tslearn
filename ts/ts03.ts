let anyNum: any = 'six';
anyNum = 6;
let anyThing: any = 'tom';
// anyThing.setName('Jack');
// anyThing.setName('Jack').sayHello();
// anyThing.myName.setFirstName('Cat');
// 类型推断
let someThing = 'tryStr';
someThing = '7';
let everything;
everything = 9;
everything = 'some';

let someY: string | number;
someY = 'eef';
someY = 7;
let someN: string | boolean;
someN = true;

function getL(someY: string | number): any{
    return someY;
    // return someY.toString();
}


