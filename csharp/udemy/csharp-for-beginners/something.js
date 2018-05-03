function taperDown(str) {
    return [...str].map((e, i, a) => a.slice(i).join('')).join('');
}
console.log(taperDown('Hello my name is Christopher how are you?'))
