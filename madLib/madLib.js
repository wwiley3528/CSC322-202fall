        <meta charset= "utf-8">
        <meta name="viewport" content="width=device-width, intial-scal=1.0">
        <title>Javascript Mad Libs</title>
        <link href="css/madLid.css />

    <body>
        <h1>Mad Libs</h1>
        
        <script type="text/javascript">
            var firstName;
            var lastName;
            var occupation;
            var salary;
            var yourExp;
            var verb;
            var adjective;
            var pluralNoun;
            var color;
            var car;

            firstName=window.prompt("Enter a first name: ");
            lastName=window.prompt("Enter a last name: ");
            occupation=window.prompt("Enter an occupation: ");
            salary=window.prompt("Enter a number between 1000 and 5000: ");
            yourExp=window.prompt("Enter a saying or expression: ");
            verb=window.prompt("Enter an action verb not ending in ING: ");
            adjective=window.prompt("Enter an adjective: ");
            pluralNoun=window.prompt("Enter a plural noun: ");
            car=window.prompt("Enter your favorite car: ");
            color=window.prompt("Enter a color: ");

            document.write(firstName + lastName + “just got offered a new job as a” + occupation + “making” + salary + “dollars per month.” “ + yourExp +”, “ you say! Your job requires you to” + verb + “and make + adjective + “ “ + pluralNoun + “.” “They plan to purchase a new” + color + car “.”);
            
            </script>
            
    </body>


