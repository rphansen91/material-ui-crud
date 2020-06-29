import gql from 'graphql-tag';
import CardUserDeviceFragment from '../fragments/device';

export default gql`
  mutation SetDeviceHidden($id: ObjectId!, $hidden: Boolean!) {
    setDeviceHidden(id: $id, hidden: $hidden) {
      ...CardUserDevice
    }
  }
  ${CardUserDeviceFragment}
`;
