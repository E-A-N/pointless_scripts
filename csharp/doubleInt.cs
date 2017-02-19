using System;
namespace Application { 
	
	public class doubleDub {
		
		public int doubler(int nummy){
			return nummy + nummy;
		}

		static void Main(){
			int numb = 77;
			doubleDub z = new doubleDub();
			int result = z.doubler (numb);

			Console.WriteLine ("double of {0} is {1}", numb, result);
			Console.ReadLine ();
		}
	}
}
