export class LocalStrge {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  public get<T>(key: string) {
    return this.storage.getItem(key);
  }
  public set<T>(key: string, value: any) {
    if (typeof value === "string") {
      this.storage.setItem(key, value);
      return;
    }
    this.storage.setItem(key, value);
  }
  public remove(key: string) {
    this.storage.removeItem(key);
  }
}
