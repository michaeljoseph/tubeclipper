$('#button').click(function () {
    console.log('gone');
});

$('input').keydown(function (e) {
    var regex = /(\?v=|\&v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/;
    var youtube_url = $('#youtube_url').val();
    var matches = youtube_url.match(regex);
    if (matches) {
        var video_id = matches[2];
        // var video_id = $('#video_id').val();
        var start = $('#start').val();
        var end = $('#end').val();
        var url = 'https://www.youtube.com/v/' + video_id + '?start=' + start + '&end=' + end + '&version=3&autoplay=1';
        if (e.which == 13) {
            // and variables have values
            console.log('replace video div with stuffs');
            console.log(url);
            $('#video').attr("src", url);
        }
    }
});