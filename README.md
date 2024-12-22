# Color-Switch-with-Frontend-Project
Dark Mode Toggle  A simple implementation of a dark mode toggle button using HTML, CSS, and JavaScript. The toggle button allows users to switch between light and dark themes for a webpage with smooth animations.

Features

Dark Mode: Toggles between light and dark themes.

Smooth Animations: Includes animations for the toggle switch transition.

Responsive Design: Works well on all screen sizes.

# Dark Mode Toggle

A simple implementation of a dark mode toggle button using HTML, CSS, and JavaScript. The toggle button allows users to switch between light and dark themes for a webpage with smooth animations.

## Features

- **Dark Mode:** Toggles between light and dark themes.
- **Smooth Animations:** Includes animations for the toggle switch transition.
- **Responsive Design:** Works well on all screen sizes.

## Demo

### Light Mode:
![Light Mode](light-mode-demo.png)

### Dark Mode:
![Dark Mode](dark-mode-demo.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dark-mode-toggle.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dark-mode-toggle
   ```

3. Open `index.html` in your browser to view the project.

## Usage

### Files
- **`index.html`:** Contains the HTML structure for the toggle button.
- **`style.css`:** Includes the styles and animations for the toggle button.
- **`script.js`:** Contains the JavaScript logic for switching between light and dark modes.

### Adding to Your Project

1. Include the `style.css` and `script.js` files in your project.
2. Add the following HTML to your webpage:
   ```html
   <input type="checkbox" id="dark-mode" class="input" />
   <label for="dark-mode" class="label" onclick="clicker()">
       <div class="circle"></div>
   </label>
   ```
3. Ensure you have the `clicker()` function defined in your JavaScript file to handle the toggle logic.

## Code Explanation

### HTML
- The toggle button is implemented using a checkbox input hidden with CSS. The label element acts as the visible toggle switch.

### CSS
- Provides the styles for the toggle switch, including the light and dark modes.
- Includes animations (`toggleOn` and `toggleOff`) for smooth transitions of the circle within the toggle button.

### JavaScript
- The `clicker()` function toggles classes to switch between light and dark themes and update the styles of the toggle button.

## Customization

- **Toggle Colors:**
  Modify the `.dark-label` and `.dark-circle` styles in `style.css` to customize the colors for dark mode.

- **Animations:**
  Adjust the `@keyframes toggleOn` and `@keyframes toggleOff` in `style.css` to change the toggle animation speed or style.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.



