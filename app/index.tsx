import ColorSelector from "@/components/ColorSelector";
import ImageSelector from "@/components/ImageSelector";
import ImageViewer from "@/components/ImageViewer";
import PrimaryDetails from "@/components/PrimaryDetails";
import { Text, View, Image } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <ImageViewer />
            <ImageSelector />
            <PrimaryDetails />
            <ColorSelector />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
