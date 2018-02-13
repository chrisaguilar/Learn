function sum (...args) {
    return args.reduce((a, b) => a + b);
}

module.exports = sum;
