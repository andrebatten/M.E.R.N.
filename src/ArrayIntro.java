
public class ArrayIntro {

	public static void main(String[] args) {
		
		//Declaring an array
		String[] cars = new String[4];
		
		//setting data to array indexes
		//[0][1][2][3] = array sized 4
		cars[0] = "Toyota";
		cars[1] = "Tesla";
		cars[2] = "GM";
		cars[3] = "Kia";
		System.out.println(cars[0]);
		
		//declaring an array 
		//if we know the info we want to put in it
		String[] pets = {"dog", "cat", "fish", "hamster"}; 
		System.out.println(pets[1]);
		
		
		//Looping through an array Classic and Modern
		//Classic Loop
		for(int i = 0; i < pets.length; i++) {
			System.out.println(pets[i]);
		}
		
		//Modern Loop
		for(String pet : pets) {
			System.out.println(pet);
		}
		
		//Number Array
		int[] nums = new int[7];
		nums[0] = 17;
		nums[1] = 16;
		nums[2] = 15;
		nums[3] = 14;
		nums[4] = 13;
		nums[5] = 12;
		nums[6] = 11;
		
		for(int num : nums) {
			System.out.println(num);
		}
		
	}

}
