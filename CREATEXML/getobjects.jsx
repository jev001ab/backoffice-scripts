function getPageItemsInZOrder(container){  
    var objs = [], i;  
    var pis = container.pageItems.everyItem().getElements();  
    var indexes = container.pageItems.everyItem().index;  
    for(i=0;i<pis.length;i++){  
        objs.push({  
            obj:pis[i],  
            index:indexes[i]  
        })  
    }  
    objs.sort(sortByIndex);  
  
    var retVal = [];  
    for(i=0;i<objs.length;i++){  
        retVal.push(objs[i].obj);  
    }  
    return retVal;  
    function sortByIndex(a,b){  
        return a.index-b.index;  
    }  
}  
//
//
//
function unicodeEscape(str) {
    for (var result = '', index = 0, charCode; !isNaN(charCode = str.charCodeAt(index++));) {
     var C =   charCode;
     
     var CC=0;
     if (C < 10) {
         CC=1;
         }
     if (C > 159 ) { //&& C < 256
         CC=1;
         }
      //if (C > 337 ) {
      //   CC=1;
     //    }
  
      if (CC==1 && C != 32) {
          result += '\\u' + ('0000' + charCode.toString(16)).slice(-4);
          } 
      else 
      {
               result += String.fromCharCode(charCode);
              }
     
     
    }
    return result;
  }
//
//
//
function inspectObjectProps_object(obj){
    for(var key2 in obj.properties){
        writetekst('<'+ key2 +'>'+  obj[key2]+ '</'+ key2 + '>\r');
    }    
}
//
//
//
function inspectObjectProps_object_array_notnested(obj,txt){
    writetekst('<'+ txt +'>\r');
    if (obj !== null && obj !== undefined && typeof(obj) !== "string") {
        for(var key2 in obj.properties){
            var item = '' + obj[key2];
            var n = item.indexOf('[object');
            if (n==-1){
                try {   
                var tt = unicodeEscape(item);
                writetekst('<'+ key2 +'>'+tt.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</'+ key2 + '>\r');
                    } catch (e) {
                        // beep();
                    }
                }
    
        
        }
    //
    } // end (obj !== null && obj !== undefined)
    writetekst('</'+ txt +'>\r');
}