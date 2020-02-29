function *generatorFunction() {
    console.log("This is a sample generator function");

    let x = 5;

    yield x;

    x++;
    return x;
}


let iterator = generatorFunction();
console.log(iterator.next());
console.log(iterator.next());
console.log("All done");