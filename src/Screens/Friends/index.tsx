import { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { api } from '../../services/api';
import { SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { ProfileItem } from '../../components/ProfileItem';

function Friends() {
  const { token, profile } = useContext(AuthContext);
  const [profilesList, setProfilesList] = useState([]);
  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const { data } = await api.get("/profiles", authHeader);
        setProfilesList(data);
      } catch (err) {}
    };

    getProfiles();
  }, []);

  async function handleFollow(profileId: string) {
    try {
      const profileIndex = profilesList.findIndex((profile) => profile._id === profileId);

      if (profileIndex === -1) {
        return;
      }

      const profile = profilesList[profileIndex];

      if (profile.followers.includes(profileId)) {
        return;
      }

      await api.post(`/profiles/${profileId}/follow`, null, authHeader);

      const updatedProfiles = [...profilesList];
      updatedProfiles[profileIndex] = {
        ...profile,
        followers: [...profile.followers, profileId],
      };

      setProfilesList(updatedProfiles);
    } catch (err) {
      alert("Erro ao tentar seguir o usuário");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profilesList.filter(({_id}) => profile !== _id)}
        keyExtractor={({_id}) => _id} 
        renderItem={({item}) => (
          <ProfileItem 
           key={item._id}
           profile={item} 
           handleFollowAction={() => handleFollow(item._id)} 
           userAuth={profile}
          />
        )}
      ></FlatList>
     </SafeAreaView>
  );
}

export default Friends;