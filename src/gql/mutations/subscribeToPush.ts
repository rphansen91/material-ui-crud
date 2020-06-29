import gql from 'graphql-tag';

export default gql`
  mutation SubscribeToPush($token: String!, $userInfo: CardUserInfoInput) {
    subscribeToPush(token: $token, userInfo: $userInfo)
  }
`;
