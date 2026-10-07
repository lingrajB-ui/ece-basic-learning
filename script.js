// Component display functions
function showResistor() {
    alert('Resistor:\n\nA resistor is an electronic component that resists the flow of electric current. Resistance is measured in Ohms (Ω).\n\nUses:\n- Limiting current in circuits\n- Protecting components\n- Creating voltage drops');
}

function showLED() {
    alert('LED (Light Emitting Diode):\n\nAn LED is a semiconductor that emits light when forward biased.\n\nCharacteristics:\n- Low power consumption\n- Long lifespan\n- Various colors available\n- Requires current limiting resistor');
}

function showBattery() {
    alert('Battery:\n\nA battery is a device that converts chemical energy into electrical energy.\n\nTypes:\n- Primary cells (non-rechargeable)\n- Secondary cells (rechargeable)\n- Voltage depends on type\n- Common voltages: 1.5V, 3V, 9V, 12V');
}

function showCapacitor() {
    alert('Capacitor:\n\nA capacitor stores electrical energy in an electric field.\n\nCharacteristics:\n- Measured in Farads (F)\n- Stores and releases charge\n- Blocks DC, passes AC\n- Used in filtering and timing circuits');
}

function showDiode() {
    alert('Diode:\n\nA diode is a semiconductor that allows current to flow in one direction only.\n\nTypes:\n- Rectifier diode\n- Zener diode\n- Photodiode\n- Used for rectification and protection');
}

function showTransistor() {
    alert('Transistor:\n\nA transistor is a semiconductor device used to amplify or switch electronic signals.\n\nTypes:\n- Bipolar Junction Transistor (BJT)\n- Field Effect Transistor (FET)\n- Used in amplifiers and digital circuits');
}

// ECE Basics functions
function showVoltage() {
    alert('Voltage (V):\n\nVoltage is the electrical potential difference between two points.\n\nFormula: V = W/Q\nWhere:\n- V = Voltage (Volts)\n- W = Work done (Joules)\n- Q = Charge (Coulombs)\n\nUnit: Volt (V)');
}

function showCurrent() {
    alert('Current (I):\n\nCurrent is the flow of electric charge through a conductor.\n\nFormula: I = Q/t\nWhere:\n- I = Current (Amperes)\n- Q = Charge (Coulombs)\n- t = Time (seconds)\n\nUnit: Ampere (A)');
}

function showResistance() {
    alert('Resistance (R):\n\nResistance is the opposition to the flow of electric current.\n\nFormula: R = V/I\nWhere:\n- R = Resistance (Ohms)\n- V = Voltage (Volts)\n- I = Current (Amperes)\n\nUnit: Ohm (Ω)');
}

function showPower() {
    alert('Power (P):\n\nPower is the rate at which electrical energy is used or dissipated.\n\nFormulas:\n- P = V × I\n- P = I²R\n- P = V²/R\n\nUnit: Watt (W)');
}

function showACDC() {
    alert('AC and DC:\n\nDC (Direct Current):\n- Current flows in one direction\n- Constant voltage\n- Used in batteries and electronics\n\nAC (Alternating Current):\n- Current reverses direction periodically\n- Voltage varies sinusoidally\n- Used in household power supply');
}

// Calculator function
function calculateOhm() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    
    let result = '';
    
    if (isNaN(voltage) && isNaN(current) && isNaN(resistance)) {
        result = 'Please enter at least two values!';
    } else if (isNaN(voltage) && !isNaN(current) && !isNaN(resistance)) {
        result = 'Voltage = ' + (current * resistance).toFixed(2) + ' V';
    } else if (!isNaN(voltage) && isNaN(current) && !isNaN(resistance)) {
        result = 'Current = ' + (voltage / resistance).toFixed(2) + ' A';
    } else if (!isNaN(voltage) && !isNaN(current) && isNaN(resistance)) {
        result = 'Resistance = ' + (voltage / current).toFixed(2) + ' Ω';
    } else {
        result = 'Please use only two values at a time!';
    }
    
    document.getElementById('result').innerText = 'Result = ' + result;
}

// Quiz functions
const correctAnswers = {
    1: 'A',
    2: 'B',
    3: 'C'
};

function checkAnswer(question, selected) {
    const correct = correctAnswers[question];
    const resultElement = document.getElementById('quizResult');
    
    if (selected === correct) {
        resultElement.innerText = '✓ Correct! Well done!';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = '✗ Incorrect! The correct answer is ' + correct + '.';
        resultElement.style.color = 'red';
    }
}

// Circuit display functions
function showSeriesCircuit() {
    alert('Series Circuit:\n\nIn a series circuit, all components are connected in a single loop.\n\nCharacteristics:\n- Same current flows through all components\n- Total voltage = sum of individual voltages\n- Total resistance = sum of all resistances\n- If one component fails, the circuit breaks');
}

function showParallelCircuit() {
    alert('Parallel Circuit:\n\nIn a parallel circuit, components are connected in multiple paths.\n\nCharacteristics:\n- Same voltage across all components\n- Total current = sum of branch currents\n- 1/R_total = 1/R1 + 1/R2 + ...\n- If one component fails, others still work');
}

function showLEDCircuit() {
    alert('LED + Battery Circuit:\n\nA simple circuit with an LED powered by a battery.\n\nComponents needed:\n- Battery (appropriate voltage)\n- LED\n- Current limiting resistor (220Ω to 1kΩ)\n- Wires\n\nNote: Always use a resistor to limit current and protect the LED!');
}

function showSwitchCircuit() {
    alert('Switch + LED Circuit:\n\nA circuit with a switch to control the LED.\n\nHow it works:\n- When switch is closed, current flows\n- LED lights up\n- When switch is open, no current flows\n- LED turns off\n\nApplications:\n- Simple on/off control\n- Basic electronic circuits\n- Practical demonstrations');
}