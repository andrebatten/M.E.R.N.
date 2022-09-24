public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 4.53;
        double latte = 5.25;
        double cappuccino = 4.75;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        
        // Order completions (add yours below)
        boolean isReadyOrder = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;

        if(isReadyOrder){
            System.out.println("Order Up!");
        }
        else{
            System.out.println("Your order will be out shortly.");
        }
        if(isReadyOrder2){
            System.out.println("Order Up!");
        }
        else{
            System.out.println("Your order will be out shortly.");
        }
        if(isReadyOrder3){
            System.out.println("Order Up!");
        }
        else{
            System.out.println("Your order will be out shortly.");
        }
        if(isReadyOrder4){
            System.out.println("Order Up!");
        }
        else{
            System.out.println("Your order will be out shortly.");
        }
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        //System.out.println(generalGreeting + customer1); 
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(displayTotalMessage + dripCoffee); 
        System.out.println(displayTotalMessage + dripCoffee); 
    }
}
