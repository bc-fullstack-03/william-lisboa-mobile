import { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { UserCircle, PencilSimple } from "phosphor-react-native";
import { Context as AuthContext } from "../../context/AuthContext";

import { styles } from "./styles";

export function PostList({ navigation }) {
    const { user } = useContext(AuthContext)
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <UserCircle color="white" size={48} weight="thin" />
                <Text style={styles.userNameText}>{user}</Text>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
                    <PencilSimple color="white" size={40} weight="thin" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}