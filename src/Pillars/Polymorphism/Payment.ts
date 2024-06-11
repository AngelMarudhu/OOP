export class Payment {
  //   amount: number;
  //   currency: string;
  //   sender: string;

  //   constructor(amount: number, currency: string, sender: string) {
  //     this.amount = amount;
  //     this.currency = currency;
  //     this.sender = sender;
  //   }

  constructor() {}

  processingPayment(): void {
    console.log("processing payment from payment class");
  }

  /// All overloaded methods must share the same name.
  /// Only one implementation of the method is provided. This implementation must handle all defined overload signatures. This is usually done using union types and type guards.

  /// The return type does not play a role in determining which overloaded method is called. Overloaded methods must differ based on their parameter lists, not their return types

  /// In TypeScript, the return type is not considered when determining which overload signature to use. Only the method name and the parameter list are used.

  /// The actual implementation must be capable of handling the union of all parameter types defined in the overload signatures. Type guards (such as typeof checks) are commonly used to distinguish between different types at runtime

  //// Parameter-Based Overloading: TypeScript matches methods based on the parameter list (number, types, and order), not the return type.

  // Return Type Enforcement: Once the appropriate overload is matched, TypeScript enforces that the actual implementation returns the type specified in the overload signature.

  /// Why Return Type Alone Can't Be Used
  // The reason why return type alone can't be used for method overloading is that the compiler wouldn't know which method to call based only on the return type since the return type is determined after the method is called, not before. The decision has to be made based on the parameters given to the method at the time of the call

  /// how compiler take decision
  /// TypeScript, when determining which overload signature to use, the TypeScript compiler looks at the parameter types provided in the method call and matches them with the parameter types specified in the overload signatures. Once the appropriate overload signature is matched, the compiler then looks at the return type specified in that particular overload signature.

  //// Why Return Type is Not Considered
  // Ambiguity:
  // If TypeScript allowed overloads to differ by return type, it would introduce ambiguity. The compiler would not have enough information based solely on the method name and parameters to determine which method to call.

  //// Method signatures or overload signatures

  // process(amount: number): number; // Not allowed
  // process(amount: number): string; // Not allowed

  process(amount: number): number;
  process(amount: number, currency: string): string;
  process(amount: number, currency: string, method: string): void;

  // This implementation must handle all overload signatures
  // there is no depend on any return type that's all
  process(
    amount: number,
    currency?: string,
    method?: string
  ): void | number | string {
    if (currency === undefined && method === undefined) {
      console.log(`Processing amount: ${amount}`);
      return amount;
    } else if (method === undefined) {
      console.log(`Processing amount: ${amount} in currency: ${currency}`);
      return "amount";
    } else {
      console.log(
        `Processing amount: ${amount} in currency: ${currency} using method: ${method}`
      );
    }
  }
}

let out = new Payment();
let done = out.process(33);
console.log(done);
