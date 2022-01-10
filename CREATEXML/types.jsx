function IsGraphicLine(pi){
    var constructor = pi.constructor.name;
    inspectObjectProps_object_array_notnested(pi,'IDroot');
    inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
    inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
    //       writetekst(ID + ',' + '"' + pi.itemLayer.name +'","undefined","G",'+constructor+ '\r';
    //       file.write(TEKST);
    writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
    
    writetekst('<LayerType>G</LayerType>\r');
    
    writetekst('<Constructor>'+ constructor + '</Constructor>\r') ;
    
    // points
    //
    getpaths(pi.paths);
    
}
function IsOval(pi,ID){
    var constructor = pi.constructor.name;
    objExpOptions = pi.objectExportOptions;  
    objExpOptions.altTextSourceType = SourceType.SOURCE_CUSTOM;  
    objExpOptions.customAltText = "[" +ID + "]";  
     //beep();
     inspectObjectProps_object_array_notnested(pi,'IDroot');
     inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
     //inspectObjectProps_object_array_notnested(pi.itemLink,'itemLink_',file);
     inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
     inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
     inspectObjectProps_object_array_notnested(pi.parent,'parent_');
     inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
      inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
      writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
      
      writetekst('<Constructor>'+ constructor + '</Constructor>\r');
      
      // points
      //
      getpaths(pi.paths);
    
    }
function IsPolygon(pi,ID){
    var constructor = pi.constructor.name;
    objExpOptions = pi.objectExportOptions;  
    objExpOptions.altTextSourceType = SourceType.SOURCE_CUSTOM;  
    objExpOptions.customAltText = "[" +ID + "]";  
     //beep();
     inspectObjectProps_object_array_notnested(pi,'IDroot');
     inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
     //inspectObjectProps_object_array_notnested(pi.itemLink,'itemLink_',file);
     inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
     inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
     inspectObjectProps_object_array_notnested(pi.parent,'parent_');
     inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
      inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
      writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
                  
      writetekst('<Constructor>'+ constructor + '</Constructor>\r');
      
      //
      // points
      //
      getpaths(pi.paths);
    
    }
function IsGroup(pi){
    var ag = pi.allGraphics[0];

    //        beep();
    inspectObjectProps_object_array_notnested(pi,'IDroot');
    inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
    //inspectObjectProps_object_array_notnested(ag,'allGraphics_',file);
    //inspectObjectProps_object_array_notnested(ag.itemLink,'allGraphics_itemLink_',file);
    inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    //           inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    //             inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
    }

