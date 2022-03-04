export class LocalStrge {
  public storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  get<T>(key: string) {
    return this.storage.getItem(key);
  }
  set<T>(key: string, value: T) {
    if (typeof value === "string") this.storage.setItem(key, value);
    else if (typeof value === "object")
      this.storage.setItem(key, JSON.stringify(value));
  }
}
