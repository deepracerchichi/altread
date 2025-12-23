import { Redirect, useRouter } from "expo-router";
import { Starter } from "../components/Starter";
import { ThemedLoader } from "../components/ThemedLoader"
import { useUser } from "../hooks/useUser"

export default function Load() {
    
    const router = useRouter();
    // @ts-ignore
    const {authChecked, user} = useUser()
    if (!authChecked) {
        return (
            <Starter />
        );
    }

    if (user) {
      return <Redirect href={"/(dashboard)/profile"} />
    }
        
    
    return <Redirect href={"/(auth)/login"} />
}