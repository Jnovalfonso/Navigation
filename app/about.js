import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

const About = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Link href="/" asChild>
        <Pressable>
          <Text>Go To Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default About;