/*==============================================================================
Infinite Mood - FMOD Integration
Based on Simple Event Example
Copyright (c), Firelight Technologies Pty, Ltd 2012-2025.
==============================================================================*/

//==============================================================================
// Prerequisite code needed to set up FMOD object.
//==============================================================================

var FMOD = {};
FMOD['preRun'] = prerun;
FMOD['onRuntimeInitialized'] = main;
FMOD['INITIAL_MEMORY'] = 64 * 1024 * 1024;
FMODModule(FMOD);

//==============================================================================
// Application State
//==============================================================================

var gSystem;
var gSystemCore;

// Events
var lofiEvent = { path: "event:/Lofi/Lofi-track1", instance: {}, description: {} };
var meteoEvent = { path: "event:/Meteo/Meteo", instance: {}, description: {} };

// Snapshots (Storage)
var activeSnapshots = {};

// Snapshots (Storage)
var activeSnapshots = {};

// Helper to check results
function CHECK_RESULT(result) {
    if (result != FMOD.OK) {
        var msg = "Error!!! '" + FMOD.ErrorString(result) + "'";
        console.error(msg);
        // alert(msg); // Alert disabled for better UX
    }
}

// Pre-load files
function prerun() {
    var fileUrl = "public/js/Desktop/"; // Adjusted path for InfiniteMood
    var fileName = [
        "Master.bank",
        "Master.strings.bank"
    ];
    var folderName = "/";

    for (var count = 0; count < fileName.length; count++) {
        FMOD.FS_createPreloadedFile(folderName, fileName[count], fileUrl + fileName[count], true, false);
    }
}

// Main Initialization
function main() {
    var outval = {};
    var result;

    console.log("Creating FMOD System object");
    result = FMOD.Studio_System_Create(outval);
    CHECK_RESULT(result);

    gSystem = outval.val;
    result = gSystem.getCoreSystem(outval);
    CHECK_RESULT(result);
    gSystemCore = outval.val;

    // Optional: DSP Buffer
    console.log("set DSP Buffer size");
    result = gSystemCore.setDSPBufferSize(2048, 2);
    CHECK_RESULT(result);

    // Initialize
    console.log("initialize FMOD");
    result = gSystem.initialize(1024, FMOD.STUDIO_INIT_NORMAL, FMOD.INIT_NORMAL, null);
    CHECK_RESULT(result);

    // Start App
    console.log("initialize Application");
    initApplication();

    // Loop
    console.log("Start game loop");
    window.setInterval(updateApplication, 20);

    return FMOD.OK;
}

// Load Banks and Events
function initApplication() {
    console.log("Loading events");

    // Load Banks
    var bankhandle = {};
    CHECK_RESULT(gSystem.loadBankFile("/Master.bank", FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle));
    CHECK_RESULT(gSystem.loadBankFile("/Master.strings.bank", FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle));

    // Load Lofi Event
    console.log("Loading Lofi: " + lofiEvent.path);
    var result = gSystem.getEvent(lofiEvent.path, lofiEvent.description);
    if (result === FMOD.OK) {
        CHECK_RESULT(lofiEvent.description.val.createInstance(lofiEvent.instance));
    } else {
        console.warn("Failed to load Lofi: " + FMOD.ErrorString(result));
    }

    // Load Meteo Event
    console.log("Loading Meteo: " + meteoEvent.path);
    result = gSystem.getEvent(meteoEvent.path, meteoEvent.description);
    if (result === FMOD.OK) {
        CHECK_RESULT(meteoEvent.description.val.createInstance(meteoEvent.instance));
        // Manual Volume Adjustment removed - Controlled by FMOD Mixer
    } else {
        console.warn("Failed to load Meteo: " + FMOD.ErrorString(result));
    }
}

// Update Loop
function updateApplication() {
    var result = gSystem.update();
    CHECK_RESULT(result);
}

//==============================================================================
// Public Interface (called from HTML/UI)
//==============================================================================

// Play/Stop All Audio
function playEvent(soundid) {
    if (soundid == 1) // PLAY
    {
        console.log("Starting Audio...");

        // Start Lofi
        if (lofiEvent.instance.val) {
            var isPlaying = {};
            lofiEvent.instance.val.getPlaybackState(isPlaying);
            if (isPlaying.val !== FMOD.STUDIO_PLAYBACK_PLAYING) {
                CHECK_RESULT(lofiEvent.instance.val.start());
            }
        }

        // Start Meteo
        if (meteoEvent.instance.val) {
            var isPlaying = {};
            meteoEvent.instance.val.getPlaybackState(isPlaying);
            if (isPlaying.val !== FMOD.STUDIO_PLAYBACK_PLAYING) {
                CHECK_RESULT(meteoEvent.instance.val.start());
            }
        }
    }
    else if (soundid == 2) // STOP
    {
        console.log("Stopping Audio...");
        if (lofiEvent.instance.val) lofiEvent.instance.val.stop(FMOD.STUDIO_STOP_ALLOWFADEOUT);
        if (meteoEvent.instance.val) meteoEvent.instance.val.stop(FMOD.STUDIO_STOP_ALLOWFADEOUT);
    }
}

// Set Meteo Level (Global Parameter: meteo_type)
function setMeteoLevel(level) {
    // 0: calm, 1: light, 2: rain, 3: storm
    console.log("Setting Meteo Global Parameter 'meteo_type' to:", level);

    if (gSystem) {
        // meteo_type is a Global Parameter
        CHECK_RESULT(gSystem.setParameterByName("meteo_type", level, false));
    } else {
        console.warn("FMOD System not ready");
    }
}

// Set Day/Night (Global Parameter: DayTime)
function setDayTime(dayTimeValue) {
    if (gSystem) {
        var fmodValue;
        if (dayTimeValue === "day" || dayTimeValue === 0) fmodValue = 12; // day
        else if (dayTimeValue === "night" || dayTimeValue === 1) fmodValue = 20; // night
        else return;

        console.log("Setting Global DayTime to:", fmodValue);
        CHECK_RESULT(gSystem.setParameterByName("DayTime", fmodValue, false));
    }
}

// Set Generic Global Parameter (Continuous or Labeled)
function setGlobalParameter(name, value) {
    if (gSystem) {
        console.log("Setting Global Parameter '" + name + "' to:", value);
        CHECK_RESULT(gSystem.setParameterByName(name, value, false));
    } else {
        console.warn("FMOD System not ready for parameter: " + name);
    }
}

// --- Generic Snapshot Interface ---

// Activate a Snapshot by name (e.g., "snapshot:/meteo_interaction")
function activateSnapshot(snapshotName) {
    if (!gSystem) return;

    console.log("Activating Snapshot:", snapshotName);

    // If not already in our cache, create it
    if (!activeSnapshots[snapshotName]) {
        var desc = {};
        var result = gSystem.getEvent(snapshotName, desc);
        if (result === FMOD.OK) {
            var inst = {};
            desc.val.createInstance(inst);
            activeSnapshots[snapshotName] = inst.val;
        } else {
            console.warn("Snapshot not found:", snapshotName);
            return;
        }
    }

    // Start it
    if (activeSnapshots[snapshotName]) {
        activeSnapshots[snapshotName].start();
    }
}

// Deactivate a Snapshot
function deactivateSnapshot(snapshotName) {
    if (activeSnapshots[snapshotName]) {
        console.log("Deactivating Snapshot:", snapshotName);
        activeSnapshots[snapshotName].stop(FMOD.STUDIO_STOP_ALLOWFADEOUT);
    }
}

// Toggle a Snapshot
function toggleSnapshot(snapshotName) {
    if (!gSystem) return;

    // Ensure it exists first to check state
    if (!activeSnapshots[snapshotName]) {
        activateSnapshot(snapshotName);
        return;
    }

    var isPlaying = {};
    activeSnapshots[snapshotName].getPlaybackState(isPlaying);

    if (isPlaying.val === FMOD.STUDIO_PLAYBACK_PLAYING) {
        deactivateSnapshot(snapshotName);
    } else {
        activateSnapshot(snapshotName);
    }
}

/**
 * Helpers for home.html (Meteo Interaction)
 */
function startMeteoSnapshot() {
    activateSnapshot("snapshot:/meteo_interaction");
}

function stopMeteoSnapshot() {
    deactivateSnapshot("snapshot:/meteo_interaction");
}
