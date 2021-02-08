import java.util.ArrayList;

class CurrentAccount extends Assignment2Q3 
{
    int totalDeposits = 10000;
    int creditLimit = 2000;
    @Override
    public int getCash() 
    {
    	int total_cash;
    	total_cash=totalDeposits-creditLimit;
    	return total_cash;
    }
}
class SavingsAccount extends Assignment2Q3 
{
    int totalDeposits = 10000;
    int fixedDepositAmount = 5000;
    @Override
    public int getCash()
    {
    	int total_cash;
    	total_cash=totalDeposits+fixedDepositAmount;
    	return total_cash;
    }
}
public class Assignment2Q3 
{
    public int totalCashInBank(ArrayList<Integer> cash)
    {
    	int sum=0;
    	for(int i=0;i<cash.size();i++)
    		sum+=cash.get(i);
    	return sum; 
    }
    public int getCash()
    {
    	int total_cash = 0;
    	return total_cash;
    }
    public static void main(String[] args) 
    {
    	CurrentAccount h=new CurrentAccount();
    	SavingsAccount j=new SavingsAccount();
    	int k=h.getCash();
    	int y=j.getCash();
    	System.out.println("Total Current Account Amount "+k);
    	System.out.println("Total Savings Account Amount "+y);
    	ArrayList<Integer> cash=new ArrayList<Integer>();
    	cash.add(k);
    	cash.add(y);
    	Assignment2Q3 total=new Assignment2Q3();
    	System.out.println("Total amount in the bank "+total.totalCashInBank(cash));
    	
    }
}