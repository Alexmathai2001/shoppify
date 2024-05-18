

import ImageSelector from "@/components/ImageSelector";
import ImageViewer from "@/components/ImageViewer";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
        <View>
            <ImageViewer />
            <ImageSelector />
        </View>
    </SafeAreaView>
  );
}
