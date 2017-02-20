using System;
class queue {
  
  public void que(out int[] ray, int size){
    ray = new int[size];
    int len = ray.Length;
    int placeHold = ray[len - 1];
    
    //Use decrementation
    for (int i = len - 2; i > 0; i--){
        ray[i + 1] = ray[i];
    }
    ray[0] = placeHold;
  }
  
  public static void Main (string[] args) {
    queue rayray = new queue();
    int[] xay = {1,2,3};
    rayray.que(xay,xay.Length);
    Console.WriteLine ("{0}",xay[0]);
  }
}
      
