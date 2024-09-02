<template>
  <div class="bg-custom min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div class="mb-4">
        <ul class="flex justify-between">
          <li class="text-blue-500">Technical support</li>
          <li class="text-blue-500">Sales questions</li>
          <li class="text-blue-500">Press</li>
          <li class="text-blue-500">Bug report</li>
        </ul>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input type="text" v-model="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email address</label>
          <input type="email" v-model="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Message</label>
          <textarea v-model="message" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div class="mb-4 flex items-center">
          <input type="checkbox" v-model="sendCopy" class="mr-2">
          <label class="text-gray-700">Send me a copy of this message</label>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sendCopy: false
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
        sendCopy: this.sendCopy
      });
    }
  }
};
</script>

<style>
.bg-custom {
  background-image: url('votre-image.jpg'), linear-gradient(to right, rgba(255, 0, 150, 0.5), rgba(0, 204, 255, 0.5));
  background-blend-mode: overlay;
}
</style>
