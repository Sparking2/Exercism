//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (message, key) => {
  return message.replace(/[a-zA-Z]/g, (char) => {
    const base = char >= 'a' ? 97 : 65;
    return String.fromCharCode(((char.charCodeAt(0) - base + key) % 26) + base);
  })
}

/*
// OG
export const rotate = (message, key) => {
    let result = '';
    for(let i = 0; i < message.length; i++){
        const current = message[i];
        let code = current.charCodeAt(0);
      
        // uppercase
        if(code >= 65 && code <= 90){
          code += key;
          
          if(code > 90){
              code = code - 26;
          }
          
          result += String.fromCharCode(code);
          continue;  
        } 
        
        // lowercase
        if(code >= 97 && code <= 122){
            code += key;
            
            if(code > 122){
                code = code - 26;
            }
            
            result += String.fromCharCode(code);
            continue;
        }
        
    
        result += current;
    }
    
    return result;
}
*/