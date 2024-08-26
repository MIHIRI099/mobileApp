import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          borderRadius: 100,
          width: 220,
          height: 220,
          backgroundColor: '#F0F0F0',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Image
          source={require('./../assets/images/Home.png')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      </View>

      <Pressable>
        <Link
          href={'/login'}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 60,
            borderRadius: 50,
            backgroundColor: '#1D0F84',  // Starting color for gradient
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto-medium',
              color: 'white',
              fontSize: 22,
              letterSpacing: 1,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Get Started
          </Text>
        </Link>
      </Pressable>
    </View>
  );
}
