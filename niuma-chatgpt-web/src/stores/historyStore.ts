import { defineStore } from "pinia";

interface Message {
  id: Number | undefined;
  role: "user" | "assistant";
  content: String;
}

interface Store {
  messageMap: Map<string, Message[]>;
}

const defaultStore: Store = {
  messageMap: new Map<string, Message[]>(),
};

const historyStore = defineStore("history", {
  state: () => {
    return defaultStore;
  },
  actions: {
    hasMessage(id: string): boolean {
      return this.messageMap.has(id);
    },
    putMessage(id: string, list: Message[]) {
      this.messageMap.set(id, list);
    },
    getMessage(id: string) {
      return this.messageMap.get(id);
    },
  },
});

export default historyStore;
