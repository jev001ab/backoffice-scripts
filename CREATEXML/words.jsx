function getword(pi){
    
    writetekst('<Words>\r');
    
    for(var p = 0; p < pi.words.length; p++){
        var word = pi.words[p];
        var paragraphstyleid = word.appliedParagraphStyle.id;
        var charstyleid = word.appliedCharacterStyle.id;
        var strokecolorid = word.strokeColor.id;
        var fillcolorid = word.fillColor.id;
        
        writetekst('<Word index="'+word.index+ '">\r');
        
        writetekst('<contents><![CDATA['+  word.contents + ']]></contents>\r');
        writetekst('<paragraphstyleid>'+ paragraphstyleid + '</paragraphstyleid>\r');
        writetekst('<charstyleid>'+ charstyleid + '</charstyleid>\r');
        writetekst('<strokecolorid>'+ strokecolorid + '</strokecolorid>\r');
        writetekst('<fillcolorid>'+ fillcolorid + '</fillcolorid>\r');


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