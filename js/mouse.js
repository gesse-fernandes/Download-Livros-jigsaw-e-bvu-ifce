 dim ;addx ;as ;unsigned ;dim ;addy ;as ;unsignedaddx=allocate(8);addy=addx+4; 
 repeat;
 a=External("user32.dll","GetCursorPos",addx);
  if (a !=0)
   then;pos_x=PeekInteger(addx,4) ;pos_y=PeekInteger(addy,4) ;mes$="Cursor X is at : "+str$(pos_x)+"\n\Cursor Y is at : "+str$(pos_y) ;msgframe(mes$,1) ;pause;1;endif ;until;i=100;