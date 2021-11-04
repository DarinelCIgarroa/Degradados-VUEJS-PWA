const app = Vue.createApp({
    data() {
        return {
            title: "Gradiente Gen",
            firstColor: "#317256",
            secondColor: "#645188",
            orientation: "right"
        }
    },
    methods: {
        copyColor() {
            const inputSetColor = document.querySelector("#inputSetColor");
            // Selecciona el contenido del campo
            inputSetColor.select();

            // Copia el texto seleccionado
            document.execCommand("copy");
            alert('Copiado Correctamente');
        },
    },
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation}, ${this.firstColor}, ${this.secondColor} );`
        }
    }
})
