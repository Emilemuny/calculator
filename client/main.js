


$(function () {

  // Add containers to the DOM
  var $calculator = $('<div/>', {id: 'calculator'})
    .appendTo('body');
  var $input = $('<input/>', {id: 'input'})
    .appendTo($calculator);
  var $buttons = $('<div/>', {id: 'buttons'})
    .appendTo($calculator);

  // Add buttons to the DOM
  $.each('1234567890.=+-*/←C√'.split(''), function () {
    var $button = $('<button/>', {text: this.toString(), click: function () {
      // Handle button clicks
      switch ($(this).text()) {
        // '=' will fetch the current expression string, evaluate it,
        // and write the result back into the input/output field.
        // That's where the actual calculation happens.
        case '=': try {$input.val(eval($input.val()));} catch (e) {$input.val('ERROR');}
        // 'C' will clear the input/output field
        break; case 'C': return $input.val('');
        // 'CE' will delete the last character from the input/output field
        break; case '←': return $input.val($input.val().replace(/.$/, ''));
        break; case '√': return $input.val(Math.sqrt($input.val()));
        // All other buttons will add a character to the input/output field
        break; default: $input.val($input.val() + $(this).text());
      }
    }}).appendTo($buttons);
  });
});
