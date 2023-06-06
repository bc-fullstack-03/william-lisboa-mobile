import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PostContext } from "../../context/PostContext";

import { UserCircle } from "phosphor-react-native";
import { File } from "../../Model/File"

import PostImagePicker from "../../components/PostImagePicker";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import THEME from "../../THEME";

export function CreatePost() {
    const { user } = useContext(AuthContext);
    const { createPost } = useContext(PostContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File>();
   
    return (
        <View  style={styles.container}>
            <View style={styles.heading}>
                <UserCircle color="white" size={48} weight="thin" />
                <Text style={styles.userNameText}>{user}</Text>
            </View>
            <Spacer />
            <Input.Root>
                <Input.Input 
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Qual é o título do post?'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCorrect={false}
                />
            </Input.Root>
            <Spacer />
            <Input.Root>
                <Input.Input 
                    value={description}
                    onChangeText={setDescription}
                    placeholder='Qual é a descrição do post?'
                    placeholderTextColor={THEME.COLORS.INPUT}
                    autoCorrect={false}
                />
            </Input.Root>
            <Spacer />
            <PostImagePicker onFileLoaded={setImage} />
            <Spacer />
            <Button
                title="Postar"
                onPress={() => {
                    createPost({ title, description, image })
                }} 
            />
        </View>
    );
}