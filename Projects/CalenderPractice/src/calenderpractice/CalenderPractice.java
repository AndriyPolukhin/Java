package calenderpractice;
//import java.pk1.pkg2.----.pkn.class|*;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
//import java.util.*;


public class CalenderPractice {

    public static void main(String[] args) {
        // TODO code application logic here
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, 68);
        System.out.println(cal.getTime());
        
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        String formatted = format1.format(cal.getTime());
        System.out.println(formatted);
        
    }
    
}
