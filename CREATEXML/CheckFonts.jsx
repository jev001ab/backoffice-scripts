// @target InDesign

app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;

var doc = app.activeDocument;
Missing_Font();
function Missing_Font()
{
    var missingfont=0;
    var errorfont="";
    var myUsedFonts = doc.fonts;
    for (var i = 0; i < myUsedFonts.length; i++) {
    if (myUsedFonts[i].status != "1718831470")
    {
        errorfont += myUsedFonts[i].postscriptName + ", ";
        missingfont++;
        }
    }
    if (missingfont==0){
        alert("Fonts OK" ); 
       }
    if (missingfont !=0 ){
        alert("Please Fix Missing Font, " + errorfont )

    }

}
