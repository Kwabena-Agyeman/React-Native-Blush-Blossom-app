import AsyncStorage from "@react-native-async-storage/async-storage";

const storeDataAsyncStorage = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("LineItems", jsonValue);
    // console.log("item saved from Async Storage");
  } catch (e) {
    // saving error
    // console.log("error saving item", e.message);
  }
};

const getDataAsyncStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("LineItems");
    // console.log("item retrived from Async Storage");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
    // console.log("error retriving item", e.message);
  }
};

export { storeDataAsyncStorage, getDataAsyncStorage };
