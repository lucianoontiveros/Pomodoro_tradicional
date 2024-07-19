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

- **Iniciar/Parar:** Iniciar o para el pomo en curso <image src="src/assets/icons_png/img_play.png" height="20px" alt="Botón de Play"> <image src="src/assets/icons_png/img_pause.png" height="20px" alt="Botón de Pausa">
- **Reiniciar:** Haz clic en el botón para reiniciar el temporizador y las estadísticas. <image src="src/assets/icons_png/img_reset.png" height="20px" alt="Botón reset">
- **Cambiar Modo:** Haz clic en el botón para cambiar manualmente entre el modo productivo y el modo descanso. <image src="src/assets/icons_png/img_swicht.png" height="20px" alt="Botón Swicht">
- **Establecer Objetivo de Pomodoros:** Introduce el número deseado de pomodoros en el campo de entrada y presiona Enter.

## Contribución

Las contribuciones son bienvenidas. Si encuentras un error o tienes una sugerencia para una nueva funcionalidad, por favor abre un issue o envía un pull request.

# Pomodoro Timer Application

## Description

This React application is a Pomodoro timer that alternates between productive work sessions and short breaks. The timer includes features such as sound notifications, tracking the number of completed Pomodoros, and configurable total Pomodoros.

## Features

- **Timer Functionality**: The application provides a timer that counts down from 25 minutes for productive work sessions and 5 minutes for breaks.
- **Mode Switching**: Automatically switches between "Productive" and "Break" modes when the timer reaches zero.
- **Sound Notifications**: Plays different sounds when switching between modes and when starting the timer.
- **Start/Stop Timer**: Users can start or stop the timer with a single button.
- **Reset Timer**: Resets the timer and all settings to their initial state.
- **Track Pomodoros**: Tracks and displays the number of completed Pomodoros out of a user-defined total.
- **Interactive Controls**: Users can input the total number of Pomodoros they plan to complete.

## Code Overview

### State Variables

- `mode`: Indicates the current mode of the timer (`"productivo"` or `"descanso"`).
- `timeLeft`: Stores the remaining time in seconds for the current mode.
- `totalPomos`: Total number of Pomodoros the user plans to complete.
- `pomosCompleted`: Number of Pomodoros completed so far.
- `isRunning`: Indicates whether the timer is currently running.
- `totalPomosInput`: Stores the user input for the total number of Pomodoros.

### Functions

- **playSound**: Plays a given sound file.
- **switchMode**: Switches between productive and break modes, updates the timer and plays a sound.
- **startStopTimer**: Toggles the timer between running and stopped states and plays a sound when starting.
- **resetTimer**: Resets the timer and all Pomodoro-related state variables to their initial values.
- **handleTotalPomosChange**: Updates the total number of Pomodoros based on user input.

### Effects

- **useEffect**: Manages the timer countdown and switches modes when the timer reaches zero. Stops the timer if the user has completed the set number of Pomodoros.

### JSX Structure

- **Timer Display**: Shows the remaining time and current mode.
- **Pomodoro Stats**: Displays the number of completed Pomodoros out of the total set by the user.
- **Controls**: Provides buttons to start/stop the timer, reset the timer, and manually switch modes.

## How to Run the Application

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the application with `npm start`.
4. The application will run in the development mode, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Set Total Pomodoros**: Enter the number of Pomodoros you plan to complete in the input field.
2. **Start/Stop Timer**: Click the play/pause button to start or stop the timer. <image src="src/assets/icons_png/img_play.png" height="20px" alt="Botón de Play"> <image src="src/assets/icons_png/img_pause.png" height="20px" alt="Botón de Pausa">
3. **Switch Mode Manually**: Use the switch mode button to toggle between productive and break modes manually. <image src="src/assets/icons_png/img_swicht.png" height="20px" alt="Botón Swicht">
4. **Reset Timer**: Use the reset button to reset the timer and all settings. <image src="src/assets/icons_png/img_reset.png" height="20px" alt="Botón reset">

## Icons

The application uses custom icons for play, pause, reset, and switch mode buttons. Ensure that the icons (`Icon_play`, `Icon_pause`, `Icon_reset`, `Icon_sw`) are properly imported from the `assets/icons` directory.
