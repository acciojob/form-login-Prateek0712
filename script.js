function getFormvalue() {
    //Write your code here
	let loginForm=document.querySelector("form");
	let fname=loginForm[0].value;
	let lname=loginForm[1].value;
	alert(fname+" "+lname);
}
