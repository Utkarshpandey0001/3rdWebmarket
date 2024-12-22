
import { useState, useEffect } from 'react';
import { useSendTransaction } from 'wagmi';
import { parseEther } from '../node_modules/viem';
import './styles.css';

export function SendTransaction() {
  const { data: hash, sendTransaction } = useSendTransaction();
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringDays, setRecurringDays] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  async function sendTx() {
    const to = document.getElementById('to').value;
    const value = document.getElementById('value').value;
    sendTransaction({ to, value: parseEther(value) });
  }

  function startRecurringPayment() {
    const days = parseInt(recurringDays, 10);
    if (isNaN(days) || days <= 0) {
      alert('Please enter a valid number of days.');
      return;
    }
    setIsRecurring(true);
    const to = document.getElementById('to').value;
    const value = document.getElementById('value').value;

    // Set interval for recurring payment
    const id = setInterval(() => {
      sendTransaction({ to, value: parseEther(value) });
    }, days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    setIntervalId(id);
  }

  function stopRecurringPayment() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRecurring(false);
    }
  }

  return (
    <div className="transaction-card">
      <h2>Send Transaction</h2>
      <input id="to" className="input-field" placeholder="Recipient Address" required />
      <input id="value" className="input-field" placeholder="Amount (ETH)" required />
      <input
        type="number"
        className="input-field"
        placeholder="Recurring Interval (Days)"
        value={recurringDays}
        onChange={(e) => setRecurringDays(e.target.value)}
      />
      <button className="send-button" onClick={sendTx}>Send</button>
      <button className="send-button" onClick={startRecurringPayment} disabled={isRecurring}>
        Start Recurring Payment
      </button>
      <button className="send-button stop-button" onClick={stopRecurringPayment}>
        Stop Recurring Payment
      </button>
      {hash && <p className="transaction-hash">Transaction Hash: {hash}</p>}
    </div>
  );
}
