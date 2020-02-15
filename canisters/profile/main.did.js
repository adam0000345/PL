export default ({ IDL }) => {
 const BitVec = IDL.Nat32
 const Hash = BitVec
 const PrincipalId = Hash
 const PrincipalId_3 = PrincipalId
 const NewProfile =
  IDL.Record({'imgUrl': IDL.Text, 'title': IDL.Text, 'education': IDL.Text,
   'experience': IDL.Text, 'company': IDL.Text, 'lastName': IDL.Text,
   'firstName': IDL.Text})
 const NewProfile_3 = NewProfile
 const Profile =
  IDL.Record({'id': PrincipalId, 'imgUrl': IDL.Text, 'title': IDL.Text,
   'education': IDL.Text, 'experience': IDL.Text, 'company': IDL.Text,
   'lastName': IDL.Text, 'firstName': IDL.Text})
 const Profile_3 = Profile
 return new IDL.ActorInterface({'connect': IDL.Func([PrincipalId_3], [], []),
  'create': IDL.Func([NewProfile_3], [PrincipalId_3], []),
  'get': IDL.Func([PrincipalId_3], [Profile_3], ['query']),
  'getConnections': IDL.Func([PrincipalId_3], [IDL.Vec(Profile_3)], []),
  'getOwn': IDL.Func([], [Profile_3], ['query']),
  'getOwnConnections': IDL.Func([], [IDL.Vec(Profile_3)], []),
  'healthcheck': IDL.Func([], [IDL.Bool], []),
  'isConnected': IDL.Func([PrincipalId_3], [IDL.Bool], []),
  'search': IDL.Func([IDL.Text], [IDL.Vec(Profile_3)], ['query']),
  'update': IDL.Func([Profile_3], [], [])});
};
