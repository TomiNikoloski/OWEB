$(document).ready(function () {

    $('#btn').click(function () {

      const komentarot = $('#comm').val().trim();

      if (komentarot != '') {
        const new_comment = $('<li>').text(komentarot);//kreirame nov li so vrednost: komentarot

        const deleteButton = $('<button>').text('Избриши')//kreirame deleteButton so sodrzina: izbrisi

          .addClass('delete-btn')//dodavame css klasa za stiliciranje na dugmeto

          .click(function () {//pri klik na dugmeto se brisi komentarot
            $(new_comment).remove();
          });

        new_comment.append(deleteButton);//go dodavame dugmeto na komentarot
        $('#comment-container').append(new_comment);//go dodavame komentarot vo div elementot so id=comment-container

        $('#comm').val('');
      }
    });


    $('#likebutton1').click(function () {
        
        let vrednost_likes = parseInt($('#likes1').text().trim());//momentalnata vrednost za lajkovite
        let vrednost_dugme = $('#likebutton1').text().trim();//vrednosta na dugmeto(koja boja e oboeno srceto)
    
        if (vrednost_dugme === '🤍') {
            vrednost_likes++; //zgolemi lajkovi ako e belo
            $('#likes1').text(vrednost_likes); 
            $('#likebutton1').text('❤️'); //Smeni ja bojata na srceto
        } else {
            vrednost_likes--; //namali lajkovi ako e crveno(vekje bilo lajknato)
            $('#likes1').text(vrednost_likes);
            $('#likebutton1').text('🤍'); //smeni ja bojata na srceto
        }
    });


    $('#likebutton2').click(function () {//funkcionalnosta na ovaa funkcija e ista kako i predhodnata, samo za dr slika
        
        let vrednost_likes = parseInt($('#likes2').text().trim());
        let vrednost_dugme = $('#likebutton2').text().trim();
    
        if (vrednost_dugme === '🤍') {
            vrednost_likes++; 
            $('#likes2').text(vrednost_likes); 
            $('#likebutton2').text('❤️'); 
        } else {
            vrednost_likes--; 
            $('#likes2').text(vrednost_likes);
            $('#likebutton2').text('🤍'); 
        }
    });
    
});

  