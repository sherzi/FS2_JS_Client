document.addEventListener("DOMContentLoaded", function() {
console.log()
function alertMsg(){
        try {
            alert("Lists food, countries, and animals");
            }
            catch(err) {
            document.getElementById("msgBox").innerHTML = err.message;
            }
            finally {
            // If needed, you can do something here regardless of what happens in try/catch
            }
        }
alertMsg();
});