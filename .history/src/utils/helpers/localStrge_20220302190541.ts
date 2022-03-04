export class LocalStrge {
  public storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  get(key: string) {
    return JSON.parse(this.storage.getItem(key) || "") || "";
  }
  set<T>(key: string, value: T) {
    if (typeof value === "string") this.storage.setItem(key, value);
    else if (typeof value === "object")
      this.storage.setItem(key, JSON.stringify(value));
  }
}
