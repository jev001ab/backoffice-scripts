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
        inspectObjectProps_object_array_notnested(style.appliedFont,'style.appliedFont_');
        writetekst('</paragraphstyle>\r');
   
    }
    writetekst('</paragraphstyles>\r');
    writetekst('<charstyles>\r');
   for (var j = 0; j <doc.allCharacterStyles.length; j++) {  
        var  style= doc.allCharacterStyles[j];
        writetekst('<charstyle nr="'+ j +'">\r');
        inspectObjectProps_object( style);
        //inspectObjectProps_object_array_notnested(style.appliedFont,'style.appliedFont_');
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

function create_paragraphstyle(ps){
    var styleexist = false;
    /*for (var j = 0; j <doc.allParagraphStyles.length; j++) {  
        var  style= doc.allParagraphStyles[j];
        //beep();
    }
    */
    if (styleexist == false){
        var nps = doc.paragraphStyles.add();
        for(var key2 in nps.properties){
            try{
                nps[key2] = ps[key2];
            } catch (e) {
                // beep();
            }
            
        }
    }
    return nps;
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
        /*
        cs.appliedFont = word.appliedFont;
        cs.strokeColor = word.strokeColor;
        cs.underlineColor = word.underlineColor;
        cs.underlineGapColor = word.underlineGapColor;
        cs.underlineType = word.underlineType;
        cs.strikeThroughColor = word.strikeThroughColor;
        cs.strikeThroughGapColor = word.strikeThroughGapColor;
        cs.strikeThroughType = word.strikeThroughType;
        cs.fillColor = word.fillColor;
        cs.appliedLanguage = word.appliedLanguage;
        cs.kentenFillColor = word.kentenFillColor;
        cs.kentenStrokeColor = word.kentenStrokeColor;
        cs.kentenFont = word.kentenFont;
        cs.rubyFill = word.rubyFill;
        cs.rubyStroke = word.rubyStroke;
        cs.rubyFont = word.rubyFont;
        cs.pointSize = word.pointSize;
        cs.leading = word.leading;
        cs.baselineShift = word.baselineShift;
        cs.capitalization = word.capitalization;
        cs.characterAlignment = word.characterAlignment;
        */
        for(var key2 in cs.properties){
            try{
                cs[key2] = word[key2];
            } catch (e) {
                // beep();
            }
            
        }
            



       
        //beep();
        //
        //
        //
    }

    
    

    return cs;
}