/*var rand=Math.floor(Math.random()*5);
var location1=rand;
var location2=rand+1;
var location3=rand+2;
var guess;
var guesses=0;
var hit=0;
var miss=0;
var sink=false;
while(sink==false) {
	guess=prompt("Enter a number from 0-6 to fire", "");
	if(guess<0||guess>6) {
		alert("You entered an invalid number");
	}else{
		guesses++;
	}
	if(guess==location1||guess==location2||guess==location3) {
		alert("HIT");
		hit++;
		if(hit==3) {
			sink==true;
			alert("you sink my battle ship");
			break;
		}
	}else{
		alert("MISS");
	}
}
var stat="you took "+guesses+" guesses to sink my sheep and your accuracy is "+(3/guesses)*100+"%";
alert(stat);*/


/*function calculateArea(r) {
	var area=Math.PI*r*r;
	return area;
}
var radius=-3;
 var z=calculateArea(radius);
document.write(z+"<br>");

function currentAge(name,age) {
	var x=age*5;
	return name+" is "+x+" years old";
}
var foo="Nneka";
document.write(currentAge(foo,7)+"<br>");

var score= [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function printScore(score) {
	var highscore=0;
	var output;
	for(var i=0;i<score.length;i++) {
		output="Bubble solution # "+i+" score "+score[i];
		document.write(output+"<br>");
		if(score[i]>highscore) {
			highscore=score[i];
		}
		
	}
		document.write("bubble test: "+score.length+"<br>");
	return highscore;
}
var d=printScore(score);
document.write(d+"<br>");


function number(score) {
	var add=[];
	var highscore=0;
		for(var i=0;i<score.length;i++) {
			if(score[i]>highscore) {
				highscore=score[i];
				if(highscore==score[i]) {
				add.push(i);
				}
			}
		}
		return add;
}
var c=number(score);
document.write(c);

function Person(firstName, lastName) {
	this.firstName=firstName,
	this.lastName=lastName,
	
	this.getFullName=function() {
		return this.firstName+" "+this.lastName
	},
	
	this.greet(Person) {
		alert("Hello "+getFullName);
	}
};	
	var person1=new person("jeremy","Mcpeak");
	var person2=new person("John","Doe");*/
	
	
	 
var handler={
	addEvent:(function(){
		if(typeof addEventListener!=="undefined") {
			return function(object,event,fn) {
				object.addEventListener(event,fn,false);
			};
		}else{
			return function(object, event, fn){
				object.attachEvent("on"+event, fn)
			};
		}
	}()),
	removeEvent:(function(){
		if(typeof removeEventListener!=="undefined") {
			return function(object, event, fn) {
				object.removeEventListener(event, fn, false);
			};
		}else{
			return function(obj, evt, fn){
				object.detachEventListener("on"+event, fn)
			};
		}
	}())
};
	 
	 
	 
  function toggleEvent(event) {
	  var src=event.target;
	  var etype=event.type;
	  if(src.tagName.toUpperCase()==="SPAN") {
		  if(etype==="mouseover") {
			  if(src.className!=="button-click") {
				  src.className="button-over";
			  }
		  }else if(etype==="mouseout") {
			  if(src.className!=="button-click") {
				  src.className="button-normal";
			  }
		  }else if(etype==="click") {
			  if(src.className!=="button-click") {
				  src.className="button-click";
			  }else{
				  src.className="button-over";
			  }
		  }
	  }
  }
  handler.addEvent(document, "mouseover", toggleEvent);
  handler.addEvent(document, "mouseout", toggleEvent);
  handler.addEvent(document, "click", toggleEvent);