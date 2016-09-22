self.addEventListener('message', function(e) {
    
  var data = e.data,
      result;
    
    if ( data.comand === "tan" && data.value == 90) {
        
        result =  `${data.comand} does not have a valure for ${data.value} deg`;
        self.postMessage(result);
        
    } else {

//    console.log(((Math[data.comand](data.value * Math.PI / 180.0) ) ).toString());
    
     result = (  (Math[data.comand](data.value * Math.PI / 180.0) ) ).toString(); 
    
       self.postMessage(result);
        
    }
    
 
}, false);




