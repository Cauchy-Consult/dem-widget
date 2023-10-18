// Access the container div by its id
var widgetContainer = document.getElementById('your-widget-container');

// Create and render the widget content within the container
var widgetContent = document.createElement('div');
widgetContent.innerHTML = '<button class="dem-widget-btn" role="button">Yay les go!</button>';
widgetContainer.appendChild(widgetContent);

// You can also load additional JavaScript and CSS for the widget dynamically if needed
var widgetScript = document.createElement('script');
widgetScript.src = 'path/to/your-widget.js';
document.head.appendChild(widgetScript);

// Include widget-specific CSS styles if necessary
var widgetStyles = document.createElement('link');
widgetStyles.rel = 'stylesheet';
widgetStyles.href = 'path/to/your-widget-styles.css';
document.head.appendChild(widgetStyles);
