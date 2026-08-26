// what the CLIENT must send to create one

export class CreateUserDto {
  name!: string;
}

// "the body of this request should be an object with a name property that's a string."
// It's a contract for incoming data.

//DTO plays completly different role than User intarface
// export interface User {       // what a user IS in our system
//   id: number;
//   name: string;
//   email: string;
// }

// They differ on purpose. The client doesn't send id — the server assigns that.
// So the DTO is the input shape, and User is the stored shape.
// Keeping them separate is the point;
// when you later add password to the create-DTO but never want it in a response,
// you'll be glad they're two different types.

// And a detail you'll hit soon: DTOs are class, not interface,
// specifically because interfaces disappear at compile time.
// A class survives into the JS output, which gives decorators like @IsString() something real to attach to.
