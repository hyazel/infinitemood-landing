/*==============================================================================
Infinite Mood - FMOD Integration (Refactored)
Copyright (c), Firelight Technologies Pty, Ltd 2012-2025.
==============================================================================*/

var FMOD = {};
FMOD['preRun'] = prerun;
FMOD['onRuntimeInitialized'] = main;
FMOD['INITIAL_MEMORY'] = 64 * 1024 * 1024;
FMODModule(FMOD);

// Audio Engine Namespace
window.AudioEngine = {
    system: null,
    core: null,
    isReady: false,
    events: {
        lofi: { path: "event:/Lofi/Lofi-track1", instance: null, description: null },
        meteo: { path: "event:/Meteo/Meteo", instance: null, description: null },
        demoNeoclassic: { path: "event:/Sound Design/demo-neoclassic", instance: null, description: null },
        demoLofi: { path: "event:/Sound Design/demo-lofi", instance: null, description: null }
    },
    snapshots: {},

    // Config
    basePath: (function () {
        // Detect if we are running under the specific base path (Localhost or Prod)
        if (window.location.pathname.includes('/infinitemood-landing/')) {
            return "/infinitemood-landing/js/Desktop/";
        }
        return "/js/Desktop/";
    })(),

    // --- Core Functions ---

    init: function (system, core) {
        this.system = system;
        this.core = core;
        console.log("[AudioEngine] Initialized with System and Core.");
    },

    loadBanks: function () {
        if (!this.system) return;

        console.log("[AudioEngine] Loading Banks from:", this.basePath);

        // Helper for path
        // Note: FMOD preloaded files use virtual filesystem "/", but creating them needs real URL.
        // But loadBankFile uses the virtual path defined in preRun? 
        // Actually, in preRun we map Real URL -> Virtual path.
        // loadBankFile takes the Virtual path.

        var bankhandle = {};

        // We load from root "/" because that's where preRun puts them in VFS
        var stringsResult = this.system.loadBankFile("/Master.strings.bank", FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle);
        var websiteResult = this.system.loadBankFile("/Website.bank", FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle);

        if (stringsResult === FMOD.OK && websiteResult === FMOD.OK) {
            console.log("[AudioEngine] Critical Banks Loaded.");
            this.loadEvents();
            this.isReady = true;
            window.dispatchEvent(new Event('fmod-ready'));
        } else {
            console.error("[AudioEngine] Bank Load Failed. Strings:", stringsResult, "Website:", websiteResult);
        }
    },

    loadEvents: function () {
        this._loadSingleEvent(this.events.lofi);
        this._loadSingleEvent(this.events.meteo);
        this._loadSingleEvent(this.events.demoNeoclassic);
        this._loadSingleEvent(this.events.demoLofi);
    },

    _loadSingleEvent: function (eventObj) {
        if (!this.system) return;

        var descOut = {};
        var res = this.system.getEvent(eventObj.path, descOut);
        if (res === FMOD.OK) {
            eventObj.description = descOut.val;
            // Create instance
            var instOut = {};
            res = eventObj.description.createInstance(instOut);
            if (res === FMOD.OK) {
                eventObj.instance = instOut.val;
            } else {
                console.warn("[AudioEngine] Failed to create instance for", eventObj.path, FMOD.ErrorString(res));
            }
        } else {
            console.warn("[AudioEngine] Failed to get event description for", eventObj.path, FMOD.ErrorString(res));
        }
    },

    // --- Public API ---

    loadMasterBank: function () {
        console.log("[AudioEngine] Loading Master Bank (Deferred)...");
        if (this.system) {
            var bankhandle = {};
            var result = this.system.loadBankFile("/Master.bank", FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle);
            if (result !== FMOD.OK && result !== FMOD.ERR_EVENT_ALREADY_LOADED) {
                console.warn("[AudioEngine] Master Bank load warning: " + FMOD.ErrorString(result));
            } else {
                console.log("[AudioEngine] Master Bank loaded.");
            }
        }
    },

    // Generic Play Helper with Auto-Recovery
    play: function (eventName) {
        var evt = this.events[eventName];
        if (!evt) return;

        // Auto-Recovery: Recreate instance if invalid
        if (!evt.instance || !evt.instance.isValid()) {
            console.warn("[AudioEngine] Instance invalid for", eventName, "- recreating.");
            this._loadSingleEvent(evt);
        }

        if (evt.instance && evt.instance.isValid()) {
            var state = {};
            evt.instance.getPlaybackState(state);
            if (state.val !== FMOD.STUDIO_PLAYBACK_PLAYING) {
                console.log("[AudioEngine] Playing", eventName);
                evt.instance.start();
            }
        }
    },

    stop: function (eventName, allowFadeOut = true) {
        var evt = this.events[eventName];
        if (evt && evt.instance && evt.instance.isValid()) {
            console.log("[AudioEngine] Stopping", eventName);
            var mode = allowFadeOut ? FMOD.STUDIO_STOP_ALLOWFADEOUT : FMOD.STUDIO_STOP_IMMEDIATE;
            evt.instance.stop(mode);
        }
    },

    setVolume: function (eventName, volume) {
        var evt = this.events[eventName];
        if (evt && evt.instance && evt.instance.isValid()) {
            evt.instance.setVolume(volume);
        }
    },

    // Specific Actions Mapped to Old API for compatibility or cleanliness
    playDemoLofi: function () { this.play('demoLofi'); },
    stopDemoLofi: function (f) { this.stop('demoLofi', f); },
    setDemoLofiVolume: function (v) { this.setVolume('demoLofi', v); },

    playMeteo: function () { this.play('meteo'); },
    stopMeteo: function (f) { this.stop('meteo', f); },
    setMeteoLevel: function (level) {
        // Original logic: global parameter "meteo_type"
        if (this.system) {
            this.system.setParameterByName("meteo_type", level, false);
        }
    },

    playDemoNeoclassic: function () { this.play('demoNeoclassic'); },
    stopDemoNeoclassic: function (f) { this.stop('demoNeoclassic', f); },
    setDemoNeoclassicVolume: function (v) { this.setVolume('demoNeoclassic', v); },

    // Snapshots
    activateSnapshot: function (name) {
        if (!this.system) return;

        if (!this.snapshots[name] || !this.snapshots[name].isValid()) {
            var desc = {};
            var res = this.system.getEvent(name, desc);
            if (res === FMOD.OK) {
                var inst = {};
                desc.val.createInstance(inst);
                this.snapshots[name] = inst.val;
            }
        }

        if (this.snapshots[name] && this.snapshots[name].isValid()) {
            console.log("[AudioEngine] Snapshot Activate:", name);
            this.snapshots[name].start();
        }
    },

    deactivateSnapshot: function (name) {
        if (this.snapshots[name] && this.snapshots[name].isValid()) {
            console.log("[AudioEngine] Snapshot Deactivate:", name);
            this.snapshots[name].stop(FMOD.STUDIO_STOP_ALLOWFADEOUT);
        }
    },

    // Global Parameters
    setGlobalParameter: function (name, value) {
        if (this.system) {
            this.system.setParameterByName(name, value, false);
        }
    },

    setMute: function (isMuted) {
        // Toggle Master Bus Volume
        if (this.system) {
            var masterBus = {};
            // Get Master Bus
            var res = this.system.getBus("bus:/", masterBus);
            if (res === FMOD.OK && masterBus.val) {
                masterBus.val.setMute(isMuted);
                console.log("[AudioEngine] Mute state:", isMuted);
            } else {
                console.warn("[AudioEngine] Failed to get Master Bus for mute.");
            }
        }
    },

    // Helper for main loop
    update: function () {
        if (this.system) {
            this.system.update();
        }
    }
};

