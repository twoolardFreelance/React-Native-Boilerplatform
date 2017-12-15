import React from 'react';
import { ScrollView } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppColors from '../constants/colors';

const Profile = () => (
  <ScrollView>
    <Text h4>Profile</Text>

    <List containerStyle={{ marginBottom: 20 }}>
      <ListItem
        title="Sign Up"
        onPress={Actions.signUp}
      />
    </List>
  </ScrollView>
);

export default Profile;
