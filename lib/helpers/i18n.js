
let lang = 'ES';

const I18n = (term) => LANG[lang][term] || term;
I18n.set = (newLang) => lang = newLang && lang;
I18n.get = () => lang;


const LANG = {

  ES: {
    'Home': 'Home',


    // categories
    'MUSIC': 'Música',
    'THEATRE': 'Teatro',
    'FASHION': 'Moda',
    'SPIRITUALITY': 'Espiritualidad',
    'COURSES': 'Cursos',
    'PROFESSIONAL': 'Profesional',
    'SPORTS': 'Deportes',
    'EDUCATION': 'Educación',
    'PARTIES': 'Fiestas',
    'EXHIBITIONS AND MUSEUMS': 'Exhibiciones y Museos',
    'INFANTILE': 'Infantiles',
    'RECOMMENDED': 'Recomendados',

    // months
    'Jan': 'ENE',
    'Feb': 'FEB',
    'Mar': 'MAR',
    'May': 'MAY',
    'Jun': 'JUN',
    'Jul': 'JUL',
    'Aug': 'AGO',
    'Sep': 'SEP',
    'Oct': 'OCT',
    'Nov': 'NOV',
    'Dec': 'DIC',

    'January': 'Enero',
    'February': 'Febrero',
    'March': 'Marzo',
    'May': 'Mayo',
    'Jun': 'Junio',
    'July': 'Julio',
    'August': 'Agosto',
    'September': 'Septiembre',
    'October': 'Octubre',
    'November': 'Noviembre',
    'December': 'Diciembre',
    
    'missing field': 'Campo requerido: ',
    'field name': 'Nombre',
    'field category': 'Categoría',
    'field start_date': 'Fecha de inicio',
    'field end_date': 'Fecha de finalización',
    'field venue': 'Lugar a realizarse',
    'field activities': 'Tipos de entradas',
    'field stock': 'Cantidad',
    'field price value': 'Precio',

    months_upper: ['', 'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO','JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
    months: ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  }

};

export default I18n;
