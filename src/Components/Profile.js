import React from 'react';
import Box from './Box';
import Avatar from './Avatar';
import Text from './Text';
import ProfileDetail from './ProfileDetail';

const Profile = (props) => {
  const { name, status, location, link, joined } = props.user;
  return (
    <Box width={'227px'} boxShadow={'0px 4px 60px rgba(26, 40, 60, 0.14)'}>
      <Avatar name={name} displayName={true} />
      <Text>{status}</Text>
      <ProfileDetail
        location={location}
        link={link}
        joined={joined}
      />
    </Box>
  );

}

export default Profile;