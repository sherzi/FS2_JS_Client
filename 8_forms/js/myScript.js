
    try {
      function index() {
        alert("Welcome!")
      }
  
      function fullName() {
       if(document.getElementById("firstname").value == '' || document.getElementById("lastname").value == ''){
            document.getElementById("submitted").innerHTML = '*Please enter name';
        } else{
            document.getElementById("submitName").button = alert('Name submitted: ' + document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value);
            document.getElementById("submitted").innerHTML = 'Your full name is: ' + document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value;    
        }
    }
   
    function timeSubmit() {
        if(document.getElementById("task").value == ''){
            document.getElementById("submittedTime").innerHTML = '*Please enter a task';
        } else{
            document.getElementById("submitTime").button = alert('Task to be completed: ' + document.getElementById("task").value + ', by this time: ' + document.getElementById("time").value);
            document.getElementById("submittedTime").innerHTML = 'Task to be completed: ' + document.getElementById("task").value + ', by this time: ' + document.getElementById("time").value;
        }
    }

    }
    catch(err) {
      console.error('Erorr: ', err)
    }
    finally{
      console.log('Hello!')
    }
