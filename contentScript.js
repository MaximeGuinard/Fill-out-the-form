document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == 'text') {
      if (inputs[i].name.toLowerCase().includes('first')) {
        inputs[i].value = 'Prénom';
      }
      if (inputs[i].name.toLowerCase().includes('last')) {
        inputs[i].value = 'Nom';
      }
      if (inputs[i].name.toLowerCase().includes('email')) {
        inputs[i].value = 'exemple@email.com';
      }
    }
  }
  var textareas = document.getElementsByTagName('textarea');
  if (textareas.length > 0) {
    textareas[0].value = 'Ceci est un message de test.';
  }
});
