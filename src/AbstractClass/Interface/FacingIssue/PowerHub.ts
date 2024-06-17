export interface PowerHub {
  powerOn(): void;
  powerOff(): void;

  //// we can't add static member in the interface only instance level member not possible to even static implementation

  //   static Marudhu(): void;
}
//////                                      DISCLAIMER
////// first point this everything about how typescript and javascript react when use interface so no chaos

// THROUGH INTERFACE WE CAN BUILD SOOPER DOOPER CUSTOM CLASSES WITH WELL STRUCTURED MANNER

// interface can't be instantiated

// interface only contains well structure code and contracts for all subclasses and methods without implementation which means as it abstract class no curly braces and no body one overridden methods and you must implement all the methods in a derived class

// what was the main reason for talked about these yes it's multiple inheritance till abstract class we can't make multiple inheritance through classes but one good news here it's possible to make multiple inheritance along with soooper flexibility such as multiple interface with implement with single class individual interface methods react depend on the body and object

// one more sooper interface cannot hold any access modifiers it's implicitly assigned public all of them so no confusion i hope you know why it is because other then public two modifiers having sooper controllers so not possible

// interface uses "implements" keyword for implement interfaces

//                                       MILD DISADVANTAGE

// js engine doesn't have run time execution for interface methods only compile time that means only type checking no more run time decision so keep conscious why because when using two interface same method name js engine will confuse which method to execute in the compile time just checking the type and structure the method already contains or not in a class one of the disadvantage "no runtime impact happen" JAVA HANDLE THOSE ISSUE WITH DIFFERENT MANNER SO NO COMPARISON we have solution no worry i'll explain solution folder in this folder you can see the what is the issue
