/*
91.461 Assignment 6 : Creating an Interactive Dynamic Table
By Charlie Sopiep, Umass Lowell Computer Science Student
Contact me at csopiep@gmail.com
Created on 10/15/15
Fixed most of the problems, such as Document.write() overwriting page
Used the lazy but easy way of updating the page in one go with innerHTML

Still need to look into finding a way to detect letters between integers like "8a8"
Also need to deal with float numbers like 1.342423
Since 1.432234 * 2.342332 = 2 
*/

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

         // Throws an alert when the user enters the numbers in the wrong order
         // Very important because it screws up the loop in a bad way
          if (str1 > str2 || str3 > str4){
              alert("The first value cannot be higher than the second");
          }
          
          //Throws an alert when there is a string detected first (a10 returns true)
          //Does not detect letters between integers such as 1a0 due to the nature
          //of parseInt
          else if (isNaN(str1)|| isNaN(str2)|| isNaN(str3)|| isNaN(str4) === true)
          {
              alert("Only integers are allowed");
          }
           else { 
            
          //Creates a table with the id "Assn6-table", this is a string at first
          //Also makes the top left corner of table blank for style and formatting
          //Each cell is assigned the same name "Assn6-tablecell"
          var HTML = '<table id = "Assn6-table"> <th id = "Assn6-tablecell">    </th>';

          //The top header for the table, uses information from multiplier 1 and 2
            for (; str1 <= str2; str1++)
          {  
            HTML += '<th id = "Assn6-tablecell">' +  str1 + '</th>';
          }

          //The left header for the table, uses information from multiplicand 1 and 2
          //Always the first number of the row generated
          for (; str3 <= str4; str3++)
          {             
           HTML += '<tr><th id = "Assn6-tablecell">' +  str3 + '</th>';
           
          //Most important part, which is the body of the table
          //I didn't need to have str1 = str5, could have replaced str1 with str5 instead
          //Note that this builds horizontally
          for (str1 = str5; str1 <= str2; str1++)
          {         
              HTML += '<td id = "Assn6-tablecell">' +   str1 * str3  + '</td>';
              
            }
            
          //Closes the table up after for loop closes, corresponding <tr> is 
          //located at the second for loop
         HTML += '</tr>'; 
           
        }
        
        //Table is complete and now the string is applied to the div "Assn6-main01"
        //Originally used Document.write(), I can see why many people are against
        //using it, as it overwritten my page when the function was called
          HTML += '</table>';   
          document.getElementById("Assn6-main01").innerHTML = HTML;
           }
        }
         
