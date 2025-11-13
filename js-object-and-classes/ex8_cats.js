function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);      
        }
    }

    for (let catInfo of arr) {
        let [name, age] = catInfo.split(' ');
        let catObj = new Cat(name, age);
        catObj.meow();  
    }
}

cats(['Mellow 2', 'Tom 5'])