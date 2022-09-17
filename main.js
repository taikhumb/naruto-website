
function change(){
    var pic = document.getElementById('image');
    if (pic.src.match("download.jpg"))
    {
        pic.src="download (2).jpg";
    }
    else
    {
        pic.src =  "download.jpg";
    }
        

    
}