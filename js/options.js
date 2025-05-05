const modelosPorMarca = {
    Dell: ["Latitude 3410", "Latitude 3420", "Latitude 5420", "Vostro 3400"],
    Honeywell: ["RK95"],
    HP: ["Pavilion", "ProBook 440 G7", "ProBook 440 G8", "ProBook 440 G9", "ProBook 440 G10", "Pro Mini 400 G9"],
    Lenovo: ["IdeaPad", "ThinkPad", "Yoga"],
    MacOS: ["MAC BOOK AIR MI 20202", "MAC BOOK PRO", "MAC BOOK PRO 14"],
    Samsung: ["Galaxy Tab A9+", "SM-X210"],
    Zebra: ["ZQ210", "ZQ320"]
};

const sistemaOperativo = {
    "Windows 10": ["Dell", "HP", "Lenovo"],
    "Windows 11": ["Dell", "HP", "Lenovo"],
    "Android": ["Honeywell", "Samsung", "Zebra"],
    "MacOS": ["MacOS"]
};

const procesadoresPorMarca = {
    Dell: ["Intel Core i5", "Intel Core i7", "AMD Ryzen 5"],
    HP: ["Intel Core i3", "Intel Core i5", "Intel Core i7"],
    Lenovo: ["Intel Core i5", "Intel Core i9", "AMD Ryzen 7"],
    MacOS: ["Apple M1", "Apple M2"],
    Samsung: ["Exynos", "Snapdragon"],
    Zebra: ["Qualcomm Snapdragon"],
    Honeywell: ["Qualcomm Snapdragon"]
};

const memoriaRAMPorMarca = {
    Dell: ["8GB", "16GB", "32GB"],
    HP: ["4GB", "8GB", "16GB"],
    Lenovo: ["8GB", "16GB", "32GB"],
    MacOS: ["8GB", "16GB"],
    Samsung: ["4GB", "8GB"],
    Zebra: ["2GB", "4GB"],
    Honeywell: ["2GB", "4GB"]
};

const capacidadDiscoPorMarca = {
    Dell: ["256GB SSD", "512GB SSD", "1TB HDD"],
    HP: ["256GB SSD", "512GB SSD", "1TB HDD"],
    Lenovo: ["256GB SSD", "512GB SSD", "1TB HDD"],
    MacOS: ["256GB SSD", "512GB SSD"],
    Samsung: ["64GB", "128GB"],
    Zebra: ["16GB", "32GB"],
    Honeywell: ["16GB", "32GB"]
};

const versionesOfficePorMarca = {
    Dell: ["Office 2016", "Office 2019", "Office 365"],
    HP: ["Office 2016", "Office 2019", "Office 365"],
    Lenovo: ["Office 2016", "Office 2019", "Office 365"],
    MacOS: ["Office 2019", "Office 365"],
    Samsung: ["Office Mobile"],
    Zebra: ["No aplica"],
    Honeywell: ["No aplica"]
};

const sistemaOperativoElement = document.getElementById("sistemaOperativo");
const marcaEquipo = document.getElementById("marcaEquipo");
const modeloEquipo = document.getElementById("modeloEquipo");
const procesadorEquipo = document.getElementById("procesadorEquipo");
const memoriaRAMEquipo = document.getElementById("memoriaRAMEquipo");
const capacidadDiscoEquipo = document.getElementById("capacidadDiscoEquipo");
const versionOfficeEquipo = document.getElementById("versionOfficeEquipo");

marcaEquipo.addEventListener("change", () => {
    const marcaSeleccionada = marcaEquipo.value;

    // Actualizar modelos según la marca seleccionada
    modeloEquipo.innerHTML = '<option value="">Seleccione un modelo</option>';
    if (modelosPorMarca[marcaSeleccionada]) {
        modelosPorMarca[marcaSeleccionada].forEach(modelo => {
            const option = document.createElement("option");
            option.value = modelo;
            option.textContent = modelo;
            modeloEquipo.appendChild(option);
        });
    }

    // Actualizar sistemas operativos según la marca seleccionada
    sistemaOperativoElement.innerHTML = '<option value="">Seleccione un Sistema</option>';
    for (const [sistema, marcas] of Object.entries(sistemaOperativo)) {
        if (marcas.includes(marcaSeleccionada)) {
            const option = document.createElement("option");
            option.value = sistema;
            option.textContent = sistema;
            sistemaOperativoElement.appendChild(option);
        }
    }

    // Actualizar procesadores según la marca seleccionada
    procesadorEquipo.innerHTML = '<option value="">Seleccione un Procesador</option>';
    if (procesadoresPorMarca[marcaSeleccionada]) {
        procesadoresPorMarca[marcaSeleccionada].forEach(procesador => {
            const option = document.createElement("option");
            option.value = procesador;
            option.textContent = procesador;
            procesadorEquipo.appendChild(option);
        });
    }

    // Actualizar memoria RAM según la marca seleccionada
    memoriaRAMEquipo.innerHTML = '<option value="">Seleccione Memoria RAM</option>';
    if (memoriaRAMPorMarca[marcaSeleccionada]) {
        memoriaRAMPorMarca[marcaSeleccionada].forEach(ram => {
            const option = document.createElement("option");
            option.value = ram;
            option.textContent = ram;
            memoriaRAMEquipo.appendChild(option);
        });
    }

    // Actualizar capacidad de disco según la marca seleccionada
    capacidadDiscoEquipo.innerHTML = '<option value="">Seleccione Capacidad de Disco</option>';
    if (capacidadDiscoPorMarca[marcaSeleccionada]) {
        capacidadDiscoPorMarca[marcaSeleccionada].forEach(disco => {
            const option = document.createElement("option");
            option.value = disco;
            option.textContent = disco;
            capacidadDiscoEquipo.appendChild(option);
        });
    }

    // Actualizar versiones de Office según la marca seleccionada
    versionOfficeEquipo.innerHTML = '<option value="">Seleccione Versión de Office</option>';
    if (versionesOfficePorMarca[marcaSeleccionada]) {
        versionesOfficePorMarca[marcaSeleccionada].forEach(office => {
            const option = document.createElement("option");
            option.value = office;
            option.textContent = office;
            versionOfficeEquipo.appendChild(option);
        });
    }
});