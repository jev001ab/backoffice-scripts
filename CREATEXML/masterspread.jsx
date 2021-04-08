function getmasterspreads(){
    writetekst('<MasterSpreads>\r');

    var count_masterSpread = doc.masterSpreads.length;
    for (var j = 0; j <doc.masterSpreads.length; j++) {  
        var master = doc.masterSpreads[j]; 
        //var arr_t1 = new Array();
        var ID = master.id;
        writetekst('<master ID="'+ ID +'">\r');

        
        inspectObjectProps_object_array_notnested(master,'IDmaster');
        //
        // Comment van Martijn
        //
        zitem=0;

        var myPageItems = getPageItemsInZOrder(master); 
        writetekst('<Zitem>\r');
        
        for (var jj = 0; jj <myPageItems.length; jj++) {  
                var  aitem = myPageItems[jj];
                var ID = aitem.id;
                var INDEX = aitem.index;
            // var TEKST = ID + ',"Zitem:'+ zitem+'"\r';
                //file.write(TEKST);
                writetekst('<ID_'+ ID +'>'+ zitem + '</ID_'+ ID +'>\r');
                zitem++;
                } // end for
                writetekst('</Zitem>\r');
            //
            //
            //beep();
            for (var jj = 0; jj <  master.allPageItems.length; jj++) {
                  var pi = master.allPageItems[jj];     
                  var ID = pi.id;
                  writetekst('<item ID="'+ ID +'">\r');
                      

                  var constructor = pi.constructor.name;
                  writetekst('<Type>'+  constructor + '</Type>\r');
                   
                   if(pi instanceof TextFrame || pi instanceof TextPath){
                        IsTextFrame(pi);
                    }
                    //
                    if (pi instanceof Rectangle) {
                        IsRectangle(pi,ID);
                    } 
                    //
                     if (pi instanceof Image || pi instanceof  EPS) { 
                         IsImageEPS(pi);
                         }
                     //
                     if (pi instanceof PDF) { 
                         IsPDF(pi);
                         }
                     //
                     if (pi instanceof Group) {
                         IsGroup(pi);
                          }
                     //
                      if (pi instanceof Polygon) { 
                         IsPolygon(pi,ID);
                         }
                     //
                       if (pi instanceof Oval) { 
                         IsOval(pi,ID);
                         }
                     //
                       if (pi instanceof GraphicLine) { 
                         IsGraphicLine(pi);
                         }
                        
                         writetekst('</item>\r');
  
            
            
            
            
            
                }
                writetekst('</master>\r');
          

}
writetekst('</MasterSpreads>\r');

}