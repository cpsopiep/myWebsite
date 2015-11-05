         $(document).ready( function() {
             $.validator.addMethod("OneGreaterThanOther", function(value, element) {
                 var number1 = parseInt($('#Multiplier1').val());
                 var number2 = parseInt($('#Multiplier2').val());

                 if (number1 > number2 ){
                     return false;
                 } else{
                     return true;
                 }
             }, "Invalid number" );
             $.validator.addMethod("OneGreater", function(value, element) {
                 var number3 = parseInt($('#Multiplicand3').val());
                 var number4 = parseInt($('#Multiplicand4').val());
                 if (number3 > number4){
                     return false;
                 } else{
                     return true;
                 }
             }, "test" );
         $('#Assn7-frm01').validate( {
        rules : {
          Multiplier1 : {
            required: true,
            number: true,
            OneGreaterThanOther:true
     },
          Multiplier2 : {
            required: true,
            number: true
          },
          Multiplicand3 : {
            required: true,
            number: true,
            OneGreater:true
          },
          Multiplicand4 : {
            required: true,
            number: true
          }
         },
         messages : {
            Multiplier1 : {
            number: "Needs a number here"
             },
            Multiplier2 : {
            number: "Needs a number here"
            },
            Multiplicand3 : {
            number: "Needs a number here"
            },
            Multiplicand4 : {
            number: "Needs a number here"
            }
         }
     });
      $('#Assn7-frm01 input').on('keyup blur', function () {
        if ($('#Assn7-frm01').valid()) {
            $('#Assn7-btn01').prop('disabled', false);
        } else {
            $('#Assn7-btn01').prop('disabled', 'disabled');
        } 
    }); 
     });
        
         
              
         function MakeTable(){ 
             
          var num1 = document.getElementById("Multiplier1");
          var num2 = document.getElementById("Multiplier2");
          var num3 = document.getElementById("Multiplicand3");
          var num4 = document.getElementById("Multiplicand4");
          var str1 = parseInt (num1.value);
          var str2 = parseInt (num2.value);
          var str3 = parseInt (num3.value);
          var str4 = parseInt (num4.value);
          var str5 = parseInt (num1.value);


          var HTML = '<table id = "Assn7-table"> <th id = "Assn7-tablecell">    </th>';


            for (; str1 <= str2; str1++)
          {  
            HTML += '<th id = "Assn7-tablecell">' +  str1 + '</th>';
          }


          for (; str3 <= str4; str3++)
          {             
           HTML += '<tr><th id = "Assn7-tablecell">' +  str3 + '</th>';
           

          for (str1 = str5; str1 <= str2; str1++)
          {         
              HTML += '<td id = "Assn7-tablecell">' +   str1 * str3  + '</td>';
              
            }
            
         HTML += '</tr>'; 
           
        }
        
          HTML += '</table>';   
          document.getElementById("Assn7-main01").innerHTML = HTML;
           }
        
         
