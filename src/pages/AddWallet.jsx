import React, { useState } from 'react';

const AddWallet = () => {
  const [step, setStep] = useState(1);
  const [walletInfo, setWalletInfo] = useState({
    networkType: '',
    walletAddress: '',
  });
  const [verificationMethod, setVerificationMethod] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleWalletInfoChange = (e) => {
    const { name, value } = e.target;
    setWalletInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleVerificationMethodChange = (e) => {
    setVerificationMethod(e.target.value);
  };

  const handleVerifyWallet = async () => {
    setProgress(50);

    try {
      const response = await fetch('https://api.example.com/verify-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          networkType: walletInfo.networkType,
          walletAddress: walletInfo.walletAddress,
          verificationMethod: verificationMethod,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при проверке кошелька');
      }

      const result = await response.json();
      setVerificationResult(result.message);
    } catch (error) {
      setVerificationResult('Ошибка при проверке кошелька');
    } finally {
      setProgress(100);
      setStep(3);
    }
  };

  return (
    <div>
      <h1>Добавление кошелька в аккаунт</h1>

      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <label>
          Тип основной сети:
          <input
            type="text"
            name="networkType"
            value={walletInfo.networkType}
            onChange={handleWalletInfoChange}
          />
        </label>
        <br />
        <label>
          Адрес кошелька:
          <input
            type="text"
            name="walletAddress"
            value={walletInfo.walletAddress}
            onChange={handleWalletInfoChange}
          />
        </label>
        <br />
        <button onClick={() => setStep(2)}>Далее</button>
      </div>

      <div style={{ display: step === 2 ? 'block' : 'none' }}>
        <label>
          Выберите способ проверки:
          <select value={verificationMethod} onChange={handleVerificationMethodChange}>
            <option value="api">API проверка</option>
            {/* Добавьте другие способы проверки, если необходимо */}
          </select>
        </label>
        <br />
        <button onClick={handleVerifyWallet}>Проверить</button>
      </div>

      <div style={{ display: step === 3 ? 'block' : 'none' }}>
        <h3>Результат проверки:</h3>
        <p>{verificationResult}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
};

export default AddWallet;
