function getproperty(property){
    //
    // ignore keys (crashed soms)
    //
    var ignore = {designAxes: true,properties: true};
    //
    var key2;
    var item1 = '' + property;
    var n1 = item1.indexOf('[object');
    if (n1==0){
        for(key2 in property){
            if (!ignore[key2]) {
                var item = '' + property[key2];
                var n = item.indexOf('[object');
                if (n!==-1){
                    try {   
                        var objID = property[key2].id;
                        writetekst('<'+ key2 +'_id>'+  objID+ '</'+ key2 + '_id>\r');
                        writetekst('<'+ key2 +'_object>'+  property[key2]+ '</'+ key2 + '_object>\r');
        
                    
                        } catch (e) {

                        }
                } else {
                    try {
                    writetekst('<'+ key2 +'>'+  property[key2]+ '</'+ key2 + '>\r');
                    } catch (e) {

                    }
                }

            }
            
        }
    }

}

