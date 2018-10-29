// es5

var a = 1;

(function() {
	var b = a;

	console.log(b);

	(function() {
        var c = a;

        console.log(c);
    })();

	console.log(c);
})();

//console.log(b);

// es6

const a = 1

{
	const b = a
    
	console.log(b)

	{
        const c = b

        console.log(c)
    }

	console.log(c)
}

//console.log(b)