window.cipher = {
  encode: (str, offset) => {

    let caesarShift;
    let ascii;
    let result = "";
    let code1;

    if (offset < 0)
      return caesarShift(str, offset + 26);

    for (let i = 0; i < str.length; i ++) {


            // Aplica fórmula ascii
            let charAscii = str.charCodeAt(i);
            

            // Uppercase letters
            if ((charAscii >= 65) && (charAscii <= 90)){
              ascii = ((charAscii - 65 + offset) % 26 + 65);
              code1 = String.fromCharCode(ascii);}
              
            // Lowercase letters
            if ((charAscii >= 97) && (charAscii <= 122)){
              ascii = ((charAscii - 97 + offset) % 26 + 97);
              code1 = String.fromCharCode(ascii);}

               // Numbers (0-9)
               if ((charAscii >= 48) && (charAscii <= 57)) {
                ascii = ((charAscii - 48 + offset) % 10 + 48);
                code1 = String.fromCharCode(ascii);}

                  // Special Characters
                  if ((charAscii >= 32) && (charAscii <= 47)) {
                    ascii = ((charAscii - 32 + offset) % 16 + 32);
                    code1 = String.fromCharCode(ascii);}
                    
                    if ((charAscii >= 58) && (charAscii <= 64)) {
                      ascii = ((charAscii - 58 + offset) % 7 + 58);
                      code1 = String.fromCharCode(ascii);}

                      if ((charAscii >= 91) && (charAscii <= 96)) {
                        ascii = ((charAscii - 91 + offset) % 7 + 91);
                        code1 = String.fromCharCode(ascii);}

                        if ((charAscii >= 123) && (charAscii <= 126)) {
                          ascii = ((charAscii - 123 + offset) % 4 + 123);
                          code1 = String.fromCharCode(ascii);}


                          result += code1;
                        }
                        return result;
                      },

                      decode: (str, offset) => {

                        let caesarShift2
                        let ascii2;
                        let result2 = "";
                        let code2;

                        if (offset < 0)
                          return caesarShift2(str, offset + 26);

                        for (let i = 0; i < str.length; i ++) {

            // Aplica fórmula ascii
            let charAscii2 = str.charCodeAt(i);

            
           // Uppercase letters
           if ((charAscii2 >= 65) && (charAscii2 <= 90)){
            ascii2=((charAscii2 - 90 - offset) % 26 + 90);
            code2=String.fromCharCode(ascii2);}

// Lowercase letters
if ((charAscii2 >= 97) && (charAscii2 <= 122)){
  ascii2=((charAscii2 - 122 - offset) % 26 + 122);
  code2=String.fromCharCode(ascii2);}

// Numbers (0-9)
if ((charAscii2 >= 48) && (charAscii2 <= 57)) {
  ascii2 = ((charAscii2 - 57 - offset) % 10 + 57);
  code2 = String.fromCharCode(ascii2);}

// Special Characters
if ((charAscii2 >= 32) && (charAscii2 <= 47)) {
  ascii2 = ((charAscii2 - 47 - offset) % 16 + 47);
  code2 = String.fromCharCode(ascii2);}

  if ((charAscii2 >= 58) && (charAscii2 <= 64)) {
    ascii2 = ((charAscii2 - 64 - offset) % 7 + 64);
    code2 = String.fromCharCode(ascii2);}

    if ((charAscii2 >= 91) && (charAscii2 <= 96)) {
      ascii2 = ((charAscii2 - 96 - offset) % 7 + 96);
      code2 = String.fromCharCode(ascii2);}

      if ((charAscii2 >= 123) && (charAscii2 <= 126)) {
        ascii2 = ((charAscii2 - 126 - offset) % 4 + 126);
        code2 = String.fromCharCode(ascii2);}


        result2 += code2;
      }
      return result2;
    }
  };