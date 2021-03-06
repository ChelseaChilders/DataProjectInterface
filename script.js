var url = "new_output_5.json";
var imgCellsDir = "output_cells/";
var imgTokensDir = "output_tokens/";

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
            var hole_from = ["<img src='"+imgCellsDir+"H"+i+"_From"+j+".jpg' class='smImg'>"];
            getToken("From", results, i, j, hole_from);
            hole_from.push(results["H"+i+"_From"+j].result);
        } else {
            var hole_from = ["","",""];
        }

        if (results["H"+i+"_Distance"+j]){
            var hole_dist = ["<img src='"+imgCellsDir+"H"+i+"_Distance"+j+".jpg' class='smImg'>"];
            getToken("Distance", results, i, j, hole_dist);
            hole_dist.push(results["H"+i+"_Distance"+j].result);
        } else {
            var hole_dist = [""];
        }

        if (results["H"+i+"_ClubL"+j]){
            var hole_clubL = ["<img src='"+imgCellsDir+"H"+i+"_ClubL"+j+".jpg' class='smImg'>"];
            getToken("ClubL", results, i, j, hole_clubL);
            hole_clubL.push(results["H"+i+"_ClubL"+j].result);
        } else {
            var hole_clubL = [""];
        }

        if (results["H"+i+"_ClubR"+j]){
            var hole_clubR = ["<img src='"+imgCellsDir+"H"+i+"_ClubR"+j+".jpg' class='smImg'>"];
            getToken("ClubR", results, i, j, hole_clubR);
            hole_clubR.push(results["H"+i+"_ClubR"+j].result);
        } else {
            var hole_clubR = ["","",""];
        }

        if (results["H"+i+"_LR"+j]){
            var hole_LR = ["<img src='"+imgCellsDir+"H"+i+"_LR"+j+".jpg' class='smImg'>"];
            getToken("LR", results, i, j, hole_LR);
            hole_LR.push(results["H"+i+"_LR"+j].result);
        } else {
            var hole_LR = [""];
        }

        if (results["H"+i+"_SP"+j]){
            var hole_SP = ["<img src='"+imgCellsDir+"H"+i+"_SP"+j+".jpg' class='smImg'>"];
            getToken("SP", results, i, j, hole_SP);
            hole_SP.push(results["H"+i+"_SP"+j].result);
        } else {
            var hole_SP = [""];
        }

        if (results["H"+i+"_Result"+j]){
            var hole_Result = ["<img src='"+imgCellsDir+"H"+i+"_Result"+j+".jpg' class='smImg'>"];
            getToken("Result", results, i, j, hole_Result);
            hole_Result.push(results["H"+i+"_Result"+j].result);
        } else {
            var hole_Result = [""];
        }

        if (results["H"+i+"_Recovery"+j]){
            var hole_Recovery = ["<img src='"+imgCellsDir+"H"+i+"_Recovery"+j+".jpg' class='smImg'>"];
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
    cell1.innerHTML = getArrayItems(rowArray[0], 12);
    cell2.innerHTML = getArrayItems(rowArray[1], 12);
    cell3.innerHTML = "<div class='row'>"+getArrayItems(rowArray[2], 6)+getArrayItems(rowArray[3], 6)+"</div>";
    cell4.innerHTML = getArrayItems(rowArray[4], 12);
    cell5.innerHTML = getArrayItems(rowArray[5], 12);
    cell6.innerHTML = getArrayItems(rowArray[6], 12);
    cell7.innerHTML = getArrayItems(rowArray[7], 12);
}

var getToken = function(name, results, i, j, arr){
    var n = 0;
    while (n<results["H"+i+"_"+name+j].result.length){
        arr.push("<img src='"+imgTokensDir+"/H"+i+"_"+name+j+"_"+n+".jpg' class='smImg' style='border: 5px solid "+getConfColor(results["H"+i+"_"+name+j].conf[0])+";'>");
        n++;
    }
}

var getArrayItems = function(arr, gridN){
    var str = "<div class='col-sm-"+gridN+"'>";
    var i = 0;
    while(i<arr.length){
        str = str.concat(arr[i]);
        if(i!=arr.length-1){
           str = str.concat("&nbsp");
        }
        i++;
    }
    str = str.concat("</div>");
    return(str);
}

var getConfColor = function(conf){
    if(conf >= .95){
        conf=conf*100;
    }else if(conf<.95 && conf >= .80){
        conf=conf*80;
    }else{
        conf=conf;
    }
    return "rgb(100%, "+conf+"%, 0%)";
}