import {defineStore} from "pinia";

interface Message {
    role: "user" | "assistant",
    context: String
}

interface State {
    messageList: Message[];
}

const defaultState: State = {
    messageList: []
}

const useMessageStore = defineStore('message', {
    state: () => {
        return defaultState
    },
    actions: {
        addMessage(item: Message): void {
            this.messageList.push(item)
        }
    }
})
export default useMessageStore;