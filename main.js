var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromUrl("BirthdayImage.jpg", function(Img){
        player_object = Img;
        player_object.scaleToWidth(700);
        player_object.scaleToHeight(510);
        player_object.set({
            top:0,
            left:0
        });
        canvas.add(player_object);
})
}
function playSound(){
    x.play()
}
