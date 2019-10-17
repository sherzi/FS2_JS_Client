function sayHelloFunction() {
    var welcomeMsg = "Hello to a declared variable";
    console.log(welcomeMsg);
    }


    try {
    alert("Hello User");
      }
    catch (err) {
      document.getElementById("msgBox").innerHTML = err.message;
    }
    finally {
      // If needed, you can do something here regardless of what happens in try/catch
    }