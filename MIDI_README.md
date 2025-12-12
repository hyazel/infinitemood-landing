# 🎹 MidiPlayer avec MidiPlayerJS + Tone.js

Ce projet utilise maintenant la bibliothèque **MidiPlayerJS** combinée à **Tone.js** pour une lecture MIDI robuste et professionnelle.

## 🚀 Installation

### Option 1: Via npm (recommandé)
```bash
npm install midi-player-js tone
```

### Option 2: Via CDN (déjà configuré dans midi_example.html)
Les scripts sont déjà inclus dans le fichier HTML :
- Tone.js: `https://unpkg.com/tone@14.7.77/build/Tone.js`
- MidiPlayerJS: `https://unpkg.com/midi-player-js@2.0.16/build/midi-player.min.js`

## 📁 Fichiers

- `midi_player.js` - Classe MidiPlayer utilisant MidiPlayerJS + Tone.js
- `midi_example.html` - Interface de démonstration complète
- `package.json` - Configuration des dépendances

## 🎵 Utilisation

### Interface Web (midi_example.html)

1. **Ouvrir le fichier** dans un navigateur web
2. **Initialiser** le player (bouton "Initialiser")
3. **Charger un fichier MIDI** via le sélecteur de fichiers
4. **Contrôler la lecture** avec les boutons Play/Pause/Stop

### Fonctionnalités

- ✅ **Chargement de fichiers MIDI** (.mid, .midi)
- ✅ **Lecture en temps réel** avec Tone.js
- ✅ **Contrôles de lecture** (Play, Pause, Stop, Toggle)
- ✅ **Ajustement BPM** (60-200 BPM)
- ✅ **Contrôle du volume** (0-1)
- ✅ **Affichage des événements MIDI** en temps réel
- ✅ **Données de test** pour démonstration
- ✅ **Informations détaillées** sur le fichier MIDI

### Code JavaScript

```javascript
// Créer une instance
const midiPlayer = new MidiPlayer();

// Initialiser
await midiPlayer.initialize();

// Charger un fichier MIDI
await midiPlayer.loadMidiFile('path/to/file.mid');

// Jouer
midiPlayer.play();

// Contrôles
midiPlayer.pause();
midiPlayer.resume();
midiPlayer.stop();

// Paramètres
midiPlayer.setBPM(140);
midiPlayer.setVolume(0.8);
```

## 🔧 API MidiPlayer

### Méthodes principales

- `initialize()` - Initialise Tone.js et MidiPlayerJS
- `loadMidiFile(url)` - Charge un fichier MIDI
- `play()` - Démarre la lecture
- `pause()` - Met en pause
- `resume()` - Reprend la lecture
- `stop()` - Arrête la lecture
- `toggle()` - Alterne entre play/pause

### Contrôles

- `setBPM(bpm)` - Change le tempo
- `setVolume(volume)` - Change le volume (0-1)
- `getIsPlaying()` - Retourne l'état de lecture
- `getMidiData()` - Retourne les données MIDI parsées

### Données de test

- `getTestMidiData()` - Retourne des données MIDI de démonstration

## 🎼 Événements MIDI

Le système affiche en temps réel :
- **Note On/Off** avec numéro de note et vélocité
- **Timestamp** de chaque événement
- **Piste** d'origine
- **Informations détaillées** sur chaque événement

## 🛠️ Avantages de MidiPlayerJS

1. **Parsing MIDI professionnel** - Gère tous les formats MIDI standard
2. **Performance optimisée** - Parsing plus rapide et fiable
3. **Maintenance** - Bibliothèque maintenue activement
4. **Compatibilité** - Fonctionne avec tous les navigateurs modernes
5. **Événements en temps réel** - Support natif des événements MIDI

## 🎯 Exemple d'utilisation

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/tone@14.7.77/build/Tone.js"></script>
    <script src="https://unpkg.com/midi-player-js@2.0.16/build/midi-player.min.js"></script>
</head>
<body>
    <input type="file" id="midi-file" accept=".mid,.midi" />
    <button id="play-btn">Jouer</button>
    
    <script src="midi_player.js"></script>
    <script>
        const midiPlayer = new MidiPlayer();
        
        document.getElementById('midi-file').addEventListener('change', async (e) => {
            const file = e.target.files[0];
            const arrayBuffer = await file.arrayBuffer();
            
            await midiPlayer.initialize();
            const player = midiPlayer.getPlayer();
            player.loadArrayBuffer(arrayBuffer);
            
            document.getElementById('play-btn').onclick = () => midiPlayer.play();
        });
    </script>
</body>
</html>
```

## 🐛 Dépannage

### Erreur "MidiPlayerJS n'est pas chargé"
- Vérifiez que le script MidiPlayerJS est chargé avant midi_player.js
- Utilisez la version CDN ou installez via npm

### Fichier MIDI ne se charge pas
- Vérifiez le format du fichier (.mid ou .midi)
- Assurez-vous que le fichier n'est pas corrompu
- Vérifiez la console pour les erreurs détaillées

### Pas de son
- Vérifiez que Tone.js est initialisé
- Assurez-vous que l'utilisateur a interagi avec la page (requis par les navigateurs)
- Vérifiez le volume et les paramètres audio

## 📚 Ressources

- [MidiPlayerJS Documentation](https://github.com/grimmdude/MidiPlayerJS)
- [Tone.js Documentation](https://tonejs.github.io/)
- [Web MIDI API](https://www.w3.org/TR/webmidi/)





