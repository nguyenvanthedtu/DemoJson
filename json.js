var title=document.getElementById("title")
title.innerHTML="Demo Json"
title.style.color="red";
var style=document.getElementById("demo")
style.style.color="gray";
style.style.fontSize="25px"
style.style.margin="10px"
var object_student = '{ '
+ ' "ID": "001", '
+ ' "Name" : "Lê Công Tuấn", '
+ ' "Sex" :"Nam",'
+ ' "Age" :21,'
+ ' "Address":"Quảng Trị"'

+ '}'
var obj = JSON.parse(object_student) ;
style.innerHTML=
`{
    <br>
    Id: ${obj.ID},<br>
    Name: ${obj.Name},<br>
    Sex: ${obj.Sex},<br>
    Age: ${obj.Age},<br>
    Address: ${obj.Address}
    <br>
}`