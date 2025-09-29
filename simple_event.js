/*==============================================================================
Simple Event Example
Copyright (c), Firelight Technologies Pty, Ltd 2012-2025.

This example demonstrates the various ways of playing an event.

#### Explosion Event ####
This event is played as a one-shot and released immediately after it has been
created.

#### Looping Ambience Event ####
A single instance is started or stopped based on user input.

#### Cancel Event ####
This instance is started and if already playing, restarted.

For information on using FMOD example code in your own programs, visit
https://www.fmod.com/legal
==============================================================================*/

//==============================================================================
// Prerequisite code needed to set up FMOD object.  See documentation.
//==============================================================================

var FMOD = {};                          // FMOD global object which must be declared to enable 'main' and 'preRun' and then call the constructor function.
FMOD['preRun'] = prerun;                // Will be called before FMOD runs, but after the Emscripten runtime has initialized
FMOD['onRuntimeInitialized'] = main;    // Called when the Emscripten runtime has initialized
FMOD['INITIAL_MEMORY'] = 64*1024*1024;  // FMOD Heap defaults to 16mb which is enough for this demo, but set it differently here for demonstration (64mb)
FMODModule(FMOD);                       // Calling the constructor function with our object

//==============================================================================
// Example code
//==============================================================================

var gSystem;                            // Global 'System' object which has the Studio API functions.
var gSystemCore;                        // Global 'SystemCore' object which has the Core API functions.
var explosionDescription = {};          // Global Event Description for the explosion event.  This event is played as a one-shot and released immediately after it has been created.
var loopingAmbienceInstance = {};       // Global Event Instance for the looping ambience event.  A single instance is started or stopped based on user input.
var cancelInstance = {};                // Global Event Instance for the cancel event.  This instance is started and if already playing, restarted.

// Simple error checking function for all FMOD return values.
function CHECK_RESULT(result)
{
    if (result != FMOD.OK)
    {
        var msg = "Error!!! '" + FMOD.ErrorString(result) + "'";

        alert(msg);

        throw msg;
    }
}

// Will be called before FMOD runs, but after the Emscripten runtime has initialized
// Call FMOD file preloading functions here to mount local files.  Otherwise load custom data from memory or use own file system.
function prerun()
{
    var fileUrl = "public/js/";
    var fileName;
    var folderName = "/";
    var canRead = true;
    var canWrite = false;

    fileName = [
        "Master.bank",
        "Master.strings.bank"
    ];

    for (var count = 0; count < fileName.length; count++)
    {
        FMOD.FS_createPreloadedFile(folderName, fileName[count], fileUrl + fileName[count], canRead, canWrite);
    }
}

// Called when the Emscripten runtime has initialized
function main()
{
    // A temporary empty object to hold our system
    var outval = {};
    var result;

    console.log("Creating FMOD System object\n");

    // Create the system and check the result
    result = FMOD.Studio_System_Create(outval);
    CHECK_RESULT(result);

    console.log("grabbing system object from temporary and storing it\n");

    // Take out our System object
    gSystem = outval.val;

    result = gSystem.getCoreSystem(outval);
    CHECK_RESULT(result);

    gSystemCore = outval.val;

    // Optional.  Setting DSP Buffer size can affect latency and stability.
    // Processing is currently done in the main thread so anything lower than 2048 samples can cause stuttering on some devices.
    console.log("set DSP Buffer size.\n");
    result = gSystemCore.setDSPBufferSize(2048, 2);
    CHECK_RESULT(result);

    // Optional.  Set sample rate of mixer to be the same as the OS output rate.
    // This can save CPU time and latency by avoiding the automatic insertion of a resampler at the output stage.
    console.log("Set mixer sample rate");
    result = gSystemCore.getDriverInfo(0, null, null, outval, null, null);
    CHECK_RESULT(result);
    result = gSystemCore.setSoftwareFormat(outval.val, FMOD.SPEAKERMODE_DEFAULT, 0)
    CHECK_RESULT(result);

    console.log("initialize FMOD\n");

    // 1024 virtual channels
    result = gSystem.initialize(1024, FMOD.STUDIO_INIT_NORMAL, FMOD.INIT_NORMAL, null);
    CHECK_RESULT(result);

    // Starting up your typical JavaScript application loop
    console.log("initialize Application\n");

    initApplication();

    // Set the framerate to 50 frames per second, or 20ms.
    console.log("Start game loop\n");

    window.setInterval(updateApplication, 20);

    return FMOD.OK;
}

