# Pomodoro Timer App

Una aplicación de temporizador Pomodoro construida con React, diseñada para ayudar a los usuarios a mejorar su productividad mediante la técnica Pomodoro. Este método de gestión del tiempo alterna entre intervalos de trabajo concentrado y descansos breves, ayudando a mantener la concentración y reducir la fatiga mental.

## Características

### Modo Productivo y Modo Descanso

- **Modo Productivo:** Intervalos de 25 minutos dedicados a tareas enfocadas.
- **Modo Descanso:** Intervalos de 5 minutos para descanso y recuperación.
- El temporizador alterna automáticamente entre estos dos modos al finalizar cada intervalo.

### Inicio/Parada del Temporizador

- **Iniciar/Parar:** Los usuarios pueden iniciar o detener el temporizador en cualquier momento con un botón de control.
- Al iniciarse, el temporizador comenzará la cuenta regresiva desde el tiempo establecido para el modo actual (productivo o descanso).

### Reinicio del Temporizador

- **Reiniciar:** Restablece el temporizador, el modo y todas las estadísticas. El temporizador vuelve al modo productivo y se configura para 25 minutos.

### Estadísticas de Pomodoros

- **Pomodoros Completados:** Visualiza el número de pomodoros completados en la sesión actual.
- **Objetivo de Pomodoros:** Los usuarios pueden establecer un objetivo de pomodoros para la sesión. Una vez alcanzado el objetivo, se muestra un mensaje de "Fin de jornada".

### Notificaciones de Sonido

- **Sonidos de Cambio de Modo:** Reproduce sonidos diferentes al cambiar entre modos de trabajo y descanso para notificar al usuario.
  - Sonido para el modo productivo.
  - Sonido para el modo de descanso.

## Uso

### Instalación

Para instalar y ejecutar la aplicación localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/pomodoro-timer-app.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd pomodoro-timer-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

### Controles

- **Iniciar/Parar:** Haz clic en el botón "S/P" para iniciar o detener el temporizador.
- **Reiniciar:** Haz clic en el botón "R" para reiniciar el temporizador y las estadísticas.
- **Cambiar Modo:** Haz clic en el botón "sw" para cambiar manualmente entre el modo productivo y el modo descanso.
- **Establecer Objetivo de Pomodoros:** Introduce el número deseado de pomodoros en el campo de entrada y presiona Enter.

## Contribución

Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia para una nueva funcionalidad, por favor abre un issue o envía un pull request.
