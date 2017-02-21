using System;
class queue {
  
    //returns copy of array
    public int[] que(int[] ray, int size){
        int len = size;
        int placeHold = ray[len - 1];
        
        //Shift array starting from the end
        for (int i = len - 2; i > -1; i--){
            ray[i + 1] = ray[i];
        }
        ray[0] = placeHold;
        return ray;
    }
    
    public static void Main (string[] args) {
        queue xVar = new queue();
        
        int[] xay = {1,2,3,4};
        
        xay = xVar.que(xay,xay.Length);
        Console.WriteLine ("{0}",string.Join(",",xay));
    }
}
