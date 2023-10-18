document.addEventListener("DOMContentLoaded", function () {
    // Access the container div by its id
    var widgetContainer = document.getElementById("dem-widget-container");

    // Create and render the widget content within the container
    var widgetContent = document.createElement("div");
    widgetContent.className = "dem-widget-btn-container";
    // widgetContent.innerHTML = '<button class="dem-widget-btn" role="button">Yay, lets go!</button>';

    fetch("dem-widget.html")
        .then((response) => response.text()) // Get the response text
        .then((data) => {
            // Insert the content into the container
            widgetContent.innerHTML = data;
            var widgetStyles = document.createElement("link");
            widgetStyles.rel = "stylesheet";
            widgetStyles.href = "https://cauchy-consult.github.io/dem-widget/dem-widget.css";
            document.head.appendChild(widgetStyles);

            const showDemDialog = document.getElementById("show-dem-dialog");
            const DemDialog = document.getElementById("dem-dialog");
            const selectEl = DemDialog.querySelector("select");
            const confirmBtn = DemDialog.querySelector("#confirmBtn");
            const outputBox = document.querySelector("output");
            // "Show the dialog" button opens the <dialog> modally
            showDemDialog.addEventListener("click", () => {
                DemDialog.showModal();
            });

            // "Favorite animal" input sets the value of the submit button
            selectEl.addEventListener("change", (e) => {
                confirmBtn.value = selectEl.value;
            });

            // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
            DemDialog.addEventListener("close", (e) => {
                outputBox.value =
                    DemDialog.returnValue === "default"
                        ? "No return value."
                        : `ReturnValue: ${DemDialog.returnValue}.`; // Have to check for "default" rather than empty string
            });

            confirmBtn.addEventListener("click", (event) => {
                event.preventDefault(); // We don't want to submit this fake form
                DemDialog.close(selectEl.value); // Have to send the select box value here.
            });
        })
        .catch((error) => {
            console.error("Error loading content:", error);
        });
    widgetContainer.appendChild(widgetContent);
    // You can also load additional JavaScript and CSS for the widget dynamically if needed
    // var widgetScript = document.createElement('script');
    // widgetScript.src = 'path/to/your-widget.js';
    // document.head.appendChild(widgetScript);

    // Include widget-specific CSS styles
});
