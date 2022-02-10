/**
 * * Question :- Given a string S, find the longest palindromic substring in S.
 * * Return the length of the longest palindromic substring.
*/


/**
 * * 1 Solution
 * * Run 2 nested loops, which is O(n^2)
 * * By Running 2 loops we will get all substring of the string and check if it is palindrome or not
 * * If it is palindrome and greater then previous result then we will add it to the result
 * * Return the result
 */


 class Solution_1 {
    longestPalin(S){
      let longest = "";
      for(let i = 0;i< S.length; i++) {
          for(let j = 0; j < S.length; j++) {
              if(this.isPalindromic(S.slice(i,j+1)) && (j - i + 1) > longest.length) longest = S.slice(i,j+1);
          }
      }
      
      return longest;
    }
    
    isPalindromic(S) {
        let i = 0;
        let j = S.length - 1;
        
        while(i <= j) {
            if(S[i++] != S[j--]) return false;
        }
        
        return true;
    }
  }

/**
 ** 2 Solution 
 ** Run loop for each index of string
 ** for each index traverse in two directions to find the longest palindrome
 ** for odd case set left = i and right = i+1
 ** for even case set left = i and right = i
 */

 class Solution_2 {
    longestPalin(S){
      //code here
      let longest = "";
      for(let i =0; i< S.length; i++) {
          
          let low = i - 1;
          let high = i;
          
          while(low >= 0 && high < S.length && S[low] == S[high]) {
              if(high - low + 1 > longest.length) longest = S.slice(low,high + 1);
              
              high++;
              low--;
          }
          
          low = i;
          high = i;
          
          while(low >= 0 && high < S.length && S[low] == S[high]) {
              if(high - low + 1 > longest.length) longest = S.slice(low,high + 1);
              
              high++;
              low--;
          }
      }
      
      return longest;
    }
}