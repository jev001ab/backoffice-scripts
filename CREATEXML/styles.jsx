function getstyles(){
    /*
    writetekst('<objectstyles>\r');
    for (var j = 0; j <doc.allObjectStyles.length; j++) {  
        var  style= doc.allObjectStyles[j];
        writetekst('<objectstyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        writetekst('</objectstyle>\r');
   
    }
    writetekst('</objectstyles>\r');
    */
    writetekst('<paragraphstyles>\r');
    for (var j = 0; j <doc.allParagraphStyles.length; j++) {  
        var  style= doc.allParagraphStyles[j];
        writetekst('<paragraphstyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        writetekst('</paragraphstyle>\r');
   
    }
    writetekst('</paragraphstyles>\r');
    writetekst('<charstyles>\r');
   for (var j = 0; j <doc.allCharacterStyles.length; j++) {  
        var  style= doc.allCharacterStyles[j];
        writetekst('<charstyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        writetekst('</charstyle>\r');
   
    }
    writetekst('</charstyles>\r');
    /*
    writetekst('<cellstyles>\r');
   for (var j = 0; j <doc.allCellStyles.length; j++) {  
        var  style= doc.allCellStyles[j];
        writetekst('<cellstyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        writetekst('</cellstyle>\r');
   
    }
    writetekst('</cellstyles>\r');
    writetekst('<tablestyles>\r');
   for (var j = 0; j <doc.allTableStyles.length; j++) {  
        var  style= doc.allTableStyles[j];
        writetekst('<tablestyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        writetekst('</tablestyle>\r');
   
    }
    writetekst('</tablestyles>\r');
    */
}

function create_paragraphstyle(word){
    var styleexist = false;
    for (var j = 0; j <doc.allParagraphStyles.length; j++) {  
        var  style= doc.allParagraphStyles[j];
        beep();
    }
}

function create_characterstyle(word){
    //
    // check of style al is aangemaakt. dan alleen verwijzen
    //




    var styleexist = false;
    for (var j = 0; j <doc.allCharacterStyles.length; j++) {  
        var  style= doc.allCharacterStyles[j];
    //    var t1 = style.appliedFont;
    //    var t0 = word.appliedFont;
    //    if (style.appliedFont == word.appliedFont){
    //        var cs = style;
    //        styleexist = true;
    //
    //    }

    }
    if (styleexist == false){
    	//
        // add style
        //
        var cs = doc.characterStyles.add();
        cs.appliedFont = word.appliedFont;
        //
        //
        //
    }

    
    

    return cs;
}