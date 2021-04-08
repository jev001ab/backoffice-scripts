function getpaths(paths){
    for(var p = 0; p < paths.length; p++){
       var path = paths[p];
       inspectObjectProps_object_array_notnested(path,'path');
 /*      var TEKST = '<pathPoints>\r';
       filexml.write(TEKST);
        for(var pp = 0; pp< path.pathPoints.length; pp++){
            var points = path.pathPoints[pp];
            inspectObjectProps_object_array_notnested(points,'points');
           }
       var TEKST = '</pathPoints>\r';

    filexml.write(TEKST);
*/
   }
}