function externalFunction(elementExternal) {
    return function internalFunction(elementInternal) {
        return elementExternal = elementExternal + elementInternal;
    }
}

const closingFunction = externalFunction(0);

console.log(`sum(3) = ${closingFunction(3)}`);
console.log(`sum(5) = ${closingFunction(5)}`);
console.log(`sum(20) = ${closingFunction(20)}`);

