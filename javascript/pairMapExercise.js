const options = {
  YouTube: ['Saved'],
  AppleMusic: ['Saved', 'Played', 'Skipped'],
  Spotify: ['Saved', 'Played'],
  Napster: ['Saved', 'Skipped']
}

Object.prototype.pairMap = function(){
    const result = [];
    const list   = Object.keys(this);
    list.forEach((x) => {
        this[x].forEach((pair) => {
            result.push([x, pair]);
        })
    });

    return result
}

const result = options.pairMap();
console.log(result);
