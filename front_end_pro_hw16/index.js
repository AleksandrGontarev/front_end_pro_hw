function externalFunction(elementExternal) {
    return function internalFunction(elementInternal) {
        return elementExternal = elementExternal + elementInternal;
    }
}

const closingFunction = externalFunction(0);

console.log(closingFunction(3));
console.log(closingFunction(5));
console.log(closingFunction(20));

