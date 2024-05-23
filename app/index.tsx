import ColorSelector from "@/components/ColorSelector";
import Footer from "@/components/Footer";
import FrequentlyBrought from "@/components/FrequentlyBrought";
import ImageSelector from "@/components/ImageSelector";
import ImageViewer from "@/components/ImageViewer";
import PrimaryDetails from "@/components/PrimaryDetails";
import ProductDescription from "@/components/ProductDescription";
import SizeDescription from "@/components/SizeDescription";
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
            <ProductDescription />
            <SizeDescription />
            <FrequentlyBrought />
          </View>
        </ScrollView>
        <Footer />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
