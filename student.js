/*window.onload = function() {
       document.getElementById("tab").style.display = "none";
     };

    function save()
	{
		console.log("demo calling");
		var sname = document.getElementById("sname").value;
		var rollno = document.getElementById("rollno").value;
		var dob = document.getElementById("dob").value;
		var gender = document.getElementById("gender").value;
		var addr = document.getElementById("addr").value;

	let dataObj = {
		sname:sname,
		rollno:rollno,
		dob:dob,
		gender:gender,
		addr:addr
	};
	console.log(dataObj)
	$.ajax({
        type: "POST",
        url: "http://localhost:3000/savedetails",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(dataObj), // strigify the data 
        success: function(data) {
            console.log("demo");
        },
        error: function(data) {
            console.log('errr');
        }
    });
	}

	 function display()
	  {
	  	document.getElementById("tab").style.display = 'block';
	    var studentArray =





	    /*var sroll = document.getElementById("sroll").value;
	      var row=1;
	  		var sname = document.getElementById("sname").value;
	  		var rollno = document.getElementById("rollno").value;
	  		var dob = document.getElementById("dob").value;
	  		var gender = document.getElementById("gender").value;
	  		var addr = document.getElementById("addr").value.value;
        
       if(rollno === sroll)
       {
       var tab = document.getElementById("tab")*/

       /* var newRow = tab.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML = sname;
        cell2.innerHTML = rollno;
        cell3.innerHTML = dob;
        cell4.innerHTML = gender;
        cell5.innerHTML = addr;
        
	  }
	  
	  	

