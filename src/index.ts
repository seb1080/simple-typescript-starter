// eslint-disable-next-line no-console
const OUT_PUT = `Is Anagram`;

function isAnagram(word1, word2) {
  const isAnagram = false;

  const array1 = word1.split('');
  const array2 = word2.split('');

  const val = array1.some((i: string) => array2.include(i));

  return isAnagram;
}

// IsAnagram("abc", "bca") == true
// IsAnagram("abc", "abb") == true
// IsAnagram("abcc", "abbc") == false

const value = isAnagram('abc', 'bca');

console.log(`${OUT_PUT}  ${value}`);
