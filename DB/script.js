$('document').ready(() => { 

    const $type = $('#type');
    const $book = $('#book_type');
    const $comic = $('#comic_type');
    const $film = $('#film_type');
    const $game = $('#game_type');
    const $bg = $('#head');
   
    $book.on('click', event => { 
        $bg.addClass('book_bg');
        $bg.removeClass('comic_bg');
        $bg.removeClass('film_bg');
        $bg.removeClass('game_bg');
    });

    $comic.on('click', event => { 
        $bg.removeClass('book_bg');
        $bg.addClass('comic_bg');
        $bg.removeClass('film_bg');
        $bg.removeClass('game_bg');
    });

    $film.on('click', event => { 
        $bg.removeClass('book_bg');
        $bg.removeClass('comic_bg');
        $bg.addClass('film_bg');
        $bg.removeClass('game_bg');
    });

    $game.on('click', event => { 
        $bg.removeClass('book_bg');
        $bg.removeClass('comic_bg');
        $bg.removeClass('film_bg');
        $bg.addClass('game_bg');
    });
    

});