function findLargestWord (str){
    let words = str.split(' ');
    console.log(words);
    let longestWord = ' ';
    for(var word of words){
        if(word.length>longestWord.length){

            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLargestWord('the quick brown for jumped over the lazy dog'))