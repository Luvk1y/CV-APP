export const dateBuilder = (d) => {
    let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Augosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

    let day = days[d.getDay()];
    let date = d.getDate(); 
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

export const api = {
    key: "9d1ff2080f4f8fae3906dcf5b7f245b5",
    base: "https://api.openweathermap.org/data/2.5/"
  }
