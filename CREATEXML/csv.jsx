function getCSV1(){
    
    writetekst('<csv>\r');


    app.findGrepPreferences = null;
    app.findGrepPreferences.findWhat = "<<[^>]+>>";

    var found = doc.findGrep();


    for (var j = 0; j <found.length; j++) {  
        var tagName = String(found[j].contents.replace(/(<<|>>)/g, ""));
        writetekst('<item name="'+ tagName + '">T</item>\r');

    }
    //
    //  find hyperlinks
    //
    for(var j = 0; j < doc.hyperlinks.length; j++) {
        var hyperlink = doc.hyperlinks[j];
        var tagName = hyperlink.source.name;
        var constructor =hyperlink.source.constructor.name;
        if (constructor == 'HyperlinkPageItemSource'){

            writetekst('<item name="'+ tagName + '">I</item>\r');

        }

    }


    writetekst('</csv>\r');

}

function getCSV(){
    writetekst('<csv>\r');
    var csvfields = doc.dataMergeProperties.dataMergeFields;
    for (var j = 0; j <csvfields.length; j++) {  
        var csvfield = csvfields[j];
        writetekst('<item name="'+ csvfield.fieldName + '">' + csvfield.fieldType + '</item>\r');

    }

    writetekst('</csv>\r');
}
