// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, ScrollView, Text, StyleSheet, Platform } from '../components/core';

import Header from '../components/header';


class Terms extends Component {
  
  props: Object;
  state: Object;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = {};
  }
  
  
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
        <Text style={styles.text}>SEVNT es una plataforma de venta de entradas, organización de eventos e inscripción online cuyo objetivo es permitirle al usuario ingresar a los eventos sin la entrada en formato papel, gracias a nuestros servicios, aplicaciones para dispositivos móviles y plataforma, ofrecemos a personas de todo el mundo la posibilidad de acceder a los eventos con la sola presentación de su DNI y/o Identificación Personal.
 Las Entradas (en adelante las “Entrada/s”) son vendidas por "SEVNT S.R.L” con domicilio en Helguera 2595/99, piso 6, dpto. 24 de la Ciudad de Buenos Aires, Nro. de CUIT 30-71545082-4, (en adelante “SEVNT”) como agente, actuando por cuenta y orden del Promotor/Productor/Teatro/Estadio (en adelante el “Organizador”) del evento o espectáculo. El Organizador es el único y directo responsable del espectáculo o evento a realizarse, sujeto a las condiciones de venta del Organizador.
 Si la fecha de un evento variara por alguna circunstancia, las Entradas serán válidas para la fecha definitiva que fije e informe el Organizador.
Si un evento es suspendido, cancelado o reprogramado debido a cualquier causa, incluso las que respondan a caso fortuito o fuerza mayor, no existirá derecho a efectuar reclamo alguno contra SEVNT por devoluciones o cambios.
 El consumidor tiene derecho a revocar la aceptación durante el plazo de 10 (diez) días corridos a partir de la fecha en que se entregue el bien o se celebre el contrato, lo último que ocurra, sin responsabilidad alguna. Esta facultad no puede ser dispensada ni renunciada. Dado que SVENT actúa como intermediario y por cuenta y orden del Organizador, cualquier reclamo deberá ser ejercido exclusivamente ante el Organizador. Sin perjuicio de ello, SVENT, sin asegurar resultado o garantía alguna, podrá ofrecer a su exclusivo criterio sus servicios en base a esfuerzos razonables para gestionar dichos reclamos.
El Organizador se reserva el derecho de agregar, modificar o sustituir artistas, variando los programas, precios y ubicaciones difundidas, así como la capacidad del auditorio, conforme esto sea informado oportunamente. El Organizador se reserva el derecho de admisión y permanencia. Las llegadas tarde del público implicarán que el ingreso del mismo se efectúe en el intervalo o cuando el Organizador lo considere oportuno a su exclusivo criterio.
El ingreso al evento se hará UNICAMENTE con DNI, quedando a cargo del Organizador la forma en la cual se lleve a cabo el chequeo y/o escaneo del mismo.
Antes de ingresar al evento, los espectadores podrán ser sometidos a un chequeo por parte del personal de seguridad, impidiéndose la entrada a quien se niegue a recibirlo, no acarreando esto ninguna responsabilidad o consecuencia para el Organizador.
 No será permitido el ingreso al evento con pirotecnia, grabadoras, filmadoras, cámaras de fotografía y de video, ni cualquier elemento similar a los mencionados a criterio del Organizador, pudiendo los mismos ser retirados del lugar y destruido su contenido. El Organizador podrá solicitar que se apague todo equipo de radio llamada o teléfono celular antes del acceso al evento.
