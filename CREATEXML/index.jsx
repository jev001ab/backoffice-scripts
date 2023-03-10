// @target InDesign
var version = "4.0.1";

//@include "default.jsx";
//@include "writetekst.jsx";
//@include "fonts.jsx";
//@include "getobjects.jsx";
//@include "colors.jsx";
//@include "pref.jsx";
//@include "masterspread.jsx";
//@include "types.jsx";
//@include "paths.jsx";
//@include "words.jsx";
//@include "csv.jsx";
//@include "gradients.jsx";
//@include "spreads.jsx";
//@include "styles.jsx";
//@include "characters.jsx";
//@include "getproperty.jsx";
//@include "metadata.jsx";

var doc = app.activeDocument;
var path = 'c:/temp/';


var textFrame, recrangle, objExpOptions, 
    doc = app.activeDocument,  
    pages = doc.pages;
var DEF_Width =doc.documentPreferences.pageWidth;      
var DEF_Height=doc.documentPreferences.pageHeight;  
var DEF_MeasurementsUnits = doc.viewPreferences.horizontalMeasurementUnits ;
//
//
// dummy noodzakelijk om utf8 af te dwingen .
//
var dummy_utf8 = "Du ser mig kun for det tøj jeg har på";
//
// change export to RGB (where possible)
//   
doc.documentPreferences.intent=DocumentIntentOptions.WEB_INTENT;
doc.colors.everyItem().properties = {space:ColorSpace.RGB};
doc.viewPreferences.horizontalMeasurementUnits = doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.PIXELS; 
var _Width =doc.documentPreferences.pageWidth;      
var _Height=doc.documentPreferences.pageHeight;  
 //
 //
 //
 app.label = "0";
 app.label.properties = "0";
 //
 //
 //
var filenamexml = 'export2html.xml';
var filexml = new File(path + filenamexml);  
filexml.encoding = 'UTF-8';
filexml.open('w');
//
// creaste xml
//
writetekst('<?xml version="1.0" encoding="UTF-8"?>\r');
writetekst('<export2html>\r');
writetekst('<versionxml>'+ version +'</versionxml>\r');
//
//
//
setmetadata();
getmetadata();
//
// plaats defaultvalues in XML
//
defaultxml();
//
fontstatus = getfonts();
//
getcolors();
//
getpref();
//

if (fontstatus==0){
    //
    getgradients();
    //
    getCSV();
    //
    getmasterspreads();
    //
    getSpreads();
    //
    getstyles();
    //
}



writetekst('</export2html>\r');
filexml.close();


//
// save document
//
//doc.save();  // niet save (niet altijd zeker of naam bekend is geeft foutmelding bij oplsaan document)
