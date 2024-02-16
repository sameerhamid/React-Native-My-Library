import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorageUtils {
  // set item in local storage
  static setItem(key: string, value: Object): Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  // get item from local storage

  static getItem(key: string): Promise<object> {
    return AsyncStorage.getItem(key).then(item => {
      if (item === undefined || item === '' || item === null) {
        return undefined;
      }
      try {
        return JSON.parse(item);
      } catch (err) {
        return item;
      }
    });
  }

  // remove item from local storage

  static removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  // romove all keys from local storage

  static removeAll(): Promise<void> {
    return AsyncStorage.clear();
  }
}
