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
            var hole_from = ["<img src='output_cells/H"+i+"_From"+j+".jpg'>"];
            hole_from.push("<img src='output_tokens/H"+i+"_From"+j+"_0.jpg' style='border: 10px solid "+getConfColor(results["H"+i+"_From"+j].conf[0])+";'>");
            hole_from.push(results["H"+i+"_From"+j].result);
        } else {
            var hole_from = ["","",""];
        }

        if (results["H"+i+"_Distance"+j]){
            var hole_dist = ["<img src='output_cells/H"+i+"_Distance"+j+".jpg'>"];
            getToken("Distance", results, i, j, hole_dist);
            hole_dist.push(results["H"+i+"_Distance"+j].result);
        } else {
            var hole_dist = [""];
        }

        if (results["H"+i+"_ClubL"+j]){
            var hole_clubL = ["<img src='output_cells/H"+i+"_ClubL"+j+".jpg'>"];
            getToken("ClubL", results, i, j, hole_clubL);
            hole_clubL.push(results["H"+i+"_ClubL"+j].result);
        } else {
            var hole_clubL = ["&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp","&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp","&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"];
        }

        if (results["H"+i+"_ClubR"+j]){
            var hole_clubR = ["<img src='output_cells/H"+i+"_ClubR"+j+".jpg'>"];
            getToken("ClubR", results, i, j, hole_clubR);
            hole_clubR.push(results["H"+i+"_ClubR"+j].result);
        } else {
            var hole_clubR = ["","",""];
        }

        if (results["H"+i+"_LR"+j]){
            var hole_LR = ["<img src='output_cells/H"+i+"_LR"+j+".jpg'>"];
            getToken("LR", results, i, j, hole_LR);
            hole_LR.push(results["H"+i+"_LR"+j].result);
        } else {
            var hole_LR = [""];
        }

        if (results["H"+i+"_SP"+j]){
            var hole_SP = ["<img src='output_cells/H"+i+"_SP"+j+".jpg'>"];
            getToken("SP", results, i, j, hole_SP);
            hole_SP.push(results["H"+i+"_SP"+j].result);
        } else {
            var hole_SP = [""];
        }

        if (results["H"+i+"_Result"+j]){
            var hole_Result = ["<img src='output_cells/H"+i+"_Result"+j+".jpg'>"];
            getToken("Result", results, i, j, hole_Result);
            hole_Result.push(results["H"+i+"_Result"+j].result);
        } else {
            var hole_Result = [""];
        }

        if (results["H"+i+"_Recovery"+j]){
            var hole_Recovery = ["<img src='output_cells/H"+i+"_Recovery"+j+".jpg'>"];
            getToken("Recovery", results, i, j, hole_Recovery);
            hole_Recovery.push(results["H"+i+"_Recovery"+j].result);
        } else {
            var hole_Result = ["","",""];
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
    cell1.innerHTML = rowArray[0]
    cell2.innerHTML = rowArray[1];
    cell3.innerHTML = "<span>"+rowArray[2][0]+"&nbsp&nbsp&nbsp"+rowArray[2][1]+"&nbsp&nbsp&nbsp"+rowArray[2][2]+"</span><span style='border-left: 1px solid black; margin-left: 5px; padding-left: 5px;'>"+rowArray[3][0]+"&nbsp&nbsp&nbsp"+rowArray[3][1]+"&nbsp&nbsp&nbsp"+rowArray[3][2]+"</span>";
    cell4.innerHTML = rowArray[4];
    cell5.innerHTML = rowArray[5];
    cell6.innerHTML = rowArray[6];
    cell7.innerHTML = rowArray[7];
}

var insertData = function(rowArray, n){
    console.log("^^^^^^^^"+rowArray[n][1]);
    return(rowArray[n][0]+"&nbsp&nbsp&nbsp"+rowArray[n][1]+"&nbsp&nbsp&nbsp"+rowArray[n][2]);
}

var getToken = function(name, results, i, j, arr){
    var n = 0;
    while (n<results["H"+i+"_"+name+j].result.length){
        arr.push("<img src='output_tokens/H"+i+"_"+name+j+"_"+n+".jpg' style='border: 10px solid "+getConfColor(results["H"+i+"_"+name+j].conf[0])+";'>");
        n++;
    }
}

var getConfColor = function(conf){
    console.log("b4: "+conf);
    //confNeg = 99;
    return "rgb(100%, "+conf+"%, 0%)";
}