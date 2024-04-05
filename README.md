# Expense Tracker

Este proyecto es una aplicación de seguimiento de gastos desarrollada en React. Permite a los usuarios registrar sus transacciones financieras, ver un resumen de ingresos y gastos, así como visualizar esta información en un gráfico circular.

## Créditos

Este proyecto se basa en un tutorial de YouTube realizado por [FaztCode](https://www.youtube.com/@FaztCode), quien proporcionó el código original y la inspiración para esta aplicación. Puedes encontrar el tutorial original [aquí](https://www.youtube.com/watch?v=zN6xXtHww54) y el repositorio del código de FaztCode [aquí](https://github.com/fazt/react-expense-tracker).

## Características

### Del Código Original proporcionado por FaztCode:

- Registro de transacciones de ingresos y gastos.
- Visualización de saldo actual.
- Resumen de ingresos y gastos.
- Gráfico circular que muestra la distribución de ingresos y gastos.
- Persistencia de datos utilizando `localStorage`.

### Adiciones Realizadas:

- **Manejo de Ingresos y Gastos Separados**: Agregué la funcionalidad para manejar ingresos y gastos por separado, con botones distintos en el formulario de transacción. Esto permite una mejor organización de las transacciones y una experiencia de usuario más clara.
- **Validación de Campos en el Formulario de Transacción**: Añadí validación a los campos de descripción y cantidad en el formulario de transacción para asegurar que no estén vacíos antes de enviar la transacción.
- **Mejoras en el Gráfico de Gastos**: Realicé ajustes en el gráfico de gastos para mostrar un mensaje cuando no hay transacciones y mejorar los estilos de la etiqueta de porcentaje.
- **Refactorización y Estilización**: Refactoricé algunos componentes para mejorar la legibilidad y los estilos utilizando Tailwind CSS.

## Propósito

El propósito de este proyecto es practicar el desarrollo web utilizando tecnologías modernas como React, así como mejorar las habilidades en el manejo del estado global con Context API y el uso de estilos con Tailwind CSS.

## Instalación

1. Clona este repositorio en tu máquina local utilizando `git clone`.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.
