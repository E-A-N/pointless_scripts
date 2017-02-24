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
      
/*
    5. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
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
          if (i % 3 == 0 || i % 5 == 0){
              accumulate += i;
          }
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
      
/*
  6. Write a program that asks the user for a number n and gives him the 
     possibility to choose between computing the sum and computing the product of 1,…,n.
*/


using System;
class nameAndNum {
  
    //attributes
    private string name;
    private int number;
    private int decision;
    
    //setters
    private void setName(){
        string name;
        Console.WriteLine("Herro Robo, what is your name?: ");
        name = Console.ReadLine();
        Console.WriteLine("It\'s nice to meet you, {0}",name);
        
        this.name = name;
    }
    private void setNumber(){
        int num;
        Console.WriteLine("Herro {0}, what\'s your favorite number?: ",this.name);
        num = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("{0} is your number, {1}!",num,this.name);
        
        this.number = num;
    }
    private void setDecision(){
        int decision;
        string msg = "Press 1 to get sums to {0}: \nPress 2 to get product to {0}: \nPress 0 to quit!";
        Console.WriteLine(msg,this.number);
        decision = Convert.ToInt32(Console.ReadLine());
        
        this.reiterateDecision(decision);
        this.decision = decision;
    }
    
    //Behaviors
    private void reiterateDecision(decision){
        string msg;
        switch(decision){
          
            case 1:
                msg = "You wish to add all of the numbers from 0  to {0}! Cool {1}!";
                Console.WriteLine(msg,this.number,this.name);
                break;
                
            case 2:
                msg = "You wish to multiply all of the numbers from 0 to {0}! That\'s pretty awesome {1}!";
                Console.WriteLine(msg,this.number,this.name);
                break;
                
            case 0:
                msg = "Sorry {0}, that\'s unfortunate!";
                Console.WriteLine(msg,this.name);
                break;
          
        }
    }
    
    public static void Main (string[] args) {
        nameAndNum app; //initialize program
        
        app = new nameAndNum(); //instantiate program
        app.setName();
        app.setNumber();
        app.setDecision();
    }
}
