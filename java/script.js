$(function(){
    $('button').on('click', function(){
        $('.popup-layout').css('display', 'flex');
    });

    $('.popup-layout').on('click', function(event){
        if(event.target === this) {
            $('.popup-layout').css('display', 'none');
        }
    });

    $('.popup-close').on('click', function(){
        $('.popup-layout').css('display', 'none');
    });

    $('input[type="submit"]').on('click', function(){
        let request = {
            'name': $('#name').val(),
            'email': $('#email').val()

            
        };
        $.post('/api.php', request, function(response){
            if(response == '1') {
                $('.popup-layout').css('display', 'none');
            } else {
                alert('Ошибка :(');
            }
        });
    });
});