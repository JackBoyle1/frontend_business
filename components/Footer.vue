<template>
  <div>
    <footer class="bg-gray-800 bg-opacity-60 text-white p-4">
      <div class="parent">
        <span class="left">© 2023 Boyx</span>
        <span id="social_media_icons">
          <button
            onclick="window.open('https://facebook.com/61553375675404', '_blank')"
          >
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </button>
        </span>

        <span class="text-right text-xs right"
          ><a
            href="https://www.freepik.com/free-photo/dark-geometric-background-with-copy-space_20838619.htm#query=background%20for%20websites%20professional&position=0&from_view=keyword&track=ais"
            >Image by denamorado</a
          >
          on Freepik</span
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
.parent {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Add this line to vertically center items */
}

.left, .right {
   flex-grow: 1;
   flex-basis: 0;
}
</style>
