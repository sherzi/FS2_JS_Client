
    try {
      function index() {
        alert("Welcome!")
      }
  
      function page1(){
        window.location.href = "page1.html";
      }

      function page2(){
        window.location.href = "page2.html";
      }

      function page3(){
        window.location.href = "page3.html";
      }

      function fullName() {
       if(!document.getElementById("firstname").value == '' && !document.getElementById("lastname").value == ''){
            document.getElementById("submitName").button = alert('Name submitted: ' + document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value);
            document.getElementById("submitted").innerHTML = 'Your full name is: ' + document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value + '. You may now choose a button:';    
            document.getElementById("show1").style.visibility = "visible"
            document.getElementById("show2").style.visibility = "visible"
          } else{
            document.getElementById("submitName").button = alert("Did not fill in all fields: Please start over from the homepage"); 
            window.location.href = "index.html";
          }
    }
   
    function bdaySubmit() {
      if(!document.getElementById("bday").value == ''){
        document.getElementById("submitDate").button = alert('Date of birth submitted: ' + document.getElementById("bday").value);
        document.getElementById("submittedBday").innerHTML = 'Your date of birth is: ' + document.getElementById("bday").value;
      }else{
        document.getElementById("bdaySubmit").button = alert("*Please fill in all fields"); 
      }
    }

    function timeSubmit() {
        if(!document.getElementById("task").value == '' && !document.getElementById("time").value == ''){
            document.getElementById("submitTime").button = alert('Task to be completed: ' + document.getElementById("task").value + ', by this time: ' + document.getElementById("time").value);
            document.getElementById("submittedTime").innerHTML = 'Task to be completed: ' + document.getElementById("task").value + ', by this time: ' + document.getElementById("time").value;
        } else{
          document.getElementById("submittedTime").button = alert("*Please fill in all fields"); 
        }
    }

    }
    catch(err) {
      console.error('Erorr: ', err)
    }
    finally{
      console.log('Hello!')
    }
