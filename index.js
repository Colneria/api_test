$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
       
            var data = {
                token: "xoxb-5289840727651-5283380984550-J2gNS3PozRtE4FAFixv1R9xv",
                channel: '#general',
                text: '*Hello Slack!*',
                username: 'katsutoshi',
        
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});
