// ************************** Part I of Assignemnt 2 *********************************



PHRASES = [["hello", "ahoy"], ["hi", "yo-ho-ho"], ["pardon me", "avast"],
               ["excuse me", "arrr"],
               ["my", "me"], ["friend", "me bucko"], ["sir", "matey"],
               ["madam", "proud beauty"], ["miss", "comely wench"],
               ["stranger", "scurvy dog"], ["officer", "foul blaggart"],
               ["where", "whar"], ["is", "be"], ["the", "th'"], ["you", "ye"],
               ["tell", "be tellin'"], ["know", "be knowin'"],
               ["how far", "how many leagues"], ["old", "barnacle-covered"],
               ["attractive", "comely"], ["happy", "grog-filled"],
               ["nearby", "broadside"], ["restroom", "head"], ["restaurant", "galley"],
               ["hotel", "fleabag inn"], ["pub", "Skull & Scuppers"],
               ["bank", "buried trasure"]
              ];

    function Capitalize(str)
    // Returns: a copy of str with the first letter capitalized
    {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function Translate(text)
    // Returns: a copy of text with English phrases replaced by piratey equivalemts
    {
        for (var i = 0; i < PHRASES.length; i++) {
            var toReplace = new RegExp("\\b"+PHRASES[i][0]+"\\b", "i");

            var index = text.search(toReplace);
            while (index != -1) {
               if (text.charAt(index) >= "A" && text.charAt(index) <= "Z") {
                   text = text.replace(toReplace, Capitalize(PHRASES[i][1]));
               }
               else {
                   text = text.replace(toReplace, PHRASES[i][1]);
               }
               index = text.search(toReplace);
            }
        }
        return text;
    }

    function convert()

    {

        var text = document.getElementsByName("english")[0].value;


        var pirate = Translate(text);

        document.getElementsByName("outputtext")[0].value= pirate;

    }

// *****************************************************************************


    // ************************ Part II of the assignemnt 2 ********************


    var Title = document.getElementById('title');
    var gpaHour = 0, creditHour = 0, gradePointAverage = 0;
    var classes = 0;

    Title.innerHTML = "GPA Calculator"

    function sort() {
      var information = document.getElementById("convert").value;
      var topic = information.split("\n");

      for(i in topic) {
        var data = topic[i].split(" ");
        var letterGrade = grade(data[1]);
        creditHour += parseFloat(data[2]) || 0;
        gradePointAverage += parseFloat(letterGrade) || 0;
        gpaHour += (gradePointAverage * (parseFloat(letterGrade) || 0))
        classes++;

      }

    gradePointAverage /=classes;
    document.getElementById('gradePoint').value = gpaHour;
    document.getElementById('GPA').value = gradePointAverage;
    document.getElementById('creditHour').value = creditHour;
    }

    function grade(letter) {
      if(letter == 'A+' || letter == "A" || letter == "A-"){
          return 4;
      } else if (letter == 'B+' || letter =='B' || letter == 'B-'){
           return 3;
       } else if(letter == 'C+' || letter == 'C' || letter == 'C-'){
          return 2;
      }
      else if(letter == "D+" || letter == 'D' || letter == 'D-'){
           return 1;
       }
       return 0;
    }
