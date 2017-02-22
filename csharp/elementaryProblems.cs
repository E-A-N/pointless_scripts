/*
  Elementary Problems section from https://adiann.github.io/programming_problems.html
*/


/*
    1. Write a program that prints ‘Hello World’ to the screen.
*/
using System;
class MainClass {
  
  public static string herro(){
    return "Herro World!";
  }
  
  public static void Main (string[] args) {
    string msg = herro();
    Console.WriteLine ("{0}",msg);
  }
}
      
/*
    2. Write a program that asks the user for her name and greets her with her name.
*/      

using System;
class MainClass {
  
  public static string herro(){
      string name;
      Console.WriteLine("Hi, what is your name?");
      name = Console.ReadLine();
      return name;
      
  }
  
  public static void sayName(string name){
      Console.WriteLine("Hi {0}, how are you?",name);
  }
  
  public static void Main (string[] args) {
    string myName = herro();
    sayName(myName);
  }
}

/*
    3. Modify the previous program such that only the users Alice and Bob are greeted with their names.
*/

using System;
class MainClass {
  
  public static string herro(){
      string name;
      Console.WriteLine("Hi, what is your name?");
      name = Console.ReadLine();
      return name;
      
  }
  
  public static void sayName(string name){
      string greeting;
      
      if (name == "Alice" || name == "Bob"){
          greeting = String.Format("Hi {0}, how are you?",name);
      }
      else{
          greeting = String.Format("Sorry {0}, that name just doesn\'t ring a bell",name);
      }
    
      Console.WriteLine(greeting);
  }
  
  public static void Main (string[] args) {
    string myName = herro();
    sayName(myName);
  }
}

/*
    4. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
*/

using System;
class MainClass {
  
  public int getNumber(){
      
      Console.WriteLine("Enter a number: ");
      int num = Convert.ToInt32(Console.ReadLine());
      
      num = Convert.ToInt32(num);
      return num;
  }
  
  public int getSums(int num){
      int accumulate = 0;
      for(int i = 0; i < num + 1; ++i){
          accumulate += i;
        
      }
      return accumulate;
  }
  
  
  
  public static void Main (string[] args) {
    
    int number;
    int totalSums;
    //Instantiate new class
    MainClass program = new MainClass();
    
    //Collect data
    number = program.getNumber();
    totalSums = program.getSums(number);
    
  
    Console.WriteLine (totalSums);
  }
}
      
