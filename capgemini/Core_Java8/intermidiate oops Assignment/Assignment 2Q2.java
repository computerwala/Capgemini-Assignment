import java.util.ArrayList;
class Manager extends Assignment2Q2 
{
    @Override
    public int getSalary(int salary) 
    {
        int incentive = 5000;
        incentive=incentive+salary;
        return incentive;
    }
}

class Labour extends Assignment2Q2 {
    @Override
    public int getSalary(int salary) {
        int overtime = 500;
        overtime=overtime+salary;
        return overtime;       
    }
}


public class Assignment2Q2  {
    static int salary = 10000;
    public int getSalary(int salary)
    {
    	return salary;
    	
    }
    public int totalEmployeesSalary(ArrayList<Integer> employeeSalaries)
    {
    	int sum=0;
    	for(int i=0;i<employeeSalaries.size();i++)
    		sum+=employeeSalaries.get(i);
    	return sum;
         }  
    public static void main(String[] args) 
    {
    	Manager h=new Manager();
    	Labour j=new Labour();
    	int k=h.getSalary(salary);
    	int y=j.getSalary(salary);
    	System.out.println("Salary of employee "+k);
    	System.out.println("Salary of Labour "+y);
    	ArrayList<Integer> employeeSalaries=new ArrayList<Integer>();
    	employeeSalaries.add(k);
    	employeeSalaries.add(y);
    	Assignment2Q2 solution=new Assignment2Q2();
    	System.out.println("Total Salary of both manager and labour "+solution.totalEmployeesSalary(employeeSalaries));
    	
    }
}