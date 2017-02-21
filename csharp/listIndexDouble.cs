using System;
class  ListDouble {
  
  private void listDub(ref int[] ls){
    
    int size = ls.Length;
    for (int i = 0; i < size; i++){
        ls[i] = ls[i] + ls[i];
    }
  }
  
  public static void Main (string[] args) {
    
    ListDouble obj = new ListDouble();
    int[] evens = {2,4,6,8,10};
    
    obj.listDub(ref evens);
    obj.listDub(ref evens);
    obj.listDub(ref evens);
    
    Console.WriteLine ("{0}",string.Join(",",evens));
  }
}
      
