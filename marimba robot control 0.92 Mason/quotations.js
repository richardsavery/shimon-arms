function anything()
{
	var a = arrayfromargs(messagename, arguments);
	myval = a.join(' ');
	bang();
}

function bang()
{
	outlet(0, myval);
}