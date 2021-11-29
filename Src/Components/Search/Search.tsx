import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
} from "react-native";
import { Back, Recent } from "../../../assets/svg";
import styles from "./styles";
import LocationCard from "../../Components/LocationCard/LocationCard";
import Spacing from "../../globalStyles/Spacing";
import { AntDesign, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import assets from "../../../assets";

const Search = ({ navigation, ModalVisible }: any) => {
  const [searchText, setSearchText] = useState<string>("");
  const [favouriteCity, setFavouriteCity] = useState<Array<string>>([]);
  const [recents, setRecents] = useState<Array<object>>([
    { street: "", city: "", country: "" },
  ]);

  const details = [
    {
      id: "1",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      street: "Delhi",
      country: "India",
    },
    {
      id: "2",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      street: "Delhi",
      country: "India",
    },
    {
      id: "3",
      img: assets.rainy,
      temp: "24",
      city: "Delhi",
      street: "Delhi",
      country: "India",
    },
  ];

  const handleFavourite = async (item: any) => {
    try {
      const m = [];
      const data = await AsyncStorage.getItem("climeeFavouriteCity");
      if (data === null || data === undefined || data?.length === 0) {
        m.push(item);
        await AsyncStorage.setItem("climeeFavouriteCity", JSON.stringify(m));
      } else {
        let d = JSON.parse(data);
        d.push(item);
        await AsyncStorage.setItem("climeeFavouriteCity", JSON.stringify(d));
        const Recent = await AsyncStorage.getItem("climeeRecentsCity");
        const r = JSON.parse(Recent);
        const ds = r?.filter((e) => e?.street !== item?.street);
        await AsyncStorage.setItem("climeeRecentsCity", JSON.stringify(ds));
        const Recents = await AsyncStorage.getItem("climeeRecentsCity");
        setRecents(JSON.parse(Recents));
        const datas = await AsyncStorage.getItem("climeeFavouriteCity");
        setFavouriteCity(JSON.parse(datas));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem("climeeFavouriteCity");
        setFavouriteCity(JSON.parse(data));
        //  await AsyncStorage.removeItem("climeeFavouriteCity");
        const Recent = await AsyncStorage.getItem("climeeRecentsCity");
        setRecents(JSON.parse(Recent));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleRemoveLocation = async (item: any) => {
    try {
      const d = await AsyncStorage.getItem("climeeFavouriteCity");
      const data = JSON.parse(d);
      const newLocations = await data?.filter(
        (e: any) => e?.street !== item?.street
      );
      await setFavouriteCity(newLocations);
      await AsyncStorage.setItem(
        "climeeFavouriteCity",
        JSON.stringify(newLocations)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const renderRecentSearchs = (item: any) => (
    <>
      <View style={styles.recentSearchesContainer}>
        <View style={{ flex: 0.1, alignItems: "flex-start", paddingLeft: 10 }}>
          <Recent height={20} width={20} />
        </View>
        <View style={{ flex: 0.8, alignItems: "flex-start" }}>
          <Text style={styles.currentLocationText}>{item?.street}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.locationText}>{item?.city}, </Text>
            <Text style={styles.locationText}>{item?.country}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{ flex: 0.1 }}
          onPress={() => handleFavourite(item)}
        >
          <AntDesign name="staro" size={24} color="#363B64" />
        </TouchableOpacity>
      </View>
      <View style={[styles.borderBottom, { width: "70%" }]} />
    </>
  );

  const handleSearchSubmit = async (value: string) => {
    const locationobj = { street: value, city: "Delhi", country: "India" };
    let m = [];
    const data = await AsyncStorage.getItem("climeeRecentsCity");
    const d = JSON.parse(data);
    if (d === undefined || d === null || d?.length === 0) {
      m.push(locationobj);
      AsyncStorage.setItem("climeeRecentsCity", JSON.stringify(m));
    } else {
      d.push(locationobj);
      AsyncStorage.setItem("climeeRecentsCity", JSON.stringify(d));
    }
    const Recent = await AsyncStorage.getItem("climeeRecentsCity");

    setRecents(JSON.parse(Recent));
    setSearchText("");
  };

  return (
    <>
      <SafeAreaView>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => ModalVisible(false)}>
            <Back />
          </TouchableOpacity>
          <TextInput
            placeholder="Search City"
            value={searchText}
            style={styles.searchInput}
            onChangeText={(text: string) => setSearchText(text)}
            // onKeyPress={(e) => handleKey(e)}
            onSubmitEditing={() => handleSearchSubmit(searchText)}
          />
        </View>

        {/* Current location */}
        <View style={{ marginVertical: Spacing.MARGIN_5 }}>
          <LocationCard
            current={true}
            city="Sahibzada Ajit Singh Nagar"
            country="India"
          />
        </View>

        {/* Favourite Cities */}
        <View style={{ marginBottom: Spacing.MARGIN_5 }}>
          <FlatList
            data={favouriteCity}
            bounces={false}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <>
                <LocationCard
                  removeLocation={handleRemoveLocation}
                  current={false}
                  city={item?.city}
                  street={item?.street}
                  country={item?.country}
                />
                <View style={[styles.borderBottom, { width: "50%" }]} />
              </>
            )}
          />
        </View>

        {/* Recent Searchs*/}
        <FlatList
          data={recents?.filter((e) => e?.street !== "")}
          bounces={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderRecentSearchs(item)}
          ListHeaderComponent={() => {
            return (
              <View style={styles.recentContainer}>
                <Text style={styles.recentText}>Recents</Text>
                <Menu>
                  <MenuTrigger>
                    <Feather name="more-vertical" size={24} color="#9B9B9B" />
                  </MenuTrigger>
                  <MenuOptions >
                    {/* <View style={{flex: 1, opacity: 1}}> */}
                    <MenuOption
                      onSelect={() => alert(`Save`)}
                      text="Save"
                      />
                    <MenuOption onSelect={() => alert(`Delete`)}>
                      <Text style={{ color: "red" }}>Delete</Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Not called`)}
                      disabled={true}
                      text="Disabled"
                      />
                    {/* </View> */}
                  </MenuOptions>
                </Menu>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Search;
