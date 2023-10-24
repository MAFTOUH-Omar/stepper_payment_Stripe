import React, { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
import PaymentMethod from '../PaymentMethod/PaymentMethod'
import DeviceType from '../DeviceType/DeviceType'
import LiveBouquet from '../LiveBouquet/LiveBouquet'
import Finish from "../Finish/Finish";

const Stepper = () => {

  const steps = ["Device Type", "Live Bouquets", "Payment Method", "Finish"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleStepOperation = () => {
    switch (currentStep) {
      case 1:
        // Opération spécifique à l'étape "Device Type"
        // Exécutez votre code ici
        break;
      case 2:
        // Opération spécifique à l'étape "Live Bouquets"
        // Exécutez votre code ici
        break;
      case 3:
        // Opération spécifique à l'étape "Payment Method"
        // Exécutez votre code ici
        break;
      case 4:
        // Opération spécifique à l'étape "Finish"
        // Exécutez votre code ici
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    handleStepOperation();
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="bg-lime-500 rounded-lg px-6 py-2 text-white"
          onClick={handleNext}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}

      {currentStep === 1 && (
        <div className="mt-5">
          <DeviceType />
        </div>
      )}
      {currentStep === 2 && (
        <div className="mt-5">
          <LiveBouquet />
        </div>
      )}
      {currentStep === 3 && (
        <div className="mt-5">
          <PaymentMethod />
        </div>
      )}
      {currentStep === 4 && (
        <div className="mt-5">
          <Finish />
        </div>
      )}
    </>
  );
};

export default Stepper;