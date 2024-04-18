function getFormvalue() {
    //Write your code here
	let loginForm=document.querySelector("form");
	let fname=loginForm[0].value;
	let lname=loginForm[1].value;
	alert(fname+" "+lname);
}
//code is working but test cases are not passing 
//they want different wayy and i am using diff way that  i know