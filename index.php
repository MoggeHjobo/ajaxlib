
<!DOCTYPE html>
<html>
        <head>
                <title>FoodGuard</title>
                <script src="ajaxlib.js"></script>
                <script>
                        function getInfo()
                        {
                              sendData('info','getinfo.php','',displayInfo);
                        }

                        function displayInfo(id,response)
                        {
                        alert(response.responseText);
                         document.getElementById(id).innerHTML=response.responseText;
                        }
                </script>
               
                <link href="style.css" rel="stylesheet" type="text/css" media="screen"
        </head>
<body>

            <h2>Ajaxlib</h2>
             <input type="button" value="hämta från servern" onclick="getInfo();"/>
            <div id="info"></div>
            
</body>
</html>