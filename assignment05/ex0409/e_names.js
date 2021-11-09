/** <!DOCTYPE html>
<html>

<body>

    <h2>Add Names to array</h2>
    <input type="text" id="numberbox">
    <button onclick="addnames()">Add</button>
    <button onclick="e_names()" id="print">call e_names function</button>


    <p id="positive"> </p>

    <p id="negative"></p>

    <script>
    */
        var names = [];
        var output_names = [];
        var printnames = "";

        function addnames() {
            var name = document.getElementById("numberbox").value;
            names.push(name);
            printnames = printnames + "," + name;


            document.getElementById("numberbox").value = null;

        }

        function e_names() {
            for (i = 0; i < names.length; i++) {
                if (names[i].endsWith("y") || names[i].endsWith("ie")) {
                    output_names.push(names[i]);
                }

            }
            document.getElementById("positive").innerHTML = "The names in your list are " + printnames;
            document.getElementById("negative").innerHTML = "There are " + output_names.length + " names ended up with 'y' and 'ie'";
            document.getElementById("print").disabled = true;
        }
        /*
    </script>

</body>

</html>
*/