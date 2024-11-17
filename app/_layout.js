import { Stack } from 'expo-router/stack';
import Home from './index';
import About from './about';

export default function Layout() {
  return (
    <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#0096FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    />
    );  
}
