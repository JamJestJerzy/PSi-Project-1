<style>
@keyframes typing {
  0%, 100% { width: 0; }
  10%, 90% { width: 14ch; }
}

@keyframes blink {
  0%, 100% { border-right-color: transparent; }
  50% { border-right-color: black; }
}

.typewriter {
  width: 15ch;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid black;
  box-sizing: border-box;
  animation: typing 4s steps(4) infinite, blink 1s step-end infinite;
}

.typewriter::after {
  content: "";
  animation: typing 4s steps(4) infinite, blink 1s step-end infinite;
}

.typewriter::before {
  content: "Pain";
  animation: typing 4s steps(4) infinite, blink 1s step-end infinite;
}
</style>
<div class="typewriter"></div>