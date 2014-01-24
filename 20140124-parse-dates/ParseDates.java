import java.io.BufferedReader;                                                                                                                                                    
import java.io.InputStreamReader;                                                                                                                                                 
import java.io.IOException;                                                                                                                                                       
import java.util.Date;                                                                                                                                                            
import java.text.SimpleDateFormat;                                                                                                                                                
import java.text.DateFormat;                                                                                                                                                      
import java.util.Locale;                                                                                                                                                          
import java.text.ParseException;                                                                                                                                                  
                                                                                                                                                                                  
public class ParseDates {                                                                                                                                                          
                                                                                                                                                                                  
    public static void main(String[] args) {                                                                                                                                      
                                                                                                                                                                                  
        try {                                                                                                                                                                     
                                                                                                                                                                                  
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));                                                                                             
            String line;                                                                                                                                                          
            while ((line = br.readLine()) != null) {                                                                                                                              
                DateFormat df = new SimpleDateFormat("ddMMyyyy-kk:mm:ss", Locale.ENGLISH);                                                                                        
                Date d = df.parse(line);                                                                                                                                          
                System.out.println(d.getTime());                                                                                                                                  
            }                                                                                                                                                                     
        }                                                                                                                                                                         
        catch (IOException e) {                                                                                                                                                   
            e.printStackTrace();                                                                                                                                                  
        }                                                                                                                                                                         
        catch (ParseException e) {                                                                                                                                                
            e.printStackTrace();                                                                                                                                                  
        }                                                                                                                                                                         
    }                                                                                                                                                                             
}                                                                                                                                                                                 
