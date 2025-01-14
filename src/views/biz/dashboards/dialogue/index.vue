<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import { useSnackbarStore } from '@/store/snackbarStore'
import { countAndCompleteCodeBlocks } from '@/utils/aiUtils.ts'
import { scrollToBottom } from '@/utils/common.js'
import { useChatGPTStore } from '@/store/chatGPTStore.js'

const snackbarStore = useSnackbarStore()
const chatGPTStore = useChatGPTStore()

// interface Message {
//   content: string;
//   role: "user" | "assistant" | "system";
// }

// User Input Message
const userMessage = ref('')

// Prompt Message
const promptMessage = computed(() => {
  return [
    {
      content: chatGPTStore.propmpt,
      role: 'system',
    },
  ]
})

// Message List
const messages = ref([
  { 'content': '撒旦发射点发', 'role': 'user' },
  { 'content': 'jhhh', 'role': 'assistant' },
  { 'content': '撒旦发射点', 'role': 'user' },
  { 'content': 'jhhh', 'role': 'assistant' },
])

const requestMessages = computed(() => {
  if (messages.value.length <= 10) {
    return [...promptMessage.value, ...messages.value]
  } else {
    // 截取最新的10条信息
    const slicedMessages = messages.value.slice(-10)
    
    return [...promptMessage.value, ...slicedMessages]
  }
})

// Send Messsage
const sendMessage = async () => {
  if (userMessage.value) {
    // Add the message to the list
    messages.value.push({
      content: userMessage.value,
      role: 'user',
    })
    
    // Create a completion
    await createCompletion()
    
    // Clear the input
    userMessage.value = ''
  }
}

const createCompletion = async () => {
  try {
    // Create a completion (axios is not used here because it does not support streaming)
    const reply = 'jhhh'
    // const reply = await bizAiApi.getAiContent({
    //   UserID: tool.data.get('USER_INFO').userId,
    //   AiAgentName: 'AI-3',
    //   Content: userMessage.value,
    // })
    
    // Add the bot message
    messages.value.push({
      content: reply,
      role: 'assistant',
    })
    
  } catch (error) {
    snackbarStore.showErrorMessage('请求错误!')
  }
}

watch(
  () => messages.value,
  val => {
    if (val) {
      scrollToBottom(document.querySelector('.message-container'))
    }
  },
  {
    deep: true,
  },
)

const displayMessages = computed(() => {
  const messagesCopy = messages.value.slice() // 创建原始数组的副本
  const lastMessage = messagesCopy[messagesCopy.length - 1]
  
  const updatedLastMessage = {
    ...lastMessage,
    content: countAndCompleteCodeBlocks(lastMessage.content),
  }
  
  messagesCopy[messagesCopy.length - 1] = updatedLastMessage
  
  return messagesCopy
})

const handleKeydown = e => {
  if (e.key === 'Enter' && (e.altKey || e.shiftKey)) {
    // 当同时按下 alt或者shift 和 enter 时，插入一个换行符
    e.preventDefault()
    userMessage.value += '\n'
  } else if (e.key === 'Enter') {
    // 当只按下 enter 时，发送消息
    e.preventDefault()
    sendMessage()
  }
}

const inputRow = ref(1)
</script>

<template>
  <div class="chat-bot">
    <div class="messsage-area">
      <PerfectScrollbar
        v-if="messages.length > 0"
        class="message-container"
      >
        <template v-for="message in displayMessages">
          <div v-if="message.role === 'user'">
            <div class="pa-5 user-message">
              <div class="message align-center text-pre-wrap">
                <VAvatar class="mr-4 mr-lg-8">
                  <img
                    alt="alt"
                    src="@images/avatars/avatar-1.png"
                  >
                </VAvatar>
                <span> {{ message.content }}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="pa-5 assitant-message">
              <div class="message">
                <VAvatar class="mr-4 mr-lg-8">
                  <img
                    alt="alt"
                    src="@images/avatars/avatar-2.png"
                  >
                </VAvatar>
                {{ message.content }}
              </div>
            </div>
          </div>
        </template>
      </PerfectScrollbar>
      <div
        v-else
        class="no-message-container"
      >
        <h1 class="text-h4 text-md-h2 text-primary font-weight-bold">
          Ask Me Any Thing
        </h1>
        
        <Vue3Lottie
          animation-link="https://assets5.lottiefiles.com/packages/lf20_eYXADRNJPy.json"
          style="height: 350px"
        />
      </div>
    </div>
    <div class="input-area">
      <VSheet
        class="input-panel d-flex align-center pa-1"
        elevation="0"
        max-width="1200"
        style="background: transparent;"
      >
        <VTextarea
          ref="input"
          v-model="userMessage"
          :rows="inputRow"
          class="mx-2"
          clearable
          color="primary"
          density="default"
          hide-details
          no-resize
          placeholder="Ask Me Anything"
          type="text"
          variant="solo"
          @blur="inputRow = 1"
          @focus="inputRow = 3"
          @keydown="handleKeydown"
        />
        <VBtn
          color="primary"
          icon="ri-send-plane-fill"
          variant="elevated"
          @click="sendMessage"
        />
      </VSheet>
      <!--      <ApiKeyDialog /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-bot {
  height: 100vh;
  //display: flex;
  //flex-direction: column;
  min-block-size: 100%;
  position: relative;
  
  .messsage-area {
    //flex: 1;
  }
  
  .input-area {
    padding-top: 1rem;
    align-items: center;
    position: sticky;
    width: 100%;
    bottom: 10%;
    
    .input-panel {
      border-radius: 5px;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}

.user-message {
  background-color: #f6f6fd;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.assitant-message {
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
}

.message-container {
  height: calc(100vh - 154px);
}

.no-message-container {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
}

:deep(.md-editor-preview-wrapper) {
  padding: 0px;
}
</style>
