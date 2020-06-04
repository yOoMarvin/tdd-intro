const {describe, it, expect} = require("@jest/globals");

const bogoSort = require("./bogoSort")

describe("bogoSort", () => {
    it('should return a sorted number array', function () {
        expect(bogoSort([2, 5, 1])).toEqual([1, 2, 5]);
    });
    it('should return a sorted string array', function () {
        expect(bogoSort(["e", "b", "i", "q"])).toEqual(["b", "e", "i", "q"]);
    });
    it('should return a sorted string and number as string array', function () {
        expect(bogoSort(["e", "4", "b", "i", "0", "q", "45.56"])).toEqual(["0", "4", "45.56", "b", "e", "i", "q"]);
    });
    it('should detect if the value is not an array', function () {
        expect(bogoSort({0: 1, 1: 2})).toEqual(Error("Input is not an array"))
    });
    it('should only sort primitive types', function () {
        expect(bogoSort([{des: "I'm an object"}])).toEqual(Error("Elements of input are not primitive"));
    });
    it('should only sort non mixed arrays', function () {
        expect(bogoSort([0, "-1"])).toEqual(Error("Elements of input are of different types"));
    });
})
