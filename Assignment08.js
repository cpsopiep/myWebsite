 /*
    91.461 Assignment No. 7: Using the jQuery Validation Plugin with Your Dynamic Table
    By Charlie Sopiep, Umass Lowell Computer Science Student
    Contact me at csopiep@gmail.com
    Created on 11/01/15
*/

function FormChecker(){
     if ($('#Assn8-frm01').valid()) {
            $('#Assn8-btn01').prop('disabled', false);
            MakeTable();
        } else {
            $('#Assn8-btn01').prop('disabled', 'disabled');
        }     
}

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
          document.getElementById("Assn8-main01").innerHTML = HTML;
           }
           
           
            function MakeTableTab(){ 
                
          var num1 = document.getElementById("Multiplier1");
          var num2 = document.getElementById("Multiplier2");
          var num3 = document.getElementById("Multiplicand3");
          var num4 = document.getElementById("Multiplicand4");
          var str1 = parseInt (num1.value);
          var str2 = parseInt (num2.value);
          var str3 = parseInt (num3.value);
          var str4 = parseInt (num4.value);
          var str5 = parseInt (num1.value);
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

        $("#Assn8-maintab ul").append(
            "<li><a href='#tab" + start + "'>#" + start + "</a></li>"
        );
          $("#Assn8-maintab").append(
            "<div id='tab" + start + "'>"+ HTML +"</div>"
        );

                 
          
    $("#Assn8-maintab").tabs("refresh");
           }
        
         
