function getgradients(){
    writetekst('<gradients>\r');

      for (var j = 0; j <doc.gradients.length; j++) {  
          var gradient  = doc.gradients[j];
          writetekst('<gradient ID="'+ gradient.id+ '">\r');

          inspectObjectProps_object(gradient,'');
          for (var i = 0; i <gradient.gradientStops.length; i++) {  
              var gstop = gradient.gradientStops[i].stopColor;
              writetekst('<gradientStopColor ID="'+ gstop.id+ '">\r');

                inspectObjectProps_object(gstop,'');
               writetekst('</gradientStopColor>\r');

              
              }
          
          
           writetekst('</gradient>\r');

          }

writetekst('</gradients>\r');
}