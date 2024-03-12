<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-4">
      <h1 class="text-2xl font-bold">My Custom Header</h1>
    </header>
    
    <slot></slot>

    <footer class="bg-gray-800 text-white py-4">
      <p>&copy; 2024 My Website</p>
    </footer>
  </div>
</template>
