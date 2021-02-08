abstract class Persistence {
    abstract public String persist();
}
class FilePersistence extends Persistence{
    @Override
    public String persist() {
    	
    	String t="Hii..this is File persistence";
    	return t;
    }
}
class DatabasePersistence extends Persistence{
    @Override
    public String persist() {
    	String r="hello.i'm in Database";
    	return r;
    }
}

public class Assignment2Q6 {
    public static void main(String[] args) {
    	FilePersistence w=new FilePersistence();
    	DatabasePersistence j=new DatabasePersistence();
    	String d=w.persist();
    	String t=j.persist();
    	System.out.println(d);
    	System.out.println(t);    	
    }
}