function firstWord(s) {
  // your code here
	let arr=s.trim().split(" ");
	if(arr.length==0){
		return "";
	}
	return arr[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
