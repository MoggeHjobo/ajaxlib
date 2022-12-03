# ajaxlib
A simple library for handling ajaxkommunication with an server using javascript
This is a function library, which is for questions and answers
according to the client server architecture. For this purpose, this function is used
sendData(id,address,data,call)
id = an element that you wish to update with responses from the server
address = the address of resource on on the server
data = data that you wish to send to the server. It has the following format
name=nickname&address=home etc.
call is equal to a callback. A method that is called when the response comes from the server.

Example of use
<script src="ajaxlib.js"></script>
<script>
						            function getInfo()
                        {
                        sendData('info','getinfo.php','',displayInfo);
                        }

                        function displayInfo(id,response)
                        {
                         document.getElementById(id).innerHTML=response.responseText;
                        }
</script>

