function difference(...args) {
    return args.reduce((a, b) => a - b);
}

module.exports = difference;
