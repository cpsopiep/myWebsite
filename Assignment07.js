 /*
    91.461 Assignment No. 7: Using the jQuery Validation Plugin with Your Dynamic Table
    By Charlie Sopiep, Umass Lowell Computer Science Student
    Contact me at csopiep@gmail.com
    Created on 11/01/15
    Same thing as Assignment06 except I used JQuery to validate the form.
    Most of the problems I had in Assignment06 are fixed, which is nice.
*/
        /* Sets the rule required for validation. 
         * Checks for: Starting Value is higher than the Last Value for both
         *             Multiplier and Multiplicand.
         *             The form is not empty.
         *             The form has a valid positive Integer.
         *             The form has a number within range of 0 to 50
         *             
         *             Note that each validation error points out the where the
         *             user messed up in validation. No red box to highlight it 
         *             yet.
         */
        $(document).ready( function() {
             $.validator.addMethod("OneGreaterThanOther", function(value, element) {
                 var number1 = parseInt($('#Multiplier1').val());
                 var number2 = parseInt($('#Multiplier2').val());

                 if (number1 > number2 ){
                     return false;
                 } else{
                     return true;
                 }
             }, "Multiplier's Starting Value cannot be higher then the Multiplier's Last Value" );
             $.validator.addMethod("OneGreater", function(value, element) {
                 var number3 = parseInt($('#Multiplicand3').val());
                 var number4 = parseInt($('#Multiplicand4').val());
                 if (number3 > number4){
                     return false;
                 } else{
                     return true;
                 }
             }, "Multiplicand's Starting Value cannot be higher then the Multiplicand's Last Value" );
         $('#Assn7-frm01').validate( {
        rules : {
          Multiplier1 : {
            required: true,
            digits: true,
            OneGreaterThanOther:true,
            range:[0,50]
     },
          Multiplier2 : {
            required: true,
            digits: true,
            range:[0,50]
          },
          Multiplicand3 : {
            required: true,
             digits: true,
            OneGreater:true,
            range:[0,50]
          },
          Multiplicand4 : {
            required: true,
             digits: true,
             range:[0,50]
          }
         },
         messages : {
            Multiplier1 : {
            digits: "Enter a positive Integer (0 to 50) for the Multiplier's Starting Value",
            range: "Only numbers in the range of 0 to 50 will be accepted for the Multiplier's Starting Value"
             },
            Multiplier2 : {
            digits: "Enter a positive Integer (0 to 50) for the Multiplier's Last Value",
            range: "Only numbers in the range of 0 to 50 will be accepted for the Multiplier's Last Value"
            },
            Multiplicand3 : {
            digits: "Enter a positive Integer (0 to 50) for the Multiplicand's Starting Value",
            range: "Only numbers in the range of 0 to 50 will be accepted for the Multiplicand's Starting Value"
            },
            Multiplicand4 : {
            digits: "Enter a positive Integer (0 to 50) for the Multiplicand's Last Value",
            range: "Only numbers in the range of 0 to 50 will be accepted for the Multiplicand's Last Value"
            }
         }
     });
     /*  This is where the validation happens. Each time the user stops typing,
      *  the form is validated. If the form is invalid then the button gets
      *  blurred out making it unclickable, though its still visible. Once
      *  the form is valid then the button shows itself enabling you to create
      *  the multiplication table.
      */
      $('#Assn7-frm01 input').on('keyup blur', function () {
        if ($('#Assn7-frm01').valid()) {
            $('#Assn7-btn01').prop('disabled', false);
        } else {
            $('#Assn7-btn01').prop('disabled', 'disabled');
        } 
    }); 
     });
        
         
         
          /* Removed the if statement from Assignment06 and replaced it with the
           * JQuery validation above. Everything else is still the same,
           * no more disruptive alerts. */
         function MakeTable(){ 
             
          /* Might be redundant but I needed to store these values away from
           * the original
           * num1 to num4 correspond to a textbox value through its Id
           * str1 to str4 are the same except the value is stored 
           * and converted to an Integer
           * str5 is special, used to refresh str1 to its original value */     
          var num1 = document.getElementById("Multiplier1");
          var num2 = document.getElementById("Multiplier2");
          var num3 = document.getElementById("Multiplicand3");
          var num4 = document.getElementById("Multiplicand4");
          var str1 = parseInt (num1.value);
          var str2 = parseInt (num2.value);
          var str3 = parseInt (num3.value);
          var str4 = parseInt (num4.value);
          var str5 = parseInt (num1.value);

          //Creates a table with the id "Assn7-table", this is a string at first
          //Also makes the top left corner of table blank for style and formatting
          //Each cell is assigned the same name "Assn7-tablecell"
          var HTML = '<table id = "Assn7-table"> <th id = "Assn7-tablecell">    </th>';

          //The top header for the table, uses information from multiplier 1 and 2
            for (; str1 <= str2; str1++)
          {  
            HTML += '<th id = "Assn7-tablecell">' +  str1 + '</th>';
          }

          //The left header for the table, uses information from multiplicand 1 and 2
          //Always the first number of the row generated
          for (; str3 <= str4; str3++)
          {             
           HTML += '<tr><th id = "Assn7-tablecell">' +  str3 + '</th>';
           
          //Most important part, which is the body of the table
          //I didn't need to have str1 = str5, could have replaced str1 with str5 instead
          //Note that this builds horizontally
          for (str1 = str5; str1 <= str2; str1++)
          {         
              HTML += '<td id = "Assn7-tablecell">' +   str1 * str3  + '</td>';
              
            }
            
        //Closes the table up after for loop closes, corresponding <tr> is 
        //located at the second for loop   
         HTML += '</tr>'; 
        }
        
         //Table is complete and now the string is applied to the div "Assn6-main01"
         //Originally used Document.write(), I can see why many people are against
         //using it, as it overwritten my page when the function was called
          HTML += '</table>';   
          document.getElementById("Assn7-main01").innerHTML = HTML;
           }
        
         
