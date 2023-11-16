function Counter() {
    this.count = 0;
    this.increment = function(){
        this.count++;
        // console.log(this.count);
    }

    this.decrement = function(){
        this.count--;
        // console.log(this.count);
    }

    this.reset = function(){
        this.count = 0;
        // console.log(this.count);
    }

    this.getCount = function(){
        return this.count;
        // console.log(this.count)
    }
};

const myCounter = new Counter();

console.log(myCounter.getCount());

myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

myCounter.decrement();
console.log(myCounter.getCount());

myCounter.reset();
console.log(myCounter.getCount());
