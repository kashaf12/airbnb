import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListingId = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>ListingId {id}</Text>
    </View>
  );
};

export default ListingId;
