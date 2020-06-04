const bogoSort = (values) => {
    if (!Array.isArray(values)) return Error("Input is not an array");
    if (!checkForPrimitives(values)) return Error("Elements of input are not primitive");
    if(!checkForSameTypes(values)) return Error("Elements of input are of different types");

    while (!isSortedAscending(values)) {
        const a = Math.floor(Math.random() * values.length);
        const b = Math.floor(Math.random() * values.length);

        const temp = values[a];
        values[a] = values[b];
        values[b] = temp;
    }
    return values;
}

const checkForSameTypes = (values) => {
    let sameType = true;
    for (let i = 0; i < values.length - 1; i++) {
        if (typeof values[i] !== typeof values[i + 1]) {
            sameType = false;
            break;
        }
    }
    return sameType;
}

const checkForPrimitives = (values) => {
    let onlyPrimitives = true;
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === "object") {
            onlyPrimitives = false;
            break;
        }
    }
    return onlyPrimitives;
}

const isSortedAscending = (array) => {
    let sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

module.exports = bogoSort;
