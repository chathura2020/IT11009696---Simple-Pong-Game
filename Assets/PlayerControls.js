#pragma strict

var moveDown : KeyCode;
var moveUp : KeyCode;

var speed : float =10;

function Update () {

	if( Input.GetKey(moveUp) )
	{
		rigidbody2D.velocity.y = speed;
		
	}else if(Input.GetKey(moveDown))
	{
		rigidbody2D.velocity.y = speed * -1;
	}else
	{
		rigidbody2D.velocity.y = 0;
	}
}