function getSpreads(){
    writetekst('<spreads>\r');

var paginanummer=0;
for (var ii= 0; ii <doc.spreads.length; ii++) {  
    var sp = doc.spreads[ii];
    var ID = sp.id;
    writetekst('<spread ID="'+ ID +'">\r');
 
    writetekst('<pages>\r');


    for (var ip= 0; ip <sp.pages.length; ip++) {
        var page = sp.pages[ip];
        var   allpageitems = page.allPageItems;
        var arr_t1 = new Array()
        var file = "";
        writetekst('<page pagina="'+paginanummer+'">\r');

        paginanummer++;
        
        try {
             var MasterSpreadId = page.appliedMaster.id;
             writetekst('<FromMaster ID="'+MasterSpreadId+'"/>\r');

        } catch (e) {
             writetekst('<FromMaster ID="0"/>\r');

        }
           
        //
        //
        //
        zitem=0;
        var arr_items = new Array();
        var myPageItems = getPageItemsInZOrder(page); 
        writetekst('<Zitem>\r');

        for (var j = 0; j <myPageItems.length; j++) {  
             var  aitem = myPageItems[j];
             var ID = aitem.id;
             var INDEX = aitem.index;
          //   writetekst(ID + ',"Zitem:'+ zitem+'"\r';
          //   file.write(TEKST);
             writetekst('<ID_'+ ID +'>'+ zitem + '</ID_'+ ID +'>\r');

             zitem++;
             } // end for
        writetekst('</Zitem>\r');

        //
        //
        //
        writetekst('<AllPageItemsView>\r');

         for (var jj = 0; jj < allpageitems.length; jj++) {
             var pi = allpageitems[jj];
             var ID = pi.id;
             writetekst('<item ID="'+ ID +'">\r');
 
             var pip = pi.properties;
             var constructor = pi.constructor.name;
             writetekst('<Type>'+  constructor + '</Type>\r');
                 
              //
              //   DEBUG
              //
               if (ID == 15932){  // only for debug
                //beep();
               // inspectObjectProps_object_array_notnested(ID,arr_t1 ,pi.textFramePreferences,'textFramePreferences_',file);
                }
              //
              //
              //
              if(pi instanceof TextFrame || pi instanceof TextPath){
                IsTextFrame(pi,ID);
            }
            //
            if (pi instanceof Rectangle) {
                IsRectangle(pi,ID);
            } 
            //
             if (pi instanceof Image || pi instanceof  EPS) { 
                 IsImageEPS(pi,ID);
                 }
             //
             if (pi instanceof PDF) { 
                 IsPDF(pi,ID);
                 }
             //
             if (pi instanceof Group) {
                 IsGroup(pi,ID);
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
                 IsGraphicLine(pi,ID);
                 }
             
             
              writetekst('</item>\r');
              

             
             }  // end pageitems
             writetekst('</AllPageItemsView>\r');
            
            writetekst('</page>\r');
        
              
              
              
              
              
              


              }
         writetekst('</pages>\r');
 
      writetekst('</spread>\r');

    //beep();
    }
writetekst('</spreads>\r');

}