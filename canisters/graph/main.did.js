export default ({ IDL }) => {
 const EntryId = IDL.Nat32
 const EntryId_2 = EntryId
 return new IDL.ActorInterface({
  'connect': IDL.Func([IDL.Nat32, IDL.Nat32], [], []),
  'getConnections': IDL.Func([EntryId_2], [IDL.Vec(EntryId_2)], []),
  'healthcheck': IDL.Func([], [IDL.Bool], [])});
};
