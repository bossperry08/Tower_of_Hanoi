import java.util.Scanner;

public class Tower_of_Hanoi{
  public static void main(String[] args) {
  Scanner a = new Scanner (System.in);
  int n=a.nextInt();
  char cotBatDau = 'A', cotTrungGian  = 'B', cotDich = 'C';
  System.out.println("Giai bai toan Tower of Hanoi voi n = "+n);
  towerofHanoi(n,cotBatDau,cotDich, cotTrungGian);
  }
  
  static void towerofHanoi (int numDisc, char fromRod, char toRod, char midRod){
	  if (numDisc==1)
	  {
		  move( numDisc, fromRod, toRod);
	  }
	  else
	  {
		  towerofHanoi(numDisc-1,fromRod,midRod, toRod);
		  move(numDisc,fromRod,toRod);
		  towerofHanoi(numDisc-1,midRod,toRod, fromRod);
	  }
  }
  
  static void move (int moveDisc, char fromRod, char toRod)
  {
	  System.out.println("Di chuyen dia so " +moveDisc+ " tu cot " +fromRod+ " sang cot " +toRod);
  }
}