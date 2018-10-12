var box = $('<section></section>');
box.appendTo('body');
box.css('background-color', 'brown');
box.width(100);
box.height(100);

var hw = $('<div>&nbsp;hola mundo&nbsp;</div>');
hw.appendTo(box);
hw.css('background-color', 'yellow');
hw.css('display', 'inline-block');
hw.click(function() { alert('hola mundo'); });

$('#other-box').css('background-color', 'green');
$('.other-box').css('background-color', 'skyblue');