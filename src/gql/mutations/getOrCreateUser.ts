import gql from 'graphql-tag';

export default gql`
  mutation GetOrCreateUser($userId: String!, $userInfo: CardUserInfoInput) {
    getOrCreateUser(userId: $userId, userInfo: $userInfo) {
      created
      cardUser {
        email
        photoURL
        displayName
        userId
      }
    }
  }
`;
