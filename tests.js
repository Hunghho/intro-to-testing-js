// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello("")).toBe("string");
    })
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    })
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    })
    it('should return a number 5', function () {
        expect(isFive(5)).toBe(5);
    })
    it('should return a string of "5"', function (){
        expect(isFive("5")).toBe(5);
    })
})

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    })
    it('should return a boolean', function () {
        expect(typeof isEven(true)).toBe("boolean");
    })
    it('should return true when pass a number 2', function () {
        expect(isEven(2)).toBe(true);
    })
    it('should return true when pass a number -4', function () {
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when pass a number 3', function () {
        expect(isEven(3)).toBe(false);
    })
    it('should return false when pass a string "banana', function () {
        expect(isEven("banana")).toBe(false);
    })
    it('should return true when pass string "8"', function () {
        expect(isEven("8")).toBe(true);
    })
    it('should return false when pass Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when pass a boolean true or false', function () {
        expect(isEven(true)).toBe(false);
    })
    it('should return false when not passing an argument', function () {
        expect(isEven()).toBe(false);
    })
})

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    })
    it('should always return a boolean', function () {
        expect(typeof isVowel(true)).toBe("boolean");
    })
    it('should return true when pass a string "a"', function () {
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when pass a string "A"', function () {
        expect(isVowel("A")).toBe(true);
    })
    it('should return false when pass a string "y"', function () {
        expect(isVowel("y")).toBe(false);
    })
    it('should return false when pass a number 4', function () {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when pass a boolean true or false', function () {
        expect(isVowel(true)).toBe(false);
    })
    it('should return false when not passing an argument', function () {
        expect(isVowel()).toBe(false);
    })
})