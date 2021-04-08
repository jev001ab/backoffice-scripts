function getpref(){
    var  pref =doc.viewPreferences;
    writetekst('<pref>\r');
    inspectObjectProps_object( pref);
    writetekst('<pref_Width>'+  _Width + '</pref_Width>\r');
    writetekst('<pref_Height>'+ _Height+ '</pref_Height>\r');
    writetekst('<countpages>'+ pages.length + '</countpages>\r');
    writetekst('</pref>\r');

}