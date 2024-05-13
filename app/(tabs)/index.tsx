import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      {/* Define pour custom header */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <ListingsMap listings={getoItems} />
      <ListingsBottomSheet listings={items} category={category} /> */}
    </View>
  );
};

export default Page;
