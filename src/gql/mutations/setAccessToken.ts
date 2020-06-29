import gql from 'graphql-tag';
import { PlaidInstitutionFragment } from '../fragments/institution';
import PlaidItemFragment from '../fragments/item';
import PlaidAccessTokenFragment from '../fragments/accessToken';

export default gql`
  mutation SetAccessToken($publicToken: String!) {
    setAccessToken(publicToken: $publicToken) {
      ...PlaidAccessToken
      item {
        ...PlaidItem
      }
      institution {
        ...PlaidInstitution
      }
    }
  }

  ${PlaidAccessTokenFragment}
  ${PlaidInstitutionFragment}
  ${PlaidItemFragment}
`;
