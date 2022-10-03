function getfonts(){
    fontstatus=0;
    writetekst('<fonts>\r');
    
    var s=[];
    //var f = doc.fonts.everyItem().getElements();
    var f = app.documents[0].fonts.everyItem().getElements();
    for (var i = 0; i < f.length; i++) {
        try {
            s.push (f[i].name + '\t' + String (f[i].fontType) + typekit (f[i]) + '\t' + String (f[i].status));
        } catch (_) {
            s.push (f[i].name + '\t' + '———————' + '\t' + String (f[i].status));
        }
    }
    for (i = 0; i < s.length; i++){
        var parts = s[i].split('\t');
        if (parts[3]!="INSTALLED"){
            var fontname = parts[0]  + '\t' + parts[1];
            
            var a = getObject(app.fonts.item(fontname).properties);
            writetekst('<font nr="'+ i +'">\r');
            for (var j = 0; j <a.length; j++) {  
                var b1 = a[j].key;
                var b2 = a[j].value;
                writetekst('<'+ a[j].key +'>'+  a[j].value+ '</'+ a[j].key + '>\r');
            }
            
            writetekst('</font>\r');
        } else{
            
            //var a = f[i];
            writetekst('<font nr="'+ i +'">\r');
            inspectObjectProps_object(f[i]);
            writetekst('</font>\r');
            if (f[i].status != "1718831470"){
                fontstatus++;
                app.label = "80";
                app.label.properties = "80";
            }
        }


    }
    /*
    for (var j = 0; j <doc.fonts.length; j++) {  
        
       
        
        writetekst('<font nr="'+ j +'">\r');
        inspectObjectProps_object(font);
        writetekst('</font>\r');
        if (font.status != "1718831470"){
            fontstatus++;
            app.label = "80";
            app.label.properties = "80";
        }
    }

    if (fontstatus!=0){
         writetekst('<fonterror>'+ fontstatus +'</fonterror>\r');
    }
        */
    writetekst('</fonts>\r');

    return fontstatus;
}

function getfonts1(){
    fontstatus=0;
    writetekst('<fonts>\r');
    for (var j = 0; j <doc.fonts.length; j++) {  
        var  font = doc.fonts[j];
        writetekst('<font nr="'+ j +'">\r');
        inspectObjectProps_object(font);
        writetekst('</font>\r');
        if (font.status != "1718831470"){
            fontstatus++;
            app.label = "80";
            app.label.properties = "80";
        }
    }
    if (fontstatus!=0){
         writetekst('<fonterror>'+ fontstatus +'</fonterror>\r');
    }
    writetekst('</fonts>\r');
    return fontstatus;
}