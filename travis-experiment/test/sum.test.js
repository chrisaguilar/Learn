const { expect } = require('chai');

const { sum } = require('../src');

describe('sum', () => {
    it('Should add 2..n numbers together', () => {
        expect(sum(1, 2, 3)).to.equal(6);
        expect(sum(1, 2, -3)).to.equal(0);
        expect(sum(1, 10, -29)).to.equal(-18);

        const tests = [];
        for (let i = 1; i <= 1000; i++) tests.push(i);
        expect(sum(...tests)).to.equal(500500);
    });
});
