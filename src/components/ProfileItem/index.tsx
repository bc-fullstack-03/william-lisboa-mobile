import React from "react";
import { View, Text } from "react-native";


import { UserCircle } from "phosphor-react-native";
import { styles } from "./styles";
import Button from "../Button";


interface ProfileItemProps {
    profile: Profile;
    handleFollowAction: (profileId: string) => void;
    userAuth: string
}

interface Profile {
    _id: string;
    name: string;
    following: string[];
    followers: string[];
}

export function ProfileItem({ profile, handleFollowAction,userAuth}: ProfileItemProps) {
    return (
        <View style={styles.profileCard}>
            <View style={styles.profileIdentification}>
              <UserCircle color='white' weight='thin' size={24} />
              <Text style={styles.profileNameText}>{profile.name}</Text>
            </View>
            <Text style={styles.followers}>{`Seguidores ${profile.followers.length}`}</Text>
            <Text style={styles.following}>{`Seguindo ${profile.following.length}`}</Text>
            <Button 
             title={profile.followers.includes(userAuth) ? "Seguindo" : "Seguir"}
             onPress={() => handleFollowAction(profile._id)} 
             disabled={profile.followers.includes(userAuth)} 
            />
        </View>
    );
}