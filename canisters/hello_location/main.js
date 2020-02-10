import actorInterface from "ic:idl/hello_location";

export default icHttpAgent.makeActorFactory(actorInterface)({
  canisterId: "ic:B74AB9177366A22CFB",
});
