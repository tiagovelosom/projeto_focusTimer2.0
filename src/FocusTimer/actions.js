import state from "./state.js"
import * as timer from "./timer.js"
import * as el from './elements.js'
import * as sounds from './sounds.js'

let activeSound = null;

export function toggleRunning() {
    state.isRunning = document.documentElement.
    classList.toggle('running')

    timer.countdown()

    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function reset() {
    
    state.isRunning = false
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}


function handleSoundButtonClick(sound) {
    if (activeSound === sound && !sound.paused) {
        sound.pause();
        sound.currentTime = 0;
        activeSound = null;
    } else {
        sounds.stopAllSounds();
        sound.play();
        activeSound = sound;
    }
}

export function plusFive() {
    state.minutes = Math.min(60, state.minutes + 5);
    timer.updateDisplay();
}

export function minusFive() {
    state.minutes = Math.max(0, state.minutes - 5);  // Ensure minutes don't go negative
    timer.updateDisplay();
}

export function toggleMusicIconTree() {
    handleSoundButtonClick(sounds.iconTree);
}

export function toggleMusicIconRain() {
    handleSoundButtonClick(sounds.iconRain);
}

export function toggleMusicIconStore() {
    handleSoundButtonClick(sounds.iconStore);
}

export function toggleMusicIconFlame() {
    handleSoundButtonClick(sounds.iconFlame);
}