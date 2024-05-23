export const iconTree = new Audio('./assets/Floresta.wav')

export const iconRain = new Audio('./assets/Chuva.wav')

export const iconStore = new Audio('./assets/Cafeteria.wav')

export const iconFlame = new Audio('./assets/Lareira.wav')

export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const kichenTimer = new Audio('./assets/kichen-timer.mp3')

const sounds = [iconTree, iconRain, iconStore, iconFlame]

export function stopAllSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}