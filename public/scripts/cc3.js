console.log( 'js' );

jokes = [];

$( document ).ready( function(){
  console.log( 'JQ' );

  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');



      var whoseJoke = $('#whoseJokeIn').val();
      var jokeQuestion = $('#questionIn').val();
      var punchLine = $('#punchlineIn').val();

      var newJokes = {
        whoseJoke: whoseJoke,
        jokeQuestion: jokeQuestion,
        punchLine: punchLine
      }; // end jokes object
      console.log('new jokes', newJokes);

      $.ajax({
        type: 'POST',
        url: '/',
        data: newJokes,
        success: function(response) {
          console.log('ajax success', response);
          displayResult(response);
        }, // end success function
        error: function(){
          console.log('ajax error');
        }
      }); // end ajax call

      var getData = function(){
        console.log('GET');
        $.ajax({
          type: 'GET',
          url: '/',
          data: newJokes,
          success: function(response) {
            console.log('post call ', response);
            newJokes.push(jokes);
            displayResult(response);
          }
        }); // end get ajax

      function displayResult(response) {
        console.log('in displayResult function:', response);
        $('#outputDiv').append(newJokes);
      } // end displayResult
    }; // end getData
  }); // end click
}); // end doc ready
