export class LocalStrge {
  public storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  get<T>(key: string) {
    return this.storage.getItem(key);
  }
  set<T>(key: string, value: any) {
    if (typeof value === "string") {
      this.storage.setItem(key, value);
      return;
    }
    console.log(key, value);
    this.storage.setItem(key, value);
  }
}
