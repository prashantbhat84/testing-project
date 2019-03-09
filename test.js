const process = require('process');
const test1 =require('./test1');
let command=process.argv[2];
class firstClass {
	first(){
		console.log('one');
	}
}
class secondClass extends test1{

	second(){
		this.three();
		console.log('two');
	}
}
let second = new secondClass();
if(command==='hello'){
	
		second.three();
}
else if(command==='world'){
	second.second();
	
}
else{
	console.log('invalid command');
	
}


