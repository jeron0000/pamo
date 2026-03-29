const lyrics = [
  ["Oh, ooh", 4.6, 0.49],
  ["Mamamatay akong nakangiti", 1.22, 0.13],
  ["Kapag ikaw ang nasa aking tabi", 1.21, 0.10],
  ["Mabubuhay akong nagsisisi", 1.15, 0.13],
  ["Kapag isang araw hindi kita mapangiti", 1.13, 0.10],
  ["Kalapastangan ang 'di ka ibigin", 1.13, 0.10],
  ["Kalokohan ang 'di ka isipin", 1.13, 0.10],
  ["Kung ang mundo ay biglang gugunawin", 1.12, 0.10],
  ["Ikaw ang una kong hahanapin", 1.12, 0.10],
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeOut(text, charDelay, element) {
  for (const char of text) {
    element.textContent += char;
    await delay(charDelay * 1000);
  }
}

async function playLyrics() {
  const container = document.getElementById("lyrics");

  for (const [line, lineDelay, charDelay] of lyrics) {
    const lineElement = document.createElement("div");
    container.appendChild(lineElement);

    await typeOut(line, charDelay, lineElement);
    await delay(lineDelay * 1000);
  }
}

playLyrics();