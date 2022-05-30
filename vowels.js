const numberOfVowels = function(data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let extractVowels = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++)
    if (data[i] === vowels[j]) {
      extractVowels.push(data[i])
    }
  }return extractVowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));