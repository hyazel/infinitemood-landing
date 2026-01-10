/**
 * LofiConfig
 * Configuration for the "Lofi-Track1" evolution.
 */
const LofiConfig = {
    trackName: "Lofi-Track1",
    parameters: [
        {
            name: "progression-structure",
            scope: "global",
            interval: 60000,
            strategy: new window.RandomStrategy({
                min: 0,
                max: 120
            })
        },
        {
            name: "fx-clarity",
            scope: "local",
            interval: 100, // Update often for smoothness
            strategy: new window.SineStrategy({
                min: 0.0,
                max: 1.0,
                period: 2 * 60000, // 2 minutes cycle
                phase: Math.PI / 2
            })
        }
    ]
};

window.LofiConfig = LofiConfig;
