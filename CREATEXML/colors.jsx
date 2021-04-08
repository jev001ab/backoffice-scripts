function getcolors(){
    writetekst('<colors>\r');
    for (var j = 0; j <doc.colors.length; j++) {  
        var  color = doc.colors[j];
        writetekst('<color nr="'+ j +'">\r');
        inspectObjectProps_object( color);
        writetekst('</color>\r');
    }
    writetekst('</colors>\r');
}