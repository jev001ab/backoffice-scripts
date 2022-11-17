function getmetadata(){
    writetekst('<metadata>\r');

        inspectObjectProps_object( doc.metadataPreferences);


    

    writetekst('</metadata>\r');


}

function setmetadata(){
    var meta = doc.metadataPreferences;
    meta.jobName = "Smart Content Creater Template";
    meta.keywords = [app.version];
}