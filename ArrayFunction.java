import java.util.Arrays;
public class ArrayFunction{
	public static int[] switchIndex(int [] number){
		int tempNumber = 0;
		for(int index = 0; index < number.length-1; index+=2){
			tempNumber = number[index];
			number[index] = number[index + 1];
			number[index + 1] = tempNumber;
		}
		return number;
	}
	


	public static void main(String[] args){
		int [] number = {6,5,4,3,2,1};
		int[]result = switchIndex(number);
		System.out.println(Arrays.toString (result));

		String var1 = "Beauty";
		String var2 = "Pablo";
		String var3 = "Nike";

		var1 = var2;
		var2 = var3;
		var3 = var1;
		System.out.print(var1);
		System.out.print(var2);
		System.out.print(var3);
	}
}