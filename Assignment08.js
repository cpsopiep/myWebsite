 /*
    91.461 Assignment No. 8: Using the jQuery UI Slider and Tab Widgets
    By Charlie Sopiep, Umass Lowell Computer Science Student
    Contact me at csopiep@gmail.com
    Created on 11/13/15
    Could not figure out how to remove tabs. You create the table by using the sliders
    or textboxes. Invalid forms are not submitted and the button gets greyed out until
    you fix the problems.
*/

/* Validates the form and blurs the button if its invalid.
 * If the form is valid then it create/updates the table and the button is visible. */
function FormChecker(){
     if ($('#Assn8-frm01').valid()) {
            $('#Assn8-btn01').prop('disabled', false);
            MakeTable();
        } else {
            $('#Assn8-btn01').prop('disabled', 'disabled');
        }     
}
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
         *             
         *             Implemented a two way binding between the slider and
         *             textboxes. Meaning that the textboxes and sliders will
         *             update their value when you interact with them.
         *             
         *             Also implemented a tab for Assn8-maintab
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
             
         $('#Assn8-frm01').validate( {
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

      $('#Assn8-frm01 input').on('input', function () {
        FormChecker();
    }); 
     
    $( "#Assn8-slider01" ).slider({        
      value:0,
      range:"min",
      min: 0,
      max: 50,
        slide: function(event, ui) {
      $("#Multiplier1").val(ui.value);
       FormChecker();
    }  
  });
    $( "#Assn8-slider02" ).slider({        
      value:0,
      range:"min",
      min: 0,
      max: 50,
        slide: function(event, ui) {
      $("#Multiplier2").val(ui.value);
       FormChecker();
    }  
  });
    $( "#Assn8-slider03" ).slider({        
      value:0,
      range:"min",
      min: 0,
      max: 50,
        slide: function(event, ui) {
      $("#Multiplicand3").val(ui.value);
       FormChecker();
    }  
  });
    $( "#Assn8-slider04" ).slider({        
      value:0,
      range:"min",
      min: 0,
      max: 50,
        slide: function(event, ui) {
      $("#Multiplicand4").val(ui.value);
       FormChecker();
    }  
  });
  
  
$("#Multiplier1").keyup(function() {
    $("#Assn8-slider01").slider("value" , $("#Multiplier1").val());
});

$("#Multiplier2").keyup(function() {
    $("#Assn8-slider02").slider("value" , $("#Multiplier2").val());
});

$("Multiplicand3").keyup(function() {
    $("#Assn8-slider03").slider("value" , $("#Multiplicand3").val());
});

$("#Multiplicand4").keyup(function() {
    $("#Assn8-slider04").slider("value" , $("#Multiplicand4").val());
});

$("#Assn8-maintab").tabs();



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
          var HTML = '<table id = "Assn8-table"> <th id = "Assn8-tablecell">    </th>';

          //The top header for the table, uses information from multiplier 1 and 2
            for (; str1 <= str2; str1++)
          {  
            HTML += '<th id = "Assn8-tablecell">' +  str1 + '</th>';
          }

          //The left header for the table, uses information from multiplicand 1 and 2
          //Always the first number of the row generated
          for (; str3 <= str4; str3++)
          {             
           HTML += '<tr><th id = "Assn8-tablecell">' +  str3 + '</th>';
           
          //Most important part, which is the body of the table
          //I didn't need to have str1 = str5, could have replaced str1 with str5 instead
          //Note that this builds horizontally
          for (str1 = str5; str1 <= str2; str1++)
          {         
              HTML += '<td id = "Assn8-tablecell">' +   str1 * str3  + '</td>';
              
            }
        //Closes the table up after for loop closes, corresponding <tr> is 
        //located at the second for loop    
         HTML += '</tr>'; 
        }
         //Table is complete and now the string is applied to the div "Assn6-main01"
         //Originally used Document.write(), I can see why many people are against
         //using it, as it overwritten my page when the function was called
          HTML += '</table>';   
          document.getElementById("Assn8-main01").innerHTML = HTML;
           }
           
           //Copied the table from the function above but it makes a duplicate in
           //another tab once the button is pressed.
            function MakeTableTab(){ 
           //str6-9 are merely duplicates of num1-4     
          var num1 = document.getElementById("Multiplier1");
          var num2 = document.getElementById("Multiplier2");
          var num3 = document.getElementById("Multiplicand3");
          var num4 = document.getElementById("Multiplicand4");
          var str1 = parseInt (num1.value);
          var str2 = parseInt (num2.value);
          var str3 = parseInt (num3.value);
          var str4 = parseInt (num4.value);
          var str5 = parseInt (num1.value);
          var str6 = parseInt (num1.value);
          var str7 = parseInt (num2.value);
          var str8 = parseInt (num3.value);
          var str9 = parseInt (num4.value);
          var start = $("#Assn8-maintab ul li").length + 1;
          
          var HTML = '<table id = "Assn8-table"> <th id = "Assn8-tablecell">    </th>';


            for (; str1 <= str2; str1++)
          {  
            HTML += '<th id = "Assn8-tablecell">' +  str1 + '</th>';
          }


          for (; str3 <= str4; str3++)
          {             
           HTML += '<tr><th id = "Assn8-tablecell">' +  str3 + '</th>';
           

          for (str1 = str5; str1 <= str2; str1++)
          {         
              HTML += '<td id = "Assn8-tablecell">' +   str1 * str3  + '</td>';
              
            }
            
         HTML += '</tr>'; 
        }
        
          HTML += '</table>';  

        // Label the tabs with the parameters used to make the table
        $("#Assn8-maintab ul").append(
            "<li><a href='#tab" + start + "'>Top:" + str6 + " to " + str7 + " Side:"+ str8 + " to "+ str9 +"</a></li>"
        );
        //Inserts the table as content in each new tab created
          $("#Assn8-maintab").append(
            "<div id='tab" + start + "'>"+ HTML +"</div>"
        );

                 
          
    $("#Assn8-maintab").tabs("refresh");
           }
           
           
         
