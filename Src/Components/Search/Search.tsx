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
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Location from "expo-location";
import weatherApi from "../../api/axios";
import {
  pollutionDetails,
  weatherDetails,
  weatherDetailsLoading,
} from "../../redux/actions/weatherActions";
import api from "../../globalStyles/api";

const Search = ({ ModalVisible, weatherDetail }: any) => {
  interface Searchresult {
    place_id: string;
    description: string;
  }

  const [searchText, setSearchText] = useState<string>("");
  const [favouriteCity, setFavouriteCity] = useState<Array<string>>([]);
  const [recents, setRecents] = useState<Array<object>>([
    { latitude: 0, longitude: 0, street: "", city: "", country: "" },
  ]);
  const [searchResult, setSearchResult] = useState<Array<Searchresult>>([]);
  const [placeId, setPlaceId] = useState<string | null>(null);

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

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const res: any = await axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&types=geocode&key=AIzaSyBXG8JrE9C2wKktMK-lDJkHNbYyuL4cr34`
        );
        await setSearchResult(res?.data?.predictions);
        console.log(searchText);
        
      } catch (Err) {
        console.log(Err);
      }
      // setLoading(false);
    })();
  }, [searchText]);

  useEffect(() => {
    (async () => {
      try {
        weatherDetailsLoading(true);
        const currLoc = await AsyncStorage.getItem("climeeCurrentLocation");
        const res: any = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyBXG8JrE9C2wKktMK-lDJkHNbYyuL4cr34`
        );
        if (res?.data?.result?.geometry?.location?.lat === undefined) {
          return;
        }
        const place = await Location.reverseGeocodeAsync({
          latitude: res?.data?.result?.geometry?.location?.lat,
          longitude: res?.data?.result?.geometry?.location?.lng,
        });
        const locationObj = {
          longitude: res?.data?.result?.geometry?.location?.lng,
          latitude: res?.data?.result?.geometry?.location?.lat,
          city: place[0]?.city,
          country: place[0]?.country,
          street: place[0]?.street,
          place_id: placeId,
        };
        const response: any = await weatherApi.get(
          `/onecall?lat=${res?.data?.result?.geometry?.location?.lat}&lon=${res?.data?.result?.geometry?.location?.lng}&appid=${api}&units=metric`
        );
        const resp: any = await weatherApi.get(
          `/air_pollution?lat=${res?.data?.result?.geometry?.location?.lat}&lon=${res?.data?.result?.geometry?.location?.lng}&appid=${api}`
        );
        // changeAppTheme(response.data.current.weather[0].main);
        const details = [];
        const pollution = [];
        details.push({
          weatherDetails: response?.data,
          locationDetails: locationObj,
        });
        pollution.push({
          pollutionDetails: resp?.data?.list[0],
        });
        weatherDetails(details);
        pollutionDetails(pollution);
        // handleFavourite();
        const data = await favouriteCity?.filter((e) => {
          console.log(e);
          
          return e?.place_id === placeId;
        });
        console.log('placeId ', placeId);
        
        // console.log(JSON.parse(currLoc)?.street?.toLowerCase());
        // console.log(place[0]?.street?.toLowerCase())
        console.log('data', data)
        // console.log(data !== undefined || data?.length !== 0 || data !== null || JSON.parse(currLoc)?.street?.toLowerCase() !== place[0]?.street?.toLowerCase());
        // console.log(data?.length !== 0);
        // console.log(JSON.parse(currLoc)?.street?.toLowerCase() !== place[0]?.street?.toLowerCase());
        
        
        if (JSON.parse(currLoc)?.street?.toLowerCase() !== place[0]?.street?.toLowerCase() && data?.length !== 0) {
          handleSearchSubmit(locationObj);
        }
        weatherDetailsLoading(false);
        setSearchResult([]);
        ModalVisible(false);
      } catch (err) {
        console.log(err);
      }
      // setLoading(false);
    })();
  }, [placeId]);

  const handleRemoveLocation = async (item: any) => {
    try {
      const d = await AsyncStorage.getItem("climeeFavouriteCity");
      const data = JSON.parse(d);
      const newLocations = await data?.filter(
        (e: any) => e?.street?.toLowerCase() !== item?.street?.toLowerCase()
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

  const handleShowDetails = async (item: any) => {
    // setSearchText(item?.city)
    // console.log(item);
    const str = `${item?.street}, ${item?.city}, ${item?.country}`;
    const res: any = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${str}&types=geocode&key=AIzaSyBXG8JrE9C2wKktMK-lDJkHNbYyuL4cr34`
    );
    setPlaceId(res?.data?.predictions[0]?.place_id);
  };

  const handleAllRemoveLocation = async () => {
    try {
      await AsyncStorage.removeItem("climeeRecentsCity");
      setRecents([]);
    } catch (error) {
      console.log(error);
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

  const handleSearchSubmit = async (value: any) => {
    const locationobj = {
      latitude: value?.latitude,
      longitude: value?.longitude,
      street: value?.street,
      city: value?.city,
      country: value?.country,
      place_id: value?.place_id,
    };
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
            onSubmitEditing={() => handleSearchSubmit(searchText)}
          />
        </View>

        {/* <SearchBar value={handleSearchValue} /> */}
        {searchResult.length !== 0 ? (
          <View style={styles.bottomView1}>
            <FlatList
              data={searchResult}
              keyExtractor={(item) => item?.place_id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => setPlaceId(item?.place_id)}
                    style={styles.searchTextWrapper}
                  >
                    <Text style={styles.searchTextStyle}>
                      {item?.description}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}

        {/* Current location */}
        {searchResult.length > 0 ? null : (
          <View style={{ marginVertical: Spacing.MARGIN_5 }}>
            <LocationCard
              current={true}
              latitude={weatherDetail[0]?.locationDetails?.latitude}
              longitude={weatherDetail[0]?.locationDetails?.longitude}
              city={weatherDetail[0]?.locationDetails?.city}
              country={weatherDetail[0]?.locationDetails?.country}
              showDetails={handleShowDetails}
            />
          </View>
        )}

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
                  latitude={item?.latitude}
                  longitude={item?.longitude}
                  city={item?.city}
                  street={item?.street}
                  country={item?.country}
                  showDetails={handleShowDetails}
                />
                <View style={[styles.borderBottom, { width: "50%" }]} />
              </>
            )}
          />
        </View>

        {/* Recent Searchs*/}
        {recents === null ? null : (
          <FlatList
            data={recents?.filter((e) => e?.street !== "")}
            bounces={false}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => renderRecentSearchs(item)}
            ListHeaderComponent={() => {
              return (
                <View style={styles.recentContainer}>
                  <Text style={styles.recentText}>Recents</Text>
                  <TouchableOpacity onPress={handleAllRemoveLocation}>
                    <FontAwesome name="trash-o" size={24} color="#9B9B9B" />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Search;
