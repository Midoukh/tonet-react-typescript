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
  public remove(key: string, id?: string) {
    if (id) {
      const arrOfObjs = JSON.parse(this.get(key) || "[]") || [];
      if (arrOfObjs.length) {
        const updatedArray = arrOfObjs.filter(
          (ele: UploadedItem) => ele.id !== id
        );
        this.set(key, JSON.stringify(updatedArray));
      }
      return;
    }
    this.storage.removeItem(key);
  }
}
