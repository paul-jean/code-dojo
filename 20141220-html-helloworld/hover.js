var hover = document.getElementsByClassName("hover");

var myObj = {
    myField: 1,
    myMethod: function () {
        window.alert("myMethod being executed.");
    },
    anotherField: {
        nestedField: 2
    }
};


var color = function(){
    hover[0].style.color = "red";
    console.log(myObj.myField);
    console.log(myObj.myMethod());
    console.log(myObj.anotherField.nestedField);
};

hover[0].addEventListener("mouseover", color);


