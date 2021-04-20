function getcolors(){
    writetekst('<colors>\r');
    var Y = doc;
    var colorarray = ","; 
    for (var j = 0; j <doc.colors.length; j++) {  
        var  color = doc.colors[j];
        colorarray +=color.id + ','; 
        writetekst('<color id="'+ color.id +'">\r');
        writetekst('<colormodel>color</colormodel>\r');
        inspectObjectProps_object( color);
        writetekst('</color>\r');
    }
    colorarray += ","; 
    for (var j = 0; j <doc.swatches.length; j++) {  
        var  color = doc.swatches[j];
        //var t = color.id;
        var n = colorarray.search(","+color.id+",");
        if (n==-1){
            colorarray +=color.id + ','; 
            writetekst('<color id="'+ color.id +'">\r');
            writetekst('<colormodel>swatches</colormodel>\r');
            inspectObjectProps_object( color);
            writetekst('</color>\r');
        }

    }
    colorarray += ","; 
    for (var j = 0; j <doc.colorGroups.length; j++) {  
        var  color = doc.colorGroups[j];
        var n = colorarray.search(","+color.id+",");
        if (n==-1){
            colorarray +=color.id + ','; 
            writetekst('<color id="'+ color.id +'">\r');
            writetekst('<colormodel>colorGroup</colormodel>\r');
            inspectObjectProps_object( color);
            writetekst('</color>\r');
        }
    }

    writetekst('</colors>\r');
}