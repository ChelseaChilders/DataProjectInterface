var url = "new_output_5.json";

(function() {
    "use strict";
    var main = function() {
        getInfo(url);
    };

    $(document).ready(main);
}());

var getInfo = function(url){
    $.getJSON(url, function(results) {
        var i=1;
        while(i<19){
            if(results["H"+i+"_From0"]){
                document.getElementById("hole"+i+"Div").style.visibility = "visible";
                var holeCount = getHoleCount(i, results);
                getHoleInfo(i, holeCount, results);
            }
            i++;
        }
    });
}

var getHoleCount = function(i, results){
    var j=0;
    var holeCount = 0;
    while (j<10){
        if(results["H"+i+"_From"+j]){
            holeCount = holeCount+1;
        }
        j++;
    }
    return(holeCount);
}

var getHoleInfo = function(i, holeCount,results){
    var j = 0;
    var rowArray = [];
    while(j<holeCount){
        if (results["H"+i+"_From"+j]){
            var hole_from = [results["H"+i+"_From"+j].result];
            var n = 0;
            while (n<hole_from[0].length){
                hole_from.push("<img src='new_output_5_tokens/H"+i+"_From"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_from = "";
        }

        if (results["H"+i+"_Distance"+j]){
            var hole_dist = [results["H"+i+"_Distance"+j].result];
            var n = 0;
            while (n<hole_dist[0].length){
                hole_dist.push("<img src='new_output_5_tokens/H"+i+"_Distance"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_dist = "";
        }

        if (results["H"+i+"_ClubL"+j]){
            var hole_clubL = [results["H"+i+"_ClubL"+j].result];
            var n = 0;
            while (n<hole_clubL[0].length){
                hole_clubL.push("<img src='new_output_5_tokens/H"+i+"_ClubL"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_clubL = "";
        }

        if (results["H"+i+"_ClubR"+j]){
            var hole_clubR = [results["H"+i+"_ClubR"+j].result];
            var n = 0;
            while (n<hole_clubR[0].length){
                hole_clubR.push("<img src='new_output_5_tokens/H"+i+"_ClubR"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_clubL = "";
        }

        if (results["H"+i+"_LR"+j]){
            var hole_LR = [results["H"+i+"_LR"+j].result];
            var n = 0;
            while (n<hole_LR[0].length){
                hole_LR.push("<img src='new_output_5_tokens/H"+i+"_LR"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_LR = "";
        }

        if (results["H"+i+"_SP"+j]){
            var hole_SP = [results["H"+i+"_SP"+j].result];
            var n = 0;
            while (n<hole_SP[0].length){
                hole_SP.push("<img src='new_output_5_tokens/H"+i+"_SP"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_SP = "";
        }

        
        if (results["H"+i+"_Result"+j]){
            var hole_Result = [results["H"+i+"_Result"+j].result];
            var n = 0;
            while (n<hole_Result[0].length){
                hole_Result.push("<img src='new_output_5_tokens/H"+i+"_Result"+j+"_"+n+".jpg'>")
                n++;
            }
        } else {
            var hole_Result = "";
        }
        
        if (results["H"+i+"_Recovery"+j]) {
            var hole_Recovery = results["H"+i+"_Recovery"+j].result;
        } else {
            var hole_Recovery = "";
        }

        rowArray = [hole_from, hole_dist, hole_clubL, hole_clubR, hole_LR,hole_SP,hole_Result,hole_Recovery]

        displayRowInfo(i, rowArray);

        j++;
        
        }
    }

    var displayRowInfo = function(i, rowArray){
        var table = document.getElementById("table"+i);
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        var cell6 = row.insertCell(-1);
        var cell7 = row.insertCell(-1);
        var cell8 = row.insertCell(-1);
        cell1.innerHTML = rowArray[0];
        cell2.innerHTML = rowArray[1];
        cell3.innerHTML = rowArray[2];
        cell4.innerHTML = rowArray[3];
        cell5.innerHTML = rowArray[4];
        cell6.innerHTML = rowArray[5];
        cell7.innerHTML = rowArray[6];
        cell8.innerHTML = rowArray[7];
    }

