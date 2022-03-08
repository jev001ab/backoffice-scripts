function getchar(pi){

    writetekst('<Characters>\r');
    //
    //
    //
    var styleleeg_id = doc.allCharacterStyles[0].id;
    //
    for(var p = 0; p < pi.characters.length; p++){
        var character = pi.characters[p];
        //var style = character.appliedCharacterStyle;
        //var content = character.contents;
        var styleOverridden = character.styleOverridden;
        //
        // if styleoverridden (maak style) , moet nog
        //
        if (character.appliedCharacterStyle.id != styleleeg_id){
            writetekst('<Character index="'+character.index+ '">\r');
            writetekst('<CharacertStyleId>'+ character.appliedCharacterStyle.id + '</CharacertStyleId>\r');
            writetekst('</Character>\r');
        }
        //beep();
    }



    writetekst('</Characters>\r');
}

