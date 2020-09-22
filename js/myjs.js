

var sleeping_hours ;
sleeping_hours = prompt('please enter your sleeping hours');
var sleeping_scale;
if (sleeping_hours<8) {
sleeping_scale = 'insufficient sleeping' ;
} else if (sleeping_hours== 8){
sleeping_scale = 'perfect sleeping';
} else {
    sleeping_scale = 'excessive sleeping';
}
alert('Do_not_stop_dreaming keep_sleeping');

document.write(`<h3>${sleeping_scale}</h3>`)