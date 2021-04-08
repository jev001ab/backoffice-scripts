function getfonts(){
    writetekst('<fonts>\r');
    for (var j = 0; j <doc.fonts.length; j++) {  
        var  font = doc.fonts[j];
        writetekst('<font nr="'+ j +'">\r');
        inspectObjectProps_object(font);
        writetekst('</font>\r');
    }
    writetekst('</fonts>\r');
}