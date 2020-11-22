    var today = new Date();
        var fullyear = today.getFullYear();
        var future = new Date("December, 25, " + fullyear);
        var diff = future.getTime() - today.getTime();
        // Number of milliseconds
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // Convert to days
        var str = "Only <u>" + days + "</u>  days left 'til December 31st! ";
        document.write(str + "<br />");



function show_alert()
{
alert("I am an alert box!");
} 

function show_prompt()
{
var name=prompt("Please enter your name","Harry Potter");
if (name!=null && name!="")
{
document.write("Hello " + name + "! How are you today?");
}
} 