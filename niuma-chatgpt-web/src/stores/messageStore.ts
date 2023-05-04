import { defineStore } from "pinia";

interface Message {
  id: Number | undefined;
  role: "user" | "assistant";
  content: String;
}

interface State {
  messageList: Message[];
  currentText: String;
  currentId: String;
}

const defaultState: State = {
  messageList: [],
  currentText: "",
  currentId: "",
};

const useMessageStore = defineStore("message", {
  state: () => {
    return defaultState;
  },
  actions: {
    addMessageList(item: Message): void {
      this.messageList.push(item);
    },
    clearMessageList(): void {
      this.messageList.splice(0, this.messageList.length);
    },
    popMessageList(): void {
      this.messageList.pop();
    },
    clearId() {
      this.currentId = "";
    },
    getId() {
      if (this.currentId === "") {
        this.currentId = Date.now().toString();
      }
      return this.currentId;
    },
  },
});
export default useMessageStore;
