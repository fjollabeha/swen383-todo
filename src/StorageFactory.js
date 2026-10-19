import { LocalStorageHandler } from "./LocalStorageHandler.js";
import { MemoryStorageHandler } from "./MemoryStorageHandler.js";

export class StorageFactory {
  static createStorage(type = "local") {
    switch (type) {
      case "memory":
        return new MemoryStorageHandler();
      case "local":
        return new LocalStorageHandler();
      default:
        throw new Error(`Unknown storage type: ${type}`);
    }
  }
}