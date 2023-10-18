console.log("is my js executing??")

document.addEventListener('DOMContentLoaded', function () {
    // Access the container div by its id
    var widgetContainer = document.getElementById('dem-widget-container');
    console.log("DOMLOADED?")
    // Create and render the widget content within the container
    var widgetContent = document.createElement('div');
    widgetContent.innerHTML = '<button class="dem-widget-btn" role="button">Yay, lets go!</button>';
    widgetContainer.appendChild(widgetContent);

    // You can also load additional JavaScript and CSS for the widget dynamically if needed
    // var widgetScript = document.createElement('script');
    // widgetScript.src = 'path/to/your-widget.js';
    // document.head.appendChild(widgetScript);

    // Include widget-specific CSS styles
    var widgetStyles = document.createElement('link');
    widgetStyles.rel = 'stylesheet';
    widgetStyles.href = 'https://raw.githubusercontent.com/Cauchy-Consult/dem-widget/test-tag-1.3/dem-widget.css';
    document.head.appendChild(widgetStyles);
});