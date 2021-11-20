var loadFile = function(event) {
    var preview = document.getElementById('preview');
	preview.src = URL.createObjectURL(event.target.files[0]);

};

document.getElementById("pname").value=localStorage.getItem("pname");


function addproduct()
{    
    if(localStorage.getItem("pid")==null)
{
    localStorage.setItem("pid",100);
    
}
else
{
    var coun=localStorage.getItem("pid");
    coun++;
    localStorage.setItem("pid",coun);
}
    var pname=document.getElementById("pname").value;

    var Price=document.getElementById("Price").value;
    var img=document.getElementById("preview").getAttribute("src");

    var describtion=document.getElementById("desc").value;
    
    localStorage.setItem("pname",pname);
    localStorage.setItem("Price",Price);
    localStorage.setItem("imgsrc",img);
    localStorage.setItem("describtion",describtion);
   

 var hg =localStorage.getItem("userbame")

}


