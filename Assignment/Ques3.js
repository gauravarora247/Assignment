

	let MAX_CHAR = 26;
	function sortString(str)
	{
	
		let charCount = new Array(MAX_CHAR);
		charCount.fill(0);

		for (let i = 0; i < str.length; i++)

			// 'a'-'a' will be 0, 'b'-'a' will be 1,
			// so for location of character in count
			// array we will do str[i]-'a'.
			charCount[str[i].charCodeAt()-'a'.charCodeAt()]++;

		// Traverse the hash array and print
		// characters
		for (let i=0;i<MAX_CHAR;i++)
			for (let j=0;j<charCount[i];j++)
				document.write(String.fromCharCode('a'.charCodeAt()+i) );
	}

	let s1 = "AXXX";
    let s2 = "UVVVV";
    let s3 = "PGGGG";
    let s4 = "BOOUU";
	sortString(s1);
    sortString(s2);
    sortString(s3);
    sortString(s4);
	
	
