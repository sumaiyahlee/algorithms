public class Interview10 {
    public static int lengthOfLastWord(String s) { 
        int total = 0;
        int num = s.length();
        boolean alert = false;
        if(s == null || s.length() == 0)
            return 0;

        for (int i = num - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')){
                alert = true;
                total++;
            } else {
                if (alert == true) {
                return total;
                }
            }
        }  
        return total;
    }
    
    public static void main (String [] args) {
        System.out.println ("Hello World: " + lengthOfLastWord("Hello World"));
        // System.out.println ("Sumaiyah: " + lengthOfLastWord("Sumaiyah"));
    }
}