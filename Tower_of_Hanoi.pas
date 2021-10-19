uses crt;
var n:integer;
cotDich, cotBatDau, cotTrungGian:char;

procedure move (moveDisc:integer;
fromRod, toRod:char);
begin
writeln ('Di chuyen dia so ', moveDisc, ' tu cot ', fromRod, ' sang cot ',
	 toRod);
end;
procedure towerOfHanoi (numDisc:integer;
fromRod, toRod, midRod:char);
begin if (numDisc = 1)
  then begin move (numDisc, fromRod, toRod);
exit ();
end
else
begin towerOfHanoi (numDisc - 1, fromRod, midRod, toRod);
move (numDisc, fromRod, toRod);
towerOfHanoi (numDisc - 1, midRod, toRod, fromRod);
end;
end;
begin read (n);
cotBatDau:= 'A';
cotTrungGian:= 'B';
cotDich:= 'C';
writeln ('Giai bai toan Tower of Hanoi voi n = ', n);
towerOfHanoi (n, cotBatDau, cotDich, cotTrungGian);
end.