function IsPDF(pi){
    //beep();
    var constructor = pi.constructor.name;
    inspectObjectProps_object_array_notnested(pi,'IDroot');
    inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
    inspectObjectProps_object_array_notnested(pi.itemLink,'itemLink_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
    inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    //         inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    //          inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
    //       writetekst(ID + ',' + '"' + pi.itemLayer.name +'","undefined","G",'+constructor+ '\r';
    //      file.write(TEKST);
    writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
    
    writetekst('<LayerType>G</LayerType>\r');
    
    writetekst('<Constructor>'+ constructor + '</Constructor>\r');
    
    
    
    }
function IsImageEPS(pi){
    //beep();
    var constructor = pi.constructor.name;
     inspectObjectProps_object_array_notnested(pi,'IDroot');
     inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
     inspectObjectProps_object_array_notnested(pi.itemLink,'itemLink_');
     inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
      inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    //           inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    //           inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
    //          writetekst(ID + ',' + '"' + pi.itemLayer.name +'","undefined","G",'+constructor+ '\r';
    //         file.write(TEKST);
      writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
      
      writetekst('<LayerType>G</LayerType>\r');
      
      writetekst('<Constructor>'+ constructor + '</Constructor>\r');
      
    
    
    }
function IsRectangle(pi,ID){
    var constructor = pi.constructor.name;
    objExpOptions = pi.objectExportOptions;  
    objExpOptions.altTextSourceType = SourceType.SOURCE_CUSTOM;  
    objExpOptions.customAltText = "[" +ID + "]";  
    inspectObjectProps_object_array_notnested(pi,'IDroot');
    inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
    inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');
      inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
      //
      //
      //
      inspectObjectProps_object_array_notnested(pi.appliedObjectStyle,'appliedObjectStyle_');
        // points
      //
      getpaths(pi.paths);
      //
     if  (pi.graphics.length >0) 
            {
                
               // beep();
       //         writetekst(ID + ',' + '"' + pi.itemLayer.name +'","undefined","G",'+constructor+ '\r';
       //         file.write(TEKST);
                 writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
                  
                  writetekst('<LayerType>G</LayerType>\r');
                  
                  writetekst('<Constructor>'+ constructor + '</Constructor>\r');
                  
               
    //                                 inspectObjectProps_object_array_notnested(pi.graphics[0].itemLink,'itemLink_');
    } else {
           //     writetekst(ID + ',' + '"' + pi.itemLayer.name +'","undefined","K",'+constructor+ '\r';
           //     file.write(TEKST);
                 writetekst('<Layer>'+ pi.itemLayer.name + '</Layer>\r');
                  
                  writetekst('<LayerType>K</LayerType>\r');
                  
                  writetekst('<Constructor>'+ constructor + '</Constructor>\r');
                  
                    
    } // end if
    
    
    }
function IsTextFrame(pi){
    var constructor = pi.constructor.name;
    writetekst('<Layer>'+ pi.itemLayer.name.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;")  + '</Layer>\r');
    
    writetekst('<LayerType>T</LayerType>\r');
    
   // var constructor = pi.constructor.name;
   // writetekst('<Constructor>'+ constructor + '</Constructor>\r';
   // 

    inspectObjectProps_object_array_notnested(pi,'IDroot');
    inspectObjectProps_object_array_notnested(pi.itemLayer,'itemLayer_');
    //inspectObjectProps_object_array_notnested(pi.parentStory.appliedFont,'parentStory.appliedFont_');
    //inspectObjectProps_object_array_notnested(pi.parentStory.fillColor,'storyfillcolor_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.blendingSettings,'transparencySettings_blendingSettings_');
    inspectObjectProps_object_array_notnested(pi.transparencySettings.gradientFeatherSettings,'transparencySettings_gradientFeatherSettings_');

    inspectObjectProps_object_array_notnested(pi.textFramePreferences,'textFramePreferences_');
    //inspectObjectProps_object_array_notnested(pi.parent,'parent_');
    //inspectObjectProps_object_array_notnested(pi.fillColor,'fillColor_');
    //inspectObjectProps_object_array_notnested(pi.strokeColor,'strokeColor_');
    //
    //
    //
    //inspectObjectProps_object_array_notnested(pi.appliedObjectStyle,'appliedObjectStyle_');

    //
    // points
    //
    getpaths(pi.paths);
    //
    // paragraph
    //
    writetekst('<Paragraphs>\r');
    
    for (var u=0; u< pi.paragraphs.length; u++){
      var paragraph = pi.paragraphs[u];
      //var ps = create_paragraphstyle(paragraph);
      //paragraph.appliedParagraphStyle = ps.name;
      writetekst('<Paragraph indexnr="'+ u +'">\r' );  //'</ParagraphstyleID>\r'
      writetekst('<ParagraphstyleID>'+ paragraph.appliedParagraphStyle.id + '</ParagraphstyleID>\r');
      //inspectObjectProps_object_array_notnested(paragraph,'paragraph_');
    //  inspectObjectProps_object( paragraph);
    //  inspectObjectProps_object_array_notnested(paragraph.appliedFont,'paragraph.appliedFont');
      getword(paragraph);
      //
      // characters
      //
      getchar(paragraph);

      writetekst('</Paragraph>\r' ); 
    }
    writetekst('</Paragraphs>\r');
    //

    


    //
    //
    //
    //
    //getword(pi);
    /*
    writetekst('<Paragraphs>\r');
    
    for (var u=0; u< pi.parentStory.paragraphs.length; u++){
    var paragraph = pi.parentStory.paragraphs[u];
 
       writetekst('<Paragraph index="'+u + '">\r');
       

      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u],'IDroot');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].fillColor,'fillColor');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].underlineColor,'underlineColor');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedFont,'appliedFont');
      // ParagraphStyle
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedParagraphStyle,'ParagraphStyle');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedParagraphStyle.appliedFont,'ParagraphStyle_appliedFont'); 

  
  
  
      //
        // words in paragraph
        //
       getword(paragraph);

         
         //
         // oude manier paragraph
         //
         
        
       writetekst('</Paragraph>\r');
        */
/*
         inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u],'parentStoryP'+u+'_');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].fillColor,'parentStoryP'+u+'_fillColor_');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].underlineColor,'parentStoryP'+u+'_underlineColor_');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedFont,'parentStoryP'+u+'_appliedFont_');
      // ParagraphStyle
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedParagraphStyle,'parentStoryP'+u+'_ParagraphStyle_');
      inspectObjectProps_object_array_notnested(pi.parentStory.paragraphs[u].appliedParagraphStyle.appliedFont,'parentStoryP'+u+'_ParagraphStyle_appliedFont_');        
       */                     
    //
    /* } // end for
    writetekst('</Paragraphs>\r');
    
      */
    
    
    }