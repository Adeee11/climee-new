import React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
} from "react-native";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import { Back, Recent } from "../../../assets/svg";
import styles from "./styles";
import LocationCard from "../../Components/LocationCard/LocationCard";
import Spacing from "../../globalStyles/Spacing";
import { AntDesign, Feather } from "@expo/vector-icons";
import assets from "../../../assets";
import colors from "../../globalStyles/colors";

const Search = ({ navigation }: any) => {
  const details = [
    {
      id: "1",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    {
      id: "2",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    {
      id: "3",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
  ];

  const renderRecentSearchs = (item: any) => (
    <>
      <View style={styles.recentSearchesContainer}>
        <View style={{ flex: 0.1, alignItems: "flex-start", paddingLeft: 10 }}>
          <Recent height={20} width={20} />
        </View>
        <View style={{ flex: 0.8, alignItems: "flex-start" }}>
          <Text style={styles.currentLocationText}>{item?.city}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.locationText}>{item?.state}, </Text>
            <Text style={styles.locationText}>{item?.country}</Text>
          </View>
        </View>
        <TouchableOpacity style={{ flex: 0.1 }}>
          <AntDesign name="staro" size={24} color="#363B64" />
        </TouchableOpacity>
      </View>
      <View style={[styles.borderBottom, { width: "70%" }]} />
    </>
  );

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <SafeAreaView>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <TextInput placeholder="Search City" style={styles.searchInput} />
        </View>

        {/* Current location */}
        <View style={{ marginVertical: Spacing.MARGIN_5 }}>
          <LocationCard
            current={true}
            state="Sahibzada Ajit Singh Nagar"
            country="India"
          />
        </View>

        {/* Favourite Cities */}
        <View style={{ marginBottom: Spacing.MARGIN_5 }}>
          <FlatList
            data={details}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <>
                <LocationCard
                  current={false}
                  city={item.city}
                  state={item?.state}
                  country={item?.country}
                />
                <View style={[styles.borderBottom, { width: "50%" }]} />
              </>
            )}
          />
        </View>

        {/* Recent Searchs*/}
        <FlatList
          data={details}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderRecentSearchs(item)}
          ListHeaderComponent={() => {
            return (
              <View style={styles.recentContainer}>
                <Text style={styles.recentText}>Recents</Text>
                <Feather name="more-vertical" size={24} color="#9B9B9B" />
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Search;
