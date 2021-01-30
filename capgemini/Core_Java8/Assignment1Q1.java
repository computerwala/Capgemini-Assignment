import java.util.Scanner;

class ArmstrongOrNot {
    public boolean armstrongCheck(int num) {
        int tot=0,arm = num;
        while(num>0) {
            int tempo = num%10;
            tot = tot + (tempo*tempo*tempo);
            num = num/10;
        };
        if(tot == arm) {
            return true;
        }
        return false;
    }
}

public class Assignment1Q1 {
    public static void main(String[] args) {
    	System.out.println("Enter the number: ");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        ArmstrongOrNot check = new ArmstrongOrNot();
        boolean res = check.armstrongCheck(num);
        System.out.println(res);
        sc.close();
    }
}