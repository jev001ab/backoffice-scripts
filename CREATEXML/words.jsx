function getword(pi){
    //
    /*
    var t = pi.texts[0];
    var enters = new Array()
    for(var p = 0; p < pi.characters.length; p++){
      var character = pi.characters[p];
      var content = character.contents;
      var index = character.index;
      

      beep();
    }
    */
    writetekst('<Words>\r');
    
    for(var p = 0; p < pi.words.length; p++){
        var word = pi.words[p];
        //var paragraphstyleid = word.appliedParagraphStyle.id;
        var charstyleid = word.appliedCharacterStyle.id;
        //var strokecolorid = word.strokeColor.id;
        //var fillcolorid = word.fillColor.id; 
        var styleOverridden = word.styleOverridden;
        var charstyleused=0;
        var styleuniqueID = word.appliedCharacterStyle.styleUniqueId;
        if (styleuniqueID != "") {
          charstyleused=1;
        }
        if (styleOverridden == true){
            //
            //
            //
            //create_paragraphstyle(word);
            //
            //
            //
            cs = create_characterstyle(word);
            //

            // koppel style aan woord;
            //
            word.appliedCharacterStyle = cs.name;
            //
            // ophalen laatste informatie over betreffend woord
            //
           // var paragraphstyleid = word.appliedParagraphStyle.id;
            var charstyleid = word.appliedCharacterStyle.id;
           // var strokecolorid = word.strokeColor.id;
           // var fillcolorid = word.fillColor.id; 
           charstyleused=1;
        }
         
        writetekst('<Word index="'+word.index+ '">\r');
        
        writetekst('<contents><![CDATA['+  word.contents.replace(/[\x07]/g, "") + ']]></contents>\r'); //  word.contents.replace(/[^\x00-\x1F]/g, "") ^ betekend NOT
       // writetekst('<paragraphstyleid>'+ paragraphstyleid + '</paragraphstyleid>\r');
        writetekst('<charstyleused>'+ charstyleused + '</charstyleused>\r');
        writetekst('<charstyleid>'+ charstyleid + '</charstyleid>\r');
       // writetekst('<strokecolorid>'+ strokecolorid + '</strokecolorid>\r');
      //  writetekst('<fillcolorid>'+ fillcolorid + '</fillcolorid>\r');

        writetekst('<styleOverridden>'+  word.styleOverridden + '</styleOverridden>\r');
        
        // if (   word.styleOverridden == true){
        // inspectObjectProps_object_array_notnested(word,'IDroot');
                             
         //inspectObjectProps_object_array_notnested(word.parentStory.appliedFont,'parentStory.appliedFont_');

        // inspectObjectProps_object_array_notnested(word.parentStory.fillColor,'storyfillcolor_');
        
         // inspectObjectProps_object_array_notnested(word.fillColor,'fillColor_');
        //  inspectObjectProps_object_array_notnested(word.strokeColor,'strokeColor_');
        //  }
          writetekst('</Word>\r');
            
    }
    writetekst('</Words>\r');
    
    
    
}