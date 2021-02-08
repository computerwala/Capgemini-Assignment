abstract class pro
{
	int u;
}
abstract class Assignment extends pro
{
    abstract public int jio();}

class Extend extends Assignment
{
	public int jio()
	{
		u=50;
		return u;
	}
}
public class Assignment2Q4 {
    public static void main(String[] args) {
    	Extend w=new Extend();
    	int d=w.jio();
    	System.out.println(d);  	
    }
}