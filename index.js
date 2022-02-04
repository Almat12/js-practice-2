window.onload = function() {
    check = (word) => {
      if (word.length > 8) {
        word = '<span style="background:red;">' + word + '</span>';
      } else {
        word;
      }
      return word;
    }
    var str = document.querySelector("#Ex1").innerText;
    var newt = str.trim().split(' ').map(check).join(' ');
    document.querySelector("#Ex1").innerHTML = newt;

  }
  const link = document.createElement('a');
  link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
  link.innerText = 'Link';
  document.body.appendChild(link);

  //paragraph.innerHTML=paragraph.innerHTML
  //.split(/\.[^\.|<]/)
  //.join('.</p><p>')+'</p>'
  // i dont know why, but this code doesnt work 

function countWords(){
    var paragraphs = document.getElementsByTagName("p");
    var count = 0;

    for(var i = 0; i < paragraphs.length; i++)
    {
        count += paragraphs[i].innerHTML.split(' ').length;
    }
    document.write("Number of words: "+count);
}

countWords();
Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\!/g, '😮')
  .replace(/\?/g, '🤔')
})
