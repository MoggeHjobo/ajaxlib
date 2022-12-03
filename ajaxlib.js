
/*
	Detta är ett funktionsbibliotek, som är till för frågor och svar
	enligt klient server arkitekturen. För ändamålet används funktionen
	sendData(id,adress,data,call)
	id = ett element som man önskar uppdatera med svar från servern
	adress = adressen till resurs på på servern
	data = data som man önskar skicka till servern. Den har följande format
	namn=kalle&adress=hemma osv.
	call är lika med en callback. EN metod som anropas när svaret kommer från serven'
	Exempel på anvädning
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

	Några som helst redigeringar av detta funktionsbibliotek är för tillfället inte
	nödvändiga
	*/

	function getRequest()
	{
	var request;
		if (window.XMLHttpRequest)
				request=new XMLHttpRequest();
		else
				request=new ActiveXObject("Microsoft.XMLHTTP");
		return request;
	}


	function sendData(id,adress,data,call)
	{
		request = getRequest();
		request.onreadystatechange=function()
		{

			if (request.readyState == 4 && request.status==200)
			{
				//alert("ÅÅÅÅÅÅ"+request.responseText+"LLLLLL");
				call(id,request);

			}
		}
		request.open("POST",adress,true);
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.send(data);
	}
