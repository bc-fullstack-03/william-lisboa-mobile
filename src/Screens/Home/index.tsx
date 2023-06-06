import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PostProvider } from "../../context/PostContext";
import { PostList } from "../PostList/index";
import { CreatePost } from "../CreatePost/index";

const Stack = createNativeStackNavigator();

function Home() {
    return (
      <PostProvider>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            statusBarStyle: "dark",
          }}
        >
          <Stack.Screen name="PostList" component={PostList} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </PostProvider>
    );
}

export default Home;