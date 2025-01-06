$(document).ready(function () {

    $('#btn').click(function () {

      const komentarot = $('#comm').val().trim();

      if (komentarot !== '') {
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
    

    $('#btnn').click(function () {//funkcionalnosta e ista kako predhodno

        const vrednost = $('#com').val().trim();

        if(vrednost !== ''){
            const nov_komentar = $('<li>').text(vrednost);

            const delete_button = $('<button>').text('Избриши')

               .css('margin-left', '10px')

               .addClass('delete-btn')

               .click(function () {
                 $(nov_komentar).remove();
                });
            
            nov_komentar.append(delete_button);
            $('#comment').append(nov_komentar);

            $('#com').val('');
        }
    });


    $('#likebutton3').click(function () {
        
        let vrednost_likes = parseInt($('#likes3').text().trim());//momentalnata vrednost za lajkovite
        let vrednost_dugme = $('#likebutton3').text().trim();//vrednosta na dugmeto(koja boja e oboeno srceto)
    
        if (vrednost_dugme === '🤍') {
            vrednost_likes++; //zgolemi lajkovi ako e belo
            $('#likes3').text(vrednost_likes); 
            $('#likebutton3').text('❤️'); //Smeni ja bojata na srceto
        } else {
            vrednost_likes--; //namali lajkovi ako e crveno(vekje bilo lajknato)
            $('#likes3').text(vrednost_likes);
            $('#likebutton3').text('🤍'); //smeni ja bojata na srceto
        }
    });


    $('#likebutton4').click(function () {//funkcionalnosta na ovaa funkcija e ista kako i predhodnata, samo za dr slika
        
        let vrednost_likes = parseInt($('#likes4').text().trim());
        let vrednost_dugme = $('#likebutton4').text().trim();
    
        if (vrednost_dugme === '🤍') {
            vrednost_likes++; 
            $('#likes4').text(vrednost_likes); 
            $('#likebutton4').text('❤️'); 
        } else {
            vrednost_likes--; 
            $('#likes4').text(vrednost_likes);
            $('#likebutton4').text('🤍'); 
        }
    });
    
});

  