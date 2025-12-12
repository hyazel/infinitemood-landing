/**
 * LofiConfig
 * Configuration for the "Lofi-Track1" evolution.
 */
const LofiConfig = {
    trackName: "Lofi-Track1",
    parameters: [
        {
            name: "progression-structure", // FMOD Global Parameter Name
            strategy: "Random",            // Strategy Class Name
            interval: 60000,               // Update every 60 seconds (in ms)
            config: {                      // Params passed to Strategy
                min: 0,
                max: 120
            }
        }
    ]
};

window.LofiConfig = LofiConfig;
