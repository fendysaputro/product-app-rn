import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./navigation/bottomTabs";
import ProductDetail from "./screens/productDetail";

import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}
