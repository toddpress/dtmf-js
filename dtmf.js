// Utility set for working with Dual Tone Multifrequency
// in javascript
const [rowFreqs, colFreqs] = [[
          // Hi Freqs(Hz)
          697, // [1]   [2]   [3]   [A]
          770, // [4]   [5]   [6]   [B]
          852, // [7]   [8]   [9]   [C]
          941],// [*]   [0]   [#]   [D]
                [1209, 1336, 1477, 1633]];
                // Lo Freq(Hz)
const frequencies = [rowFreqs, colFreqs];
function getKeySequence(string) { 
  return string.match(/(\d|\*|#|A-D)/g); 
}
function getFreqsForKey(key) {
    let index = '123A456B789C*0#D'.indexOf(key);
    return [rowFreqs[Math.floor(index / 4)], colFreqs[index % 4]];
}
function getKeyForFreqs(lo, hi) {
  let index = rowFreqs.indexOf(lo) * 4 + colFreqs.indexOf(hi);
  return '123A456B789C*0#D'[index] || '';
}

export { frequencies, getKeySequence, getFreqsForKey, getKeyForFreqs };