// --- FMOD Glue Code ---

function prerun() {
    // Dynamic Preload Path
    var fileUrl = window.AudioEngine.basePath;
    var fileName = [
        "Master.bank",
        "Master.strings.bank",
        "Website.bank"
    ];
    var folderName = "/"; // Virtual File System Root

    console.log("[FMOD] Preloading files from:", fileUrl);

    for (var count = 0; count < fileName.length; count++) {
        // (folderName, fileName, url, readable, writable)
        FMOD.FS_createPreloadedFile(folderName, fileName[count], fileUrl + fileName[count], true, false);
    }
}

function main() {
    var outval = {};
    var result;

    console.log("[FMOD] Creating System object");
    result = FMOD.Studio_System_Create(outval);
    CHECK_RESULT(result);

    var gSystem = outval.val;
    result = gSystem.getCoreSystem(outval);
    CHECK_RESULT(result);
    var gSystemCore = outval.val;

    // Optional: DSP Buffer
    gSystemCore.setDSPBufferSize(2048, 2);

    // Initialize
    console.log("[FMOD] Initializing");
    // 1024 virtual channels
    result = gSystem.initialize(1024, FMOD.STUDIO_INIT_NORMAL, FMOD.INIT_NORMAL, null);
    CHECK_RESULT(result);

    // Handover to AudioEngine
    window.AudioEngine.init(gSystem, gSystemCore);
    window.AudioEngine.loadBanks();

    // Start Loop
    window.setInterval(function () {
        window.AudioEngine.update();
    }, 20);

    return FMOD.OK;
}

function CHECK_RESULT(result) {
    if (result != FMOD.OK) {
        console.error("[FMOD Error]", FMOD.ErrorString(result));
    }
}

// Legacy Global API Shims (for existing code compatibility, but calling into Engine)
// This ensures we don't break AudioManager.ts immediately, or we can update AudioManager.ts to use window.AudioEngine directly.
// User requested "Quali" code, so I should update AudioManager.ts to use window.AudioEngine.
// But keeping shims for safety during transition is smart.
window.playDemoNeoclassic = function () { window.AudioEngine.playDemoNeoclassic(); };
window.stopDemoNeoclassic = function (f) { window.AudioEngine.stopDemoNeoclassic(f); };
window.setDemoNeoclassicVolume = function (v) { window.AudioEngine.setDemoNeoclassicVolume(v); };

window.playDemoLofi = function () { window.AudioEngine.playDemoLofi(); };
window.stopDemoLofi = function (f) { window.AudioEngine.stopDemoLofi(f); };
window.setDemoLofiVolume = function (v) { window.AudioEngine.setDemoLofiVolume(v); };

window.playMeteo = function () { window.AudioEngine.playMeteo(); };
window.stopMeteo = function (f) { window.AudioEngine.stopMeteo(f); };
window.setMeteoLevel = function (v) { window.AudioEngine.setMeteoLevel(v); };

window.activateSnapshot = function (n) { window.AudioEngine.activateSnapshot(n); };
window.deactivateSnapshot = function (n) { window.AudioEngine.deactivateSnapshot(n); };

window.loadMasterBank = function () { window.AudioEngine.loadMasterBank(); };
