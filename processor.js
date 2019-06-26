class PhaseInverter extends AudioWorkletProcessor {

  // Custom AudioParams can be defined with this static getter.
  static get parameterDescriptors() {
    return [];
  }

  constructor() {
    // The super constructor call is required.
    super();
  }

  process(inputs, outputs) {
    const input = inputs[0];
    const output = outputs[0];
    for (let channel = 0; channel < input.length; ++channel) {
      const inputChannel = input[0];
      const outputChannel = output[channel];
      for (let i = 0; i < inputChannel.length; ++i){
        outputChannel[i] = inputChannel[i] * Math.pow(-1.0, channel);
      }
    }

    return true;
  }
}

registerProcessor('phase-inverter', PhaseInverter);