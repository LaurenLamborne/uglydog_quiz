var answerArray = [];

function questionSubmit(question, answer) {
  answerArray[question] = answer;
  console.log(answerArray);
}

function quizSubmit() {
  console.log("quizSubmit")
  var sum = answerArray.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }

  var res = (sum / 5);
  console.log(res);
  var h = "";
if(res <= 1.7){
h +=  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
+ '<div class="modal-dialog" role="document">'
+ '<div class="modal-content">'
+ '  <div class="modal-header">'
+ '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
+ '  <h4 class="modal-title" id="myModalLabel">Modal title #1</h4>'
+ '</div>'
+ '  <div class="modal-body">'
+ '    ... '
+ '  </div> '
+ ' <div class="modal-footer"> '
+ '<button type="button" class="btn btn-default" data-dismiss="modal">Edit Answers</button>'
+ '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="resetQuiz()">Close</button>'
+ '  </div> '
+ '  </div>'
+ '</div>'
+ '</div>'
} else if(res <= 2.4) {
  h +=  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
  + '<div class="modal-dialog" role="document">'
  + '<div class="modal-content">'
  + '  <div class="modal-header">'
  + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
  + '  <h4 class="modal-title" id="myModalLabel">Modal title #2</h4>'
  + '</div>'
  + '  <div class="modal-body">'
  + '    ... '
  + '  </div> '
  + ' <div class="modal-footer"> '
  + '<button type="button" class="btn btn-default" data-dismiss="modal">Edit Answers</button>'
  + '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="resetQuiz()">Close</button>'
  + '  </div> '
  + '  </div>'
  + '</div>'
  + '</div>'
} else if(res <= 3.3) {
  h +=  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
  + '<div class="modal-dialog" role="document">'
  + '<div class="modal-content">'
  + '  <div class="modal-header">'
  + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
  + '  <h4 class="modal-title" id="myModalLabel">Modal title #3</h4>'
  + '</div>'
  + '  <div class="modal-body">'
  + '    ... '
  + '  </div> '
  + ' <div class="modal-footer"> '
  + '<button type="button" class="btn btn-default" data-dismiss="modal">Edit Answers</button>'
  + '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="resetQuiz()">Close</button>'
  + '  </div> '
  + '  </div>'
  + '</div>'
  + '</div>'
} else {
  h +=  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
  + '<div class="modal-dialog" role="document">'
  + '<div class="modal-content">'
  + '  <div class="modal-header">'
  + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
  + '  <h4 class="modal-title" id="myModalLabel">Modal title #4</h4>'
  + '</div>'
  + '  <div class="modal-body">'
  + '    ... '
  + '  </div> '
  + ' <div class="modal-footer"> '
  + '<button type="button" class="btn btn-default" data-dismiss="modal">Edit Answers</button>'
  + '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="resetQuiz()">Close</button>'
  + '  </div> '
  + '  </div>'
  + '</div>'
  + '</div>'
};
document.getElementById('results').innerHTML = h;
}

function resetQuiz() {

     window.location.reload();

}
