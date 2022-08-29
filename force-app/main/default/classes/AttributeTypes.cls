public class AttributeTypes {
    
 @AuraEnabled
    public static String[] getStringArray() {
        String[] arrayItems = new String[]{ 'red', 'green', 'blue' };
        return arrayItems;
    }

}