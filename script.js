

var url = "https://ywc15.ywc.in.th/api/interview"; //API data
$.getJSON(url,function(peopleObj) {

  var count = 1;
  var count1 = 1;
	var ctMajor = []; //content major list name
	var dsMajor = []; //design major list name
	var mkMajor = []; //marketing major list name
	var pgMajor = []; //programming major list name

	//Value to display list name in each major
	var listMorning = "";
	var listAfternoon = "";

	//push obj of all major in each array allow each major
	for(var i = 0; i < peopleObj.length; i++){
		if(peopleObj[i].major == "content"){
			ctMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "design"){
			dsMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "marketing"){
			mkMajor.push(peopleObj[i]);
		}
		if(peopleObj[i].major == "programming"){
			pgMajor.push(peopleObj[i]);
		}
	}

	//Sorting all major in ascending order
	ctMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	dsMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	mkMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
	pgMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});


  document.getElementById("find").addEventListener("click",find)
  function find(){
    var x = document.getElementById("nameInput").value;
    if(x==""){
      alert("กรุณาใส่ข้อมูล");
    }
    else{
      document.getElementById("showName").style.display = "block";
      document.getElementById("upper").style.display = "none";

      var listSearch = [];
  		var listSearchName = "";
      var noResult = ""
  		for(var i = 0; i < peopleObj.length; i++) {
  			for(key in peopleObj[i]) {
  				if(peopleObj[i][key].indexOf(x)!=-1) {
  					listSearch.push(peopleObj[i]);
  				}
  			}
  		}
      if (listSearch.length>0) {
        $("#hiddenR").hide();
      }else{
        $("#hiddenR").show();
      }
      for(var j=0; j<listSearch.length; j++){


        listSearchName+=  j+1+ " . " + "  " +listSearch[j].interviewRef+' '+listSearch[j].firstName + " " +listSearch[j].lastName  + " " +listSearch[j].major+  "<br>";
      
      }
      document.getElementById("search-result-text").innerHTML = listSearchName ;

  }
}
  document.getElementById("back").addEventListener("click",back)

  function back(){
    document.getElementById("showName").style.display = "none";
    document.getElementById("upper").style.display = "block";

  }


	//Show content list name
	function contentShow(){
    clearShow();
		for(var i = 0; i < 25; i++){
			listMorning += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
		for(var i = 25; i < ctMajor.length; i++){
			listAfternoon += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("1500px");
		$("#list-box-morning").height("79%");
		$("#list-box-afternoon").height("91%");

    document.getElementById("showName").style.display = "none";
    document.getElementById("upper").style.display = "block";
	}
	//Show design list name
	function designShow(){
    clearShow();
    for(var i = 0; i < 20; i++){
      listMorning += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
    }
    for(var i = 20; i < dsMajor.length; i++){
      listAfternoon += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
    }
    $("#list-name-morning").html(listMorning);
    $("#list-name-afternoon").html(listAfternoon);
    $("#list-box").height("1600px");
    $("#list-box-morning").height("61%");
    $("#list-box-afternoon").height("91%");
	}
	//Show marketing list name
	function marketingShow(){
    clearShow();
    for(var i = 0; i < 18; i++){
      listMorning += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
    }
    for(var i = 18; i < mkMajor.length; i++){
      listAfternoon += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
    }
    $("#list-name-morning").html(listMorning);
    $("#list-name-afternoon").html(listAfternoon);
    $("#list-box").height("1600px");
    $("#list-box-morning").height("55%");
    $("#list-box-afternoon").height("93%");
	}
	//Show programming list name
	function programmingShow(){

    clearShow();
		for(var i = 0; i < 23; i++){
			listMorning += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		for(var i = 23; i < pgMajor.length; i++){
			listAfternoon += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
		}
		$("#list-name-morning").html(listMorning);
		$("#list-name-afternoon").html(listAfternoon);
		$("#list-box").height("2000px");
		$("#list-box-morning").height("55%");
		$("#list-box-afternoon").height("93%");
	}
  contentShow()
	//clear all listname when click on another major
	function clearShow(){
		listMorning = "";
		listAfternoon = "";
	}

  document.getElementById("nextBt").addEventListener("click", nextNameShow)
  document.getElementById("prevBt").addEventListener("click", prevNameShow)

  function prevNameShow(){
    count1 = (count1 % 4) + 1;
    if(count1 == 1){
      contentShow();
      count = 1;
    }
    else if(count1 == 2){
      programmingShow();
      count = 4;
    }
    else if(count1 == 3){
      marketingShow();
      count = 3;
    }
    else if(count1 == 4){
      designShow();
      count = 2;
    }
  }
  function nextNameShow(){
    count = (count % 4) + 1;
    if(count == 1){
      contentShow();
      count1 = 1;
    }
    else if(count == 2){
      designShow();
      count1 = 4;
    }
    else if(count == 3){
      marketingShow();
      count1 = 3;
    }
    else if(count == 4){
      programmingShow();
      count1 = 2;
    }
  }
})
function toTopOfPage(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
function toDownOfPage(){
	$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
}
