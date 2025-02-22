AFRAME.registerComponent('rotate-model', {
    init: function () {
        this.el.addEventListener('click', () => {
            let model = document.querySelector('#model');
            let rotation = model.getAttribute('rotation');
            rotation.y += 45;
            model.setAttribute('rotation', rotation);
        });
    }
});

AFRAME.registerComponent('move-model', {
    init: function () {
        this.el.addEventListener('click', () => {
            let model = document.querySelector('#model');
            let position = model.getAttribute('position');
            position.x += 0.5;
            model.setAttribute('position', position);
        });
    }
});

AFRAME.registerComponent('zoom-model', {
    init: function () {
        this.el.addEventListener('click', () => {
            let model = document.querySelector('#model');
            let scale = model.getAttribute('scale');
            scale.x += 0.1;
            scale.y += 0.1;
            scale.z += 0.1;
            model.setAttribute('scale', scale);
        });
    }
});