using System;
namespace Application {
	public class EmptyClass {
		public int doubleInt(int nummy) {
			return nummy + nummy;
		}
		public static void Main(){
			int num = doubleInt(30);
			System.Console.WriteLine("{0}",num);
		}
	}
}