El sistema SEVNT permite a los clientes adquirir Entradas a través de Internet u otros medios digitales similares. El sistema selecciona el mejor lugar disponible al momento de realizar su compra, de acuerdo al nivel de precio solicitado.
Toda compra realizada a través del sistema SVENT permite al usuario no tener la necesidad de dirigirse a ningún local a retirar la entrada, al momento de realizar la compra y completar los datos requeridos, el Número de DNI y/o Identificación (sea Argentino y/o extranjero) es lo que permitirá el acceso al evento.
SEVNT no será responsable si el usuario completa datos falsos y/o erróneos, que no permitan el acceso al evento. Es absoluta responsabilidad del usuario los datos que serán completos en el carácter de declaración jurada.
El adquirente de Entradas es responsable de chequear, aceptar y confirmar los términos y condiciones de su compra previo a realizarla, incluyendo sin limitación: (i) la descripción y especificación del evento para el cual adquirió las Entradas, (ii) los precios y condiciones de pago, Por ello antes de completar su compra, por favor revise cuidadosamente el evento, sección y ubicación deseada, ya que una vez confirmada la compra no se permiten cambios, reembolsos y/o devoluciones por este motivo.
La confirmación de la compra que el usuario realiza con su tarjeta de crédito está sujeta a la autorización de la empresa emisora de ésta.
No necesariamente tiene que ser la misma persona quien realizo la compra o titular de la Tarjeta de Crédito utilizada y quien asistirá al evento, solo es condición necesaria que quien asiste al evento complete sus datos personales y lleve consigo el DNI.
Tenga en cuenta estos requisitos, ya que es necesario para el ingreso al evento y SEVNT se deslinda de todo tipo de responsabilidad en este sentido. Recuerde que estos procedimientos han sido implementados para su seguridad.
Para tener acceso a la pagina y/o aplicación de SEVNT usted requiere tener habilitado el modo gráfico y aceptar cookies en su browser o navegador. Si su navegador o browser tiene deshabilitadas estas dos opciones, por favor habilítelas y vuelva a cargar esta página.
Al utilizar los servicios de SEVNT, el titular de datos personales presta su consentimiento conforme a lo establecido en la ley 25326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar que sus datos personales integren la base de datos de SEVNT, otorgando por la presente, autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SEVNT.
El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita y a intervalos no inferiores a seis meses, salvo que se acredite tener un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. El titular de los datos, tiene además la posibilidad de ejercer los derechos de rectificación, y supresión de los datos conforme artículo 6, inciso “e” de la Ley 25.326.
Ley 25.326- Artículo 27- inciso 3. — (Archivos, registros o bancos de datos con fines de publicidad). “El titular podrá en cualquier momento solicitar el retiro o bloqueo de su nombre de los bancos de datos a los que se refiere el presente artículo”.
Decreto 1558/01 –Anexo I- Artículo.- 3º párrafo. “En toda comunicación con fines de publicidad que se realice por correo, teléfono, correo electrónico, Internet u otro medio a distancia a conocer, se deberá indicar, en forma expresa y destacada, la posibilidad del titular del dato de solicitar el retiro o bloqueo, total o parcial, de su nombre de la base de datos. A pedido del interesado, se deberá informar el nombre del responsable o usuario del banco de datos que proveyó la información”.
La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</Text>
  
  
        <Text style={styles.text}>Políticas de Privacidad</Text>
        <Text style={styles.text}>La seriedad comercial y el sólido respaldo de SEVNT, son la garantía de un estricto compromiso con usted: la completa reserva de los datos que nos suministre. Es decir que esa información no será vendida, alquilada o intercambiada con terceros.
