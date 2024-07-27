import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Bienvenue sur Eiga!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Allez à l'Accueil
      </Link>
    </View>
  );
}
