function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  function checkForPalindromes() {
    const phrase = document.getElementById("phraseInput").value;
    const words = phrase.split(' ');
    const palindromes = words.filter(word => isPalindrome(word));
    const output = document.getElementById("output");
    if (palindromes.length > 0) {
      output.textContent = `Palindromes found: ${palindromes.join(', ')}`;
    } else {
      output.textContent = 'No palindromes found.';
    }
  }
  document.getElementById("checkButton").addEventListener("click", checkForPalindromes);