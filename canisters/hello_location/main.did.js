export default ({ IDL }) => {
 return new IDL.ActorInterface({
  'location': IDL.Func([IDL.Text], [IDL.Text], [])});
};