La información proporcionada por el usuario será recopilada por SEVNT, serán datos personales los proporcionados de forma voluntaria a los Servicios prestados, como ser, cuando el usuario se inscriba para acceder al sistema, cuando se ponga en contacto con SEVNT para resolver dudas, al responder a alguna de nuestras encuestas o al buscar y/o usar ciertas partes de los servicios.
Entre los Datos personales que serán recopilados por SEVNT se incluyen, entre otros, el nombre, la dirección postal, la dirección de correo electrónico, y cualquier otro tipo de información que permita identificar a los Usuarios personalmente.
Asimismo, SEVNT recopila información automáticamente, como ser; ciertos datos técnicos que recibimos de la computadora, el dispositivo móvil o el navegador a través del cual el usuario accede a los Servicios prestados por SEVNT (“Datos automáticos”). Entre estos Datos automáticos se incluyen, entre otros, un identificador exclusivo asociado al navegador o dispositivo de acceso (incluida, por ejemplo, tu dirección IP), las características del navegador o dispositivos de acceso, estadísticas acerca de las actividades en los usuarios en la web de SEVNT, información sobre cómo accedió a los Servicios y datos recopilados a través de cookies, etiquetas de píxel, objetos compartidos locales, almacenamiento en la Web y demás tecnologías similares.
Al inscribirse para acceder a los Servicios o, al enviarnos Datos personales, podemos asociar otros Datos no personales, incluidos los datos recopilados de terceros. En tal caso, SEVNT tratara todos aquellos datos combinados pertinentes como si se tratara de Datos personales hasta el momento en que ya no se puedan asociar al usuario y/o usar para su identificación.
Los datos recopilados de los organizadores serán mayores, como ser, en ocasiones, se recopilaran datos de su tarjeta de crédito (por ejemplo, el número de la tarjeta de crédito, la fecha de expiración, la dirección de facturación, etc.), los cuales serán recopilados con el fin de asegurar determinados pagos.
Para los participantes se recopilaran Datos personales adicionales, como ser información financiera como el número de la tarjeta de crédito, la fecha de expiración, la dirección de facturación, etc., de los cuales algunos pueden ser datos personales. Además, los Organizadores pueden configurar páginas de inscripción a eventos para recopilar prácticamente todo tipo de información de los Participantes en relación al un evento de un Organizador que se encuentre en la lista de los Servicios. Si un Participante proporciona voluntariamente tal información sobre la inscripción a un evento o de otro modo, SEVNT podrá disponer de esta y guardarla de acuerdo con las disposiciones de la presente Política de privacidad. Asimismo, dicha información se le proporcionará al Organizador del evento.
SEVNT podrá usar los Datos personales para fines comerciales internos como, por ejemplo, para basarse en ellos con el fin de mejorar el contenido y la funcionalidad de los Servicios, comprender mejor a nuestros Usuarios, mejorar los Servicios, proteger, identificar y/o abordar actividades fraudulentas, reforzar nuestras Condiciones de servicio, gestionar la cuenta de los usuarios y proporcionar un servicio de atención al cliente y, de manera general, gestionar los Servicios y actividad comercial, entre otros.
Cuando se ajuste a las preferencias de los usuarios, SEVNT podrá usar los Datos personales para ponerse en contacto con el usuario, en el futuro, para fines de marketing y/o publicidad como, por ejemplo, para informar acerca de servicios y/o eventos que considere que puedan ser de su interés, desarrollar material promocional y/o de marketing y facilitarlo, así como, mostrar el contenido y publicidad en los Servicios o fuera de estos que, a criterio de SEVNT, pueda interesarle al usuario. En concreto, los Organizadores deben tener en cuenta que se podrá usar la información que recibimos o recopilamos sobre los Participantes (como, por ejemplo, la obtenida a través de la página de inscripción a un evento de un Organizador, entre otro tipo de información) de acuerdo con los términos dispuestos en la presente Política de privacidad, incluso en la forma establecida anteriormente.
SEVNT Podrá compartir los Datos personales con sus contratistas y/o proveedores de servicios que utilicen Datos personales en nombre de SEVNT para realizar actividades relacionadas con el negocio. Entre estas empresas, se incluyen agencias de marketing, proveedores de servicios de bases de datos, proveedores de servicios de recuperación ante desastres y de respaldo, y proveedores de servicios de correo electrónico, etc. Cuando contratamos a otras empresas para que realicen tales funciones, es posible que les proporcionemos información, incluidos los Datos personales, relacionada con la realización de dichas funciones.
Al comprar entradas, inscribirse o realizar donaciones para un evento o una página relacionada de recaudación de fondos en los Servicios, facilitamos los Datos personales introducidos en la página de recaudación de fondos o evento aplicable a los Organizadores de dicha página de recaudación de fondos o evento. En el caso de las páginas de recaudación de fondos, podríamos facilitarle tus Datos personales tanto a la organización benéfica que organiza la página de recaudación de fondos como al Organizador del evento al que está vinculada la página de recaudación de fondos. Asimismo, SEVNT queda eximido de cualquier responsabilidad por las acciones llevadas a cabo por dichos Organizadores en relación con los Datos personales proporcionados. Es importante que el usuario revise las políticas aplicables de los Organizadores de un evento (y de la página de recaudación de fondos relacionada, si la hubiera) antes de facilitar Datos personales u otra información en relación con dicho evento o la página de recaudación de fondos relacionada.
SEVNT está habilitado para conectar tu cuenta de SEVNT con tus cuentas en servicios de terceros como Facebook. En ese caso, podríamos recopilar, utilizar, divulgar, transferir y almacenar/guardar información relativa a tu cuenta con dichos servicios de terceros, de acuerdo con la presente Política de privacidad. Por ejemplo, al realizar una conexión con Facebook, se almacenaran los datos ID de Facebook, nombre, apellidos, correo electrónico, ubicación, lista de amigos e imagen de perfil, y se utilizará estos datos para conectar con su cuenta de Facebook a fin de proporcionar ciertas funciones en los Servicios como, por ejemplo, recomendar eventos en los que están interesados los amigos de Facebook y compartir los eventos en los que está interesado el usuario, o asistir, con determinados grupos de personas, como tus amigos de Facebook.
SEVNT podrá conservar los Datos personales de los usuarios mientras utilice los Servicios de SEVNT, pudiendo este cerrar tu cuenta cuando lo desee, lo que no significara que los datos sean eliminados, se podrán conservar Datos personales durante más tiempo si las leyes aplicables así lo permite o lo exigen. Aunque se elimine los datos de Usuario, los Datos personales podran seguir existiendo en soportes de archivo o copias de seguridad durante un período adicional por razones reglamentarias, de impuestos y/o legales, o por razones comerciales legales y legítimas.
La tramitación de solicitud de anulación de suscripción y/o usuario puede tardar hasta 72 horas en completarse. Incluso al dejar de recibir todo tipo de mensajes electrónicos, seguiremos conservando tus datos Personales de acuerdo con esta Política de privacidad, pero no se usaran para que SEVNT se ponga en contacto con el Usuario. No obstante, aquellos organizadores que ya hayan recibido los Datos personales de los usuarios de acuerdo con lo estipulado en esta Política de privacidad podrán seguir usando esa información para ponerse en contacto con vos, de acuerdo con sus propias Políticas de privacidad, pero no podrán usar el sistema de SEVNT a tales efectos.</Text>


        <Text style={[styles.text, {marginBottom: 24}]}>Si el titular de datos personales utiliza los servicios de SEVNT, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de SEVNT, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SEVNT S.R.L.
El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita y a intervalos no inferiores a seis meses, salvo que se acredite tener un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326
 El titular de los datos, tiene además la posibilidad de ejercer los derechos de rectificación, y supresión de los datos conforme artículo 6, inciso “e” de la Ley 25.326. Los datos solicitados como obligatorios son aquellos que sirven para la identificación del usuario conforme articulo 6, inciso “c”, la inexactitud o la negativa a completar los campos obligatorios, serán la no posibilidad de acceso al sistema de servicios on line de SEVNT, conforme al articulo 6, inciso “d”.
La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
 De esta manera, SEVNT también garantiza su confianza y su preferencia.</Text>
  
        </ScrollView>
        
        <Header navigator={this.props.navigator}  title="Usos, Términos y Condiciones" />
      </View>
    );
  }
}

const Container = connect(store => store)( Terms );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70,
  },
  
  text: {
    fontSize: 14,
    color: '#444444',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24
  }
  
});