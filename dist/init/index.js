async function init() {
    // Display a confirmation loading message
    console.log(
        "%cLoading Harmonia...",
        "font-size: 25px;color: white; text-shadow: 3px 3px 0 rgb(14,14,14); text-align: center;"
    );

    // Confirm that we are loaded if there are no errors
    console.log(
        "%cHarmonia has initialised!",
        "font-weight: bold; font-size: 50px;color: white; text-shadow: 3px 3px 0 rgb(14,14,14); text-align: center;"
    );
}

try {
    init()
} catch(error) {
    console.log(
        "%cHarmonia failed to initialise...",
        "font-size: 25px;color: white; text-shadow: 3px 3px 0 rgb(14,14,14); text-align: center;"
    );
    console.log(error)
}