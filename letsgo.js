function createParagraph(){
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;
    var word5 = document.getElementById('word5').value;
    var word6 = document.getElementById('word6').value;
    var word7 = document.getElementById('word7').value;
    var word8 = document.getElementById('word8').value;
    var word9 = document.getElementById('word9').value;
    var word10 = document.getElementById('word10').value;
    var word11 = document.getElementById('word11').value;
    var word12 = document.getElementById('word12').value;
    var word13 = document.getElementById('word13').value;
    var word14 = document.getElementById('word14').value;
    
    var paragraph = `It was a ${word1}, cold November day. I woke up to the  ${word2}smell of ${word3} roasting in the ${word4} downstairs. I ${word5} down the stairs to see if I could help ${word6} the dinner. My mom said, See if ${word7} needs a fresh ${word8}." So, I carried a tray of glasses full of ${word9} into the ${word10} room. When I got there, I couldn't believe my ${word11}"! There were ${word12} ${word13} on the ${word14}!`;

    document.getElementById('answer').innerHTML = paragraph;}