// Function called when user presses HTML Play Sound button, with parameter 0, 1 or 2.
function playEvent(soundid)
{
    
    if (soundid == 1)
    {
        // Vérifier si l'instance joue déjà
        var isPlaying = {};
        CHECK_RESULT( loopingAmbienceInstance.val.getPlaybackState(isPlaying) );
        
        if (isPlaying.val !== FMOD.STUDIO_PLAYBACK_PLAYING) {
            CHECK_RESULT( loopingAmbienceInstance.val.start() );
            console.log("Démarrage de l'instance FMOD");
        } else {
            console.log("L'instance FMOD joue déjà");
        }
    }
    else if (soundid == 2)
    {
        CHECK_RESULT( loopingAmbienceInstance.val.stop(FMOD.STUDIO_STOP_IMMEDIATE) );
        console.log("Arrêt de l'instance FMOD");
    }
}

// Fonction pour modifier le paramètre progression-structure
function setProgressionStructure(value)
{
    if (typeof loopingAmbienceInstance !== 'undefined' && loopingAmbienceInstance.val)
    {
        var result = {};
        // Modifier le paramètre même si l'instance ne joue pas encore
        try {
            CHECK_RESULT( loopingAmbienceInstance.val.setParameterByName("parameter:/progression-structure", value, result) );
            console.log("Paramètre parameter:/progression-structure mis à jour:", value, "(plage 0-100)");
        } catch (error) {
            console.error("Erreur lors de la mise à jour du paramètre progression-structure:", error);
        }
    }
    else
    {
        console.log("Instance FMOD non disponible pour setProgressionStructure");
    }
}

// Fonction pour modifier le paramètre rain-intensity
function setRainIntensity(value)
{
    if (typeof loopingAmbienceInstance !== 'undefined' && loopingAmbienceInstance.val)
    {
        var result = {};
        // Modifier le paramètre même si l'instance ne joue pas encore
        CHECK_RESULT( loopingAmbienceInstance.val.setParameterByName("parameter:/rain-intensity", value, result) );
        console.log("Paramètre parameter:/rain-intensity mis à jour:", value, "(plage 0-1)");
    }
    else
    {
        console.log("Instance FMOD non disponible pour setRainIntensity");
    }
}

// Fonction pour modifier le paramètre NatureBalance
function setNatureBalance(value)
{
    if (typeof loopingAmbienceInstance !== 'undefined' && loopingAmbienceInstance.val)
    {
        var result = {};
        // Modifier le paramètre même si l'instance ne joue pas encore
        CHECK_RESULT( loopingAmbienceInstance.val.setParameterByName("parameter:/NatureBalance", value, result) );
        console.log("Paramètre parameter:/NatureBalance mis à jour:", value, "(plage 0-1)");
    }
    else
    {
        console.log("Instance FMOD non disponible pour setNatureBalance");
    }
}

// Fonction pour modifier le paramètre progression-clarity
function setProgressionClarity(value)
{
    if (typeof loopingAmbienceInstance !== 'undefined' && loopingAmbienceInstance.val)
    {
        var result = {};
        // Modifier le paramètre même si l'instance ne joue pas encore
        CHECK_RESULT( loopingAmbienceInstance.val.setParameterByName("parameter:/progression-clarity", value, result) );
        console.log("Paramètre parameter:/progression-clarity mis à jour:", value, "(plage 0-1)");
    }
    else
    {
        console.log("Instance FMOD non disponible pour setProgressionClarity");
    }
}

// Fonction pour modifier le paramètre DayTime (Global)
function setDayTime(dayTimeValue)
{
    if (typeof gSystem !== 'undefined' && gSystem)
    {
        // Pour un paramètre Discrete, convertir jour/nuit en valeurs numériques
        var fmodValue;
        if (dayTimeValue === "day" || dayTimeValue === 0) {
            fmodValue = 12; // jour = 12
        } else if (dayTimeValue === "night" || dayTimeValue === 1) {
            fmodValue = 20; // nuit = 20
        } else {
            console.log("Valeur DayTime invalide:", dayTimeValue);
            return;
        }
        
        // Pour un paramètre Global, utiliser le système FMOD directement
        var result = {};
        CHECK_RESULT( gSystem.setParameterByName("DayTime", fmodValue, false) );
        console.log("Paramètre Global DayTime mis à jour:", fmodValue, "(jour=12, nuit=20)");
    }
    else
    {
        console.log("Système FMOD non disponible pour setDayTime");
    }
}

// Helper function to load a bank by name.
function loadBank(name)
{
    var bankhandle = {};
    CHECK_RESULT( gSystem.loadBankFile("/" + name, FMOD.STUDIO_LOAD_BANK_NORMAL, bankhandle) );
}

// Called from main, does some application setup.  In our case we will load some sounds.
function initApplication()
{
    console.log("Loading events\n");

    loadBank("Master.bank");
    loadBank("Master.strings.bank");

    // Get the Looping Ambience event
    var loopingAmbienceDescription = {};
    CHECK_RESULT( gSystem.getEvent("event:/Chill/Chill-Track1", loopingAmbienceDescription) );

    CHECK_RESULT( loopingAmbienceDescription.val.createInstance(loopingAmbienceInstance) );

    // Get the 4 Second Surge event
    var cancelDescription = {};
    //CHECK_RESULT( gSystem.getEvent("event:/UI/Cancel", cancelDescription) );

    //CHECK_RESULT( cancelDescription.val.createInstance(cancelInstance) );

    // Get the Explosion event
    //CHECK_RESULT( gSystem.getEvent("event:/Weapons/Explosion", explosionDescription) );

    // Start loading explosion sample data and keep it in memory
    //CHECK_RESULT( explosionDescription.val.loadSampleData() );
}

// Called from main, on an interval that updates at a regular rate (like in a game loop).
// Prints out information, about the system, and importantly calles System::udpate().
function updateApplication()
{
    var result;
    var cpu = {};

    result = gSystemCore.getCPUUsage(cpu);
    CHECK_RESULT(result);

    var channelsplaying = {};
    result = gSystemCore.getChannelsPlaying(channelsplaying, null);
    CHECK_RESULT(result);

    /*document.querySelector("#display_out").value = "Channels Playing = " + channelsplaying.val +
                                                   " : CPU = dsp " + cpu.dsp.toFixed(2) +
                                                   "% stream " + cpu.stream.toFixed(2) +
                                                   "% update " + cpu.update.toFixed(2) +
                                                   "% total " + (cpu.dsp + cpu.stream + cpu.update).toFixed(2) +
                                                   "%";*/

    var numbuffers = {};
    var buffersize = {};
    result = gSystemCore.getDSPBufferSize(buffersize, numbuffers);
    CHECK_RESULT(result);

    var rate = {};
    result = gSystemCore.getSoftwareFormat(rate, null, null);
    CHECK_RESULT(result);

    var sysrate = {};
    result = gSystemCore.getDriverInfo(0, null, null, sysrate, null, null);
    CHECK_RESULT(result);

    var ms = numbuffers.val * buffersize.val * 1000 / rate.val;

    // Update FMOD
    result = gSystem.update();
    CHECK_RESULT(result);
}
