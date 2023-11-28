document.addEventListener("DOMContentLoaded", function () {
    // Get the container
    var container = document.getElementById("panorama-container");

    // Create the panorama
    var panorama = document.createElement("a-sky");
    panorama.setAttribute("src", "path/to/your/360-image.jpg");
    
    // Add panorama to the container
    container.appendChild(panorama);
    // Create a hotspot
    var hotspot = document.createElement("a-entity");
    hotspot.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.05,
    });
    hotspot.setAttribute("material", {
        color: "red",
        shader: "flat",
    });
    hotspot.setAttribute("position", { x: 1, y: 2, z: -3 }); // Adjust the position
    hotspot.setAttribute("cursor-listener", ""); // Custom component for handling click events
    
    // Add hotspot to the panorama
    panorama.appendChild(hotspot);
});


AFRAME.registerComponent("cursor-listener", {
    init: function () {
        var el = this.el;

        el.addEventListener("click", function () {
            // Handle hotspot click event, e.g., navigate to another part of the house
            console.log("Hotspot clicked!");
        });
    },
});