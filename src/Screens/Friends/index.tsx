import { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { api } from '../../services/api';
import { SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { ProfileItem } from '../../components/ProfileItem';

function Friends() {
  const { token, profile } = useContext(AuthContext);
  const [profilesList, setProfilesList] = useState([]);
  const [updatedFollowing,setUpdateFollowing] = useState({})
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
      await api.post(`/profiles/${profileId}/follow`, null, authHeader);
      setProfilesList((profiles) => {
        const newProfiles = profiles.map((profiles) => {
          if (profiles._id == profileId) {
            !profiles.followers.includes(profile) &&
              profiles.followers.push(profile);
          }
          return profiles;
        });
        return [...newProfiles];
      });

      setUpdateFollowing({updated:true})
    } catch (err) {
      alert('Erro ao seguir usuario');
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
           shouldUpdateFollow={updatedFollowing}
           handleFollowAction={handleFollow} 
           userAuth={profile}
          />
        )}
      ></FlatList>
     </SafeAreaView>
  );
}

export default Friends;