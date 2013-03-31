requirejs.config({
  baseUrl: '.'
});
requirejs(['openpgp.min'],
  function(_openpgp) {
    openpgp = _openpgp;
  });


function encrypt() {
  if (window.crypto.getRandomValues) {
    openpgp.init();
    var pub_key = openpgp.read_publicKey($('#pubkey').text());
    $('#message').val(openpgp.write_encrypted_message(pub_key,$('#message').val()));
    window.alert("This message is going to be sent:\n" + $('#message').val());
    return true;
  } else {
    $("#mybutton").val("browser not supported");
    window.alert("Error: Browser not supported\nReason: We need a cryptographically secure PRNG to be implemented (i.e. the window.crypto method)\nSolution: Use Chrome >= 11, Safari >= 3.1 or Firefox >= 21");   
    return false;
  }
}

