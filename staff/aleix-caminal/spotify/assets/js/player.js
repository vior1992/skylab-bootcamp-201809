function secondsToTime(time) {
    minutes = Math.floor(time / 60);
    seconds = ('0' + Math.floor(time - minutes * 60)).slice(-2);
    return minutes + ':' + seconds;
}

$('#play').on('click', function() {
    $('#player').paused ? $('#player').play() : $('#player').pause();
});

$('#player').on('timeupdate', function() {
    $('#time-ahead').html(secondsToTime($('#player').currentTime));
    $('#time-ahead').html('-' + secondsToTime($('#player').duration - $('#player').currentTime));
    $('#progress').width((($('#player').currentTime / $('#player').duration) * 100) + '%');
});
