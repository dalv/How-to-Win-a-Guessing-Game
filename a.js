function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function abc()
{
	var a = getRandomInt(100);
	var b = getRandomInt(100);
	var k = getRandomInt(100);
	var s = "";
	var r = false;
	
	$("#txtA").val(a);
	$("#txtB").val(b);
	$("#txtK").val(k);
	
	if(k>=a)
	{
		s="pick B";
		if(b>=a) r = true;
		else r = false;
	}
	if(k<a) 
	{	
		s="pick A";
		if(a>=b) r = true;
		else r = false;
	}
	
	
	$("#txtStrategy").val(s);
	$("#txtResult").val(r ? "Win" : "Lose");
	
	var CountTotal = parseInt($("#txtCountTotal").val());
	CountTotal = CountTotal + 1
	$("#txtCountTotal").val(CountTotal);
	
	if(r)
	{
		var CountWin = parseInt($("#txtCountWin").val());
		CountWin = CountWin + 1;
		$("#txtCountWin").val(CountWin);	
		var percentWin = CountWin/CountTotal;
		var percentWinRounded = Math.round(percentWin * 100) / 100;
		$("#txtPercentWin").val(percentWinRounded + "%");	
	}
}
