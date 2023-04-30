import { defineStore } from "pinia";

interface Message {
  id: Number | undefined;
  role: "user" | "assistant";
  content: String;
}

interface State {
  messageList: Message[];
  currentText: String;
}

const defaultState: State = {
  messageList: [],
  currentText: "",
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
  },
});
export default useMessageStore;